/**
 * ANIMATION CHEAT SHEET
 * Quick reference for all available emotional design animations
 */

/*
 * ============================================================================
 * ENTRANCE ANIMATIONS (for content appearing on page load/scroll)
 * ============================================================================
 */

// Subtle fade with slight upward movement
className="animate-fade-in" // 500ms ease-out

// Bouncy scale entrance (playful)
className="animate-bounce-in" // 600ms bounce easing

// Scale + upward motion (energetic)
className="animate-bounce-up" // 700ms spring easing
// Use for: Hero titles, section headings, CTAs

// Scale + downward motion (playful reveal)
className="animate-bounce-down" // 700ms spring easing

// Simple fade for staggered lists
className="animate-cascade-in" // 500ms ease-out
// Pair with [animation-delay:XXms] for stagger effect

// Slide from right (page entry)
className="animate-swipe-in-right" // 500ms spring easing

// Slide from left (page entry)
className="animate-swipe-in-left" // 500ms spring easing

/*
 * ============================================================================
 * HOVER & INTERACTIVE ANIMATIONS (for user interactions)
 * ============================================================================
 */

// Quick scale boost on hover (premium feel)
className="animate-spring-scale" // 400ms spring easing
// Use for: Cards, buttons, icons

// Playful bouncy scale (fun emphasis)
className="animate-elastic-scale" // 600ms spring easing
// Use for: Special badges, highlighted items

// Click ripple effect (built into EnhancedButton)
className="animate-ripple" // 600ms ease-out

// Playful wiggle (grabs attention)
className="animate-wiggle" // 300ms ease-in-out

/*
 * ============================================================================
 * AMBIENT ANIMATIONS (for background interest)
 * ============================================================================
 */

// Gentle floating motion (background elements)
className="animate-float" // 3s ease-in-out infinite
// Use for: Hero background orbs, floating elements

// Subtle float (more subdued)
className="animate-gentle-float" // 4s ease-in-out infinite

// Pulsing glow shadow (attention without distraction)
className="animate-pulse-glow" // 2s infinite
// Use for: Important badges, availability indicators

// Color pulsing between primary and accent
className="animate-pulse-color" // 2s ease-in-out infinite
// Use for: Gradients, branded text

/*
 * ============================================================================
 * LOADING STATE ANIMATIONS (for perceived performance)
 * ============================================================================
 */

// Classic spinning loader
<LoadingSpinner variant="default" />

// Glowing pulse
<LoadingSpinner variant="pulse" />
// Use for: Full page loading (calming, hypnotic)

// Bouncing dots
<LoadingSpinner variant="bounce" />
// Use for: Section loading (playful)

// Three animated dots
<LoadingSpinner variant="dots" />
// Use for: Inline loading (compact)

// Shimmer effect for skeletons
className="animate-shimmer" // 2s infinite
// Use for: Image placeholders, content skeletons

// Pulsing skeleton state
className="animate-skeleton-pulse" // 2s ease-in-out infinite

/*
 * ============================================================================
 * PAGE TRANSITION ANIMATIONS (for route changes)
 * ============================================================================
 */

// <PageTransition variant="fade">
//   Content fades in smoothly
// </PageTransition>

// <PageTransition variant="slide-up">
//   Content slides up from bottom
// </PageTransition>

// <PageTransition variant="cascade">
//   Content cascades down (recommended default)
// </PageTransition>

// <PageTransition variant="bounce">
//   Content bounces in with energy
// </PageTransition>

/*
 * ============================================================================
 * SCROLL-TRIGGERED ANIMATIONS
 * ============================================================================
 */

// Parallax effect on scroll
// const { ref, style } = useParallax({ strength: 0.5 })
// <div ref={ref} style={style}>Content</div>

// Trigger animation when in viewport
// const { ref, isInView } = useInView({ threshold: 0.5 })
// <div ref={ref} className={isInView ? 'animate-fade-in' : 'opacity-0'}>
//   Content reveals on scroll
// </div>

// Cursor-following tilt (interactive)
// const { ref, style } = useCursorFollow()
// <div ref={ref} style={style}>Tilts with cursor</div>

/*
 * ============================================================================
 * STAGGERED ANIMATIONS (for lists & grids)
 * ============================================================================
 */

// Auto-staggered child animations
// <StaggerContainer staggerChildren={true} variant="cascade">
//   <div>Item 1</div>  <!-- delay: 0ms -->
//   <div>Item 2</div>  <!-- delay: 100ms -->
//   <div>Item 3</div>  <!-- delay: 200ms -->
// </StaggerContainer>

// Manual stagger with delay classes
// <div className="animate-cascade-in" style={{ animationDelay: '0ms' }} />
// <div className="animate-cascade-in" style={{ animationDelay: '100ms' }} />
// <div className="animate-cascade-in" style={{ animationDelay: '200ms' }} />

/*
 * ============================================================================
 * COMPONENT-LEVEL ANIMATIONS
 * ============================================================================
 */

// CARDS with interactive lift & glow
// <Card interactive={true} glow={true}>
//   Lifts on hover, glows with primary color
// </Card>

