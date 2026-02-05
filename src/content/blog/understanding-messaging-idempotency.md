---
title: From Black Box to Black Belt — Understanding Messaging Patterns and Idempotency
description: How a simple user ID generation problem led me to understand race conditions, delivery semantics, and the Outbox/Inbox patterns that power modern distributed systems.
date: 2026-02-05
author: Tsholofelo Ndawonde
tags: [Messaging, Idempotency, Distributed Systems, Azure Service Bus, System Design]
readTime: 18 min
published: true
featured: false
image: https://images.unsplash.com/photo-1551737906-65f42a8b0e38?w=1200&h=630&fit=crop
imageHint: Complex distributed system architecture with interconnected nodes
---

When building software, some problems may seem deceptively simple—until they become complicated. One such challenge is generating user IDs in a clean and predictable format, such as "abc-002." At first glance, the solution seems straightforward: check the last ID in the database and increment it for the following user. This approach is practical, especially given the application's event-driven nature.


However, I encountered a problem: **what happens if multiple users access the same endpoint simultaneously?**

## The Race Condition Problem

This scenario, known as **concurrency**, can lead to **race conditions**. For instance, how can the application ensure that User A receives the ID "abc-003" if they were the first to request it?

To tackle this issue, I consulted AI for a solution. It recommended using a messaging service, and since my application is written in C#, **Azure Service Bus** was suggested. After switching my code editor to agent mode, I implemented the fix, which worked well.

However, I realised that I didn't fully understand the system behaviours upon which the solution depended, such as race conditions and idempotency, which are crucial for reliable messaging systems.

**While the solution was effective, I knew I needed to grasp the underlying concepts to enhance my knowledge as a software engineer.**

## The Modern System Reality

Modern systems are typically event-driven, asynchronous, and **inherently unreliable**. This means that code execution does not follow a linear path. When an event triggers a message, it might:

- Arrive late
- Be duplicated
- Come in out of order
- Not arrive at all

To understand messaging effectively, it is crucial to familiarise yourself with key concepts such as **queues and topics**:

- **Queue**: One-to-one communication using First In, First Out (FIFO) message delivery, where messages are processed in the order they were added. This pattern is especially beneficial for background tasks.
- **Topic**: One-to-many communication, allowing multiple consumers to receive the same message (e.g., a welcome email).

Knowing which messaging pattern to use is essential, as it can significantly affect your application's performance and user experience.

---

## 1. Ensuring Idempotency in a Messaging System (Practical Playbook)

**Idempotency** means that processing the same message more than once does not change the result.

### Core Best Practices

#### 1️⃣ Use a Unique, Deterministic Message ID

Every message must have a stable identifier:

- `event_id`
- `message_id`
- `order_id + version`
- `aggregate_id + sequence_number`

This ID must be:

- Generated once
- Propagated across retries
- Persisted

📌 **Never generate a new ID on retry.**

#### 2️⃣ Store Processed Message IDs (Inbox Table)

Before handling a message:

1. Check if `message_id` exists
2. If yes → skip processing
3. If no → process and store the ID

Typical schema:

```sql
inbox (
  message_id UUID PRIMARY KEY,
  processed_at TIMESTAMP
)
```

This is the **Inbox Pattern** in its simplest form.

#### 3️⃣ Make Handlers Idempotent by Design

Your business logic should tolerate replays.

**Bad:**

```sql
INSERT INTO users (email) VALUES ('a@b.com')
```

**Good:**

```sql
INSERT INTO users (email)
VALUES ('a@b.com')
ON CONFLICT (email) DO NOTHING
```

Other strategies:

- Use UPSERT
- Version checks (`WHERE version = expected`)
- State transitions instead of actions

#### 4️⃣ Use Database Constraints as Safety Nets

Let the database protect you:

- Unique constraints
- Foreign keys
- Conditional updates

Example:

```sql
UPDATE orders
SET status = 'PAID'
WHERE id = :id AND status = 'PENDING'
```

If it runs twice, the second does nothing.

#### 5️⃣ Treat Retries as the Default, Not the Exception

Design assuming:

- Network failures
- Consumer crashes
- Broker redeliveries

**If your handler breaks on retries → it's not production-ready.**

---

## 2. When to Implement the Outbox and Inbox Patterns

### Outbox Pattern (Producer Side)

**Problem it solves:** You update the database but fail to publish the message (or vice versa).

**When to use it:**

✅ You:

- Write to a DB AND
- Publish an event/message
- Need guaranteed consistency

**Classic failure scenario:**

```text
DB commit ✅
Message publish ❌
→ Downstream systems never see the change
```

**Outbox solution:**

1. Write business data
2. Write the event to the outbox table
3. Commit transaction
4. Background worker publishes events
5. Marks them as sent

Schema:

```sql
outbox (
  id UUID,
  aggregate_id,
  event_type,
  payload,
  published BOOLEAN
)
```

📌 **Rule of thumb:** If state change and event publish must succeed together → use Outbox.

### Inbox Pattern (Consumer Side)

**Problem it solves:** The message is delivered more than once.

**When to use it:**

✅ You:

- Consume messages from a broker
- Use at-least-once delivery
- Cannot tolerate duplicate side effects

📌 **Rule of thumb:** If duplicates would cause real damage → use Inbox.

### When to Use BOTH

Use **Outbox + Inbox** when:

- You have distributed services
- Events drive state changes
- You care about correctness over simplicity

This combo is ubiquitous in:

- Financial systems
- Order processing
- Event-driven microservices

---

## 3. Delivery Semantics: Real-World Implications

Let's cut through the marketing.

### 🔹 At-Most-Once

The message is delivered **0 or 1 time**.

**Characteristics:**

- No retries
- Fast
- Simple

**Trade-offs:**

- ❌ Messages can be lost
- ❌ Not reliable

**Use when:**

- Logging
- Metrics
- Non-critical notifications

📌 **If it fails, you don't care.**

### 🔹 At-Least-Once (Most Common)

The message is delivered **1 or more times**.

**Characteristics:**

- Retries enabled
- Reliable
- Duplicates possible

**Trade-offs:**

- ❌ Requires idempotency
- ❌ More engineering effort

**Use when:**

- Payments
- Orders
- Emails
- User actions

📌 **This is the default for Kafka, RabbitMQ, and SQS.**

### 🔹 Exactly-Once (The Myth)

The message is processed **once and only once**.

**Reality check:**

- Usually not truly end-to-end
- Achieved via:
  - Transactions
  - Deduplication
  - Idempotent consumers

⚠️ **Kafka's "exactly-once" = effectively-once within Kafka + consumer group, not your DB.**

**Trade-offs:**

- ❌ Complex
- ❌ Slower
- ❌ Hard to debug

**Use when:**

- Financial ledgers
- Critical accounting flows

📌 **Most "exactly-once" systems are really at-least-once + idempotency.**

### How to Choose in Practice

| Scenario | Recommendation |
| --- | --- |
| Non-critical data | At-most-once |
| Business workflows | At-least-once + idempotency |
| Financial correctness | At-least-once + Outbox + Inbox |

⚠️ **Marketing "exactly-once"?** Verify what it really means.

---

## Idempotency vs. Deduplication

When designing an event-driven application, you'll encounter terms like "idempotency" and "deduplication."

- **Idempotency**: The ability to run the same operation multiple times while yielding the same result.
- **Deduplication**: Detecting and managing duplicate operations.

Standard techniques for implementing these concepts include:

- Using message IDs
- Time-window-based deduplication

**The key distinction:** Idempotency ensures safe behaviour, while deduplication serves as a detection mechanism.

---

## My Application and the Three Delivery Modes

The application I was developing is an **in-process domain event publisher** that provides immediate consistency but lacks guaranteed delivery across service boundaries.

I researched three delivery modes for messaging systems:

1. **"At-most-once"** — The fastest but risks losing messages.
2. **"At-least-once"** — Ensures messages are never lost but requires idempotency to handle potential duplicates.
3. **"Exactly-once"** — Efficient, but it is the most complex and expensive.

**Deciding which model to use involves weighing the trade-offs between simplicity and correctness.**

---

## Do You Need Outbox and Inbox Patterns?

When I first learned about this, I questioned whether my application required these patterns. The Outbox and Inbox pattern can be complex and may be overkill for some applications.

However, **consider implementing it if your application:**

- Has distributed messaging needs
- Uses long-running operations
- Requires idempotency guarantees for background job processing
- Needs to meet audit compliance by ensuring that every event is persisted before publishing

---

## The Real Lesson: Curiosity Over Convenience

This experience reminded me that **modern software systems are rarely linear or straightforward**. They are asynchronous, event-driven, and full of trade-offs. Concepts like idempotency, delivery guarantees, and messaging patterns aren't just academic—they directly influence the reliability and scalability of an application.

### AI Tools: Productivity vs. Understanding

AI tools can dramatically improve productivity. In my case, they helped me quickly resolve a real production problem. However, they can also obscure essential complexities behind working solutions.

**If we don't take the time to understand why something works, we risk turning powerful tools into black boxes.**

### Transform Working Solutions into Knowledge

The real lesson wasn't about Azure Service Bus or user ID generation—it was about **curiosity**.

Questioning recommendations, unpacking unfamiliar terms, and understanding system behaviour transforms a working solution into lasting knowledge. In a world where software systems are becoming increasingly distributed and complex, fostering this habit is more important than ever.

**The goal isn't just to build systems that work. It's to build systems you understand.**

---

## Key Takeaways

1. **Race conditions are real** — Concurrent access requires thoughtful design
2. **Idempotency is non-negotiable** — Build it in from the start
3. **Choose your delivery semantics wisely** — At-least-once + idempotency is usually the sweet spot
4. **Patterns like Outbox/Inbox solve real problems** — But only implement them if you need them
5. **Understanding matters** — Don't treat solutions as black boxes; invest time in learning why they work
6. **Modern systems are inherently distributed** — Plan for failures, duplicates, and ordering issues

The next time you use an AI-suggested solution, take a moment to understand it. Your future self (and your team) will thank you.