// BUTTONS with bounce entrance & active feedback
// <Button>
//   Lifts on hover, scales down on click
//   (All variants: default, destructive, outline, secondary, ghost, link)
// </Button>

// ENHANCED BUTTONS with ripple
// <EnhancedButton showRipple={true} pulseOnHover={true}>
//   Click for ripple effect
// </EnhancedButton>

// IMAGES with parallax, zoom, glow
// <AnimatedImage 
//   src="/img.jpg" 
//   parallax={true}      // Mouse movement parallax
//   hoverScale={1.08}    // Zoom on hover
//   glow={true}          // Glow shadow on hover
// />

// HERO with multiple effects
// <EmotionalHero
//   title="Amazing Title"
//   subtitle="Badge"
//   description="Your message"
//   cta={{ label: 'Action', onClick: () => {} }}
//   backgroundPattern={true}
// />
// Includes: gradient background orbs, cursor tracking, animated CTA

/*
 * ============================================================================
 * COMMON PATTERNS
 * ============================================================================
 */

// Pattern 1: Hero entrance with staggered elements
// <div className="animate-fade-in">
//   <h1 className="animate-bounce-up" style={{ animationDelay: '0.1s' }} />
//   <p className="animate-bounce-up" style={{ animationDelay: '0.2s' }} />
//   <button className="animate-bounce-up" style={{ animationDelay: '0.3s' }} />
// </div>

// Pattern 2: Card grid with hover effects
// <StaggerContainer staggerChildren={true}>
//   {items.map((item) => (
//     <Card interactive={true} glow={true} key={item.id}>
//       {item.content}
//     </Card>
//   ))}
// </StaggerContainer>

// Pattern 3: Scroll-triggered reveals
// {sections.map((section) => {
//   const { ref, isInView } = useInView()
//   return (
//     <section 
//       ref={ref} 
//       className={isInView ? 'animate-fade-in' : 'opacity-0'}
//     >
//       {section.content}
//     </section>
//   )
// })}

// Pattern 4: Loading to success state transition
// <div className={isLoading ? 'block' : 'hidden'}>
//   <PageLoading variant="bounce" />
// </div>
// <div className={!isLoading ? 'animate-fade-in' : 'hidden'}>
//   Success content
// </div>

/*
 * ============================================================================
 * TIMING GUIDELINES
 * ============================================================================
 */

// FAST (immediate feedback)
// Duration: 150-300ms
// Use for: hover states, button clicks, toggles
// Easing: ease-out, spring

// MEDIUM (normal transitions)
// Duration: 400-600ms
// Use for: entrance animations, page transitions
// Easing: ease-out, bounce

// SLOW (entrance, attention)
// Duration: 700-1000ms
// Use for: hero animations, hero titles, important reveals
// Easing: bounce, spring, elastic

// LOOPING (ambient, loading)
// Duration: 2-4s
// Use for: background effects, loading states
// Easing: ease-in-out, infinite

/*
 * ============================================================================
 * WHEN TO USE WHICH ANIMATION
 * ============================================================================
 */

// animate-fade-in
//   ✓ Subtle transitions
//   ✓ Screen readers & reduced motion
//   ✓ Professional tone
//   ✗ Not playful enough alone

// animate-bounce-up / animate-bounce-down
//   ✓ Hero sections
//   ✓ Important CTAs
//   ✓ Playful, modern feel
//   ✗ Overuse feels gimmicky

// animate-cascade-in
//   ✓ Lists of items
//   ✓ Staggered reveals
//   ✓ Content sections
//   ✗ Single elements

// animate-spring-scale
//   ✓ Card hover
//   ✓ Icon emphasis
//   ✓ Quick reactions
//   ✗ Page load (too fast)

// animate-float / animate-gentle-float
//   ✓ Background elements
//   ✓ Hero orbs
//   ✓ Ambient interest
//   ✗ Primary content

// animate-pulse-glow
//   ✓ Badges
//   ✓ Availability indicators
//   ✓ Call-to-action emphasis
//   ✗ Multiple simultaneous elements

/*
 * ============================================================================
 * PERFORMANCE OPTIMIZATION
 * ============================================================================
 */

// ✓ DO THIS:
// - Use transform, opacity (GPU accelerated)
// - Keep animations under 700ms
// - Use CSS animations for most effects
// - Test on low-end mobile devices

// ✗ AVOID THIS:
// - Animating width, height, left, right (causes reflow)
// - More than 3-4 simultaneous complex animations
// - Animation durations over 1 second (unless loading)
// - Heavy JavaScript for simple effects

/*
 * ============================================================================
 * ACCESSIBILITY REMINDERS
 * ============================================================================
 */

// ✓ All animations respect prefers-reduced-motion
// ✓ Keyboard navigation works normally
// ✓ Screen readers hear proper labels
// ✓ Focus states remain visible
// ✓ No flashing or strobing (could trigger photosensitivity)

// Test with:
// macOS: System Preferences > Accessibility > Display > Reduce motion
// Windows: Settings > Ease of Access > Display > Show animations
// DevTools: Rendering > Emulate CSS media feature prefers-reduced-motion

export {}
