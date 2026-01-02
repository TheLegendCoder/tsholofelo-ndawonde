JSON Serialization  

I am writing about JSON serialization because I recently ran into some tricky issues with it during my development work. Thankfully, AI tools helped me out, and that got me thinking: What exactly is JSON serialization? Why is it important? Is it even necessary? 

This article explains JSON serialization and deserialization, their importance in software development, provides code examples, and covers common issues.    

"Assumptions are dangerous." 

That is a phrase I like to use—and it applies well to coding. Context is everything, especially when working with AI tools. As in real-world or social interactions, outcomes are significantly affected by the amount of context provided.  So, I am going to assume that you are a software developer with at least some familiarity with JSON. 

What is JSON Serialisation   

JSON serialization is the process of converting complex objects into a format that’s suitable for storage or transmission. In other words, it converts an object's state into a JSON string that can be read by humans and is suitable for sharing or storage. 

This process involves traversing the object’s properties (fields and getters) and converting their values into corresponding JSON data types. 

Most modern languages and frameworks provide built-in tools for this. For example: 

.NET: JsonSerializer.Serialize 

Python: json.dumps 

Java: ObjectMapper 

These tools manage object inspection and JSON string generation. 

Here is an example of the use of JSON serialization. In this example I am serialising an object for my audit logs. 

[HttpPost("register")] 

    public async Task<ActionResult<ServiceResponse<UserRegister>>> Register([FromBody] UserRegister register) 

    { 

        // Use the first role if provided, otherwise pass empty string 

        var role = register.Roles?.FirstOrDefault() ?? string.Empty; 

        var result = await _authRepository.Register(register, register.Password, role); 

 

        await _auditLogRepository.LogAsync( 

            action: "Add", 

            entityName: nameof(UserRegister), 

            entityId: result.Data?.FirstName ?? string.Empty, 

            oldValues: string.Empty, 

            newValues: JsonSerializer.Serialize(result.Data), 

            ipAddress: "123.344" 

        ); 

 

        return Ok(result); 

    } 

 

This code defines an ASP.NET Core controller action for user registration. The method uses the [HttpPost("register")] attribute, indicating it processes HTTP POST requests directed to the /register endpoint.  The method accepts a UserRegister object from the request body, which contains user registration details. 

Inside the method, it determines the user's role by checking the Roles property of the UserRegister object. If roles are specified, the first role is used; if not, an empty string is assigned by default.  This role, along with the registration details and password, is passed to the _authRepository.Register method, which handles the actual registration logic and returns a result. 

After registration, the method logs the action using _auditLogRepository.LogAsync. It records the action as "Add", the entity name as UserRegister, and uses the user's first name as the entity ID. Since this is a new registration, old values are blank, and new values are stored as JSON.  Please note the serialisation that if I did not add this than I would have gotten this error -  cannot convert from 'UserRegister(object)' to 'string. The IP address is hardcoded as "123.344", which is a placeholder. 

Finally, the method returns an HTTP 200 OK response containing the result of the registration process. This structure manages user registration and includes logging for auditing purposes.  It is generally advised to avoid hardcoding the IP address in production environments; instead, it can be dynamically obtained from the request context. 

 

 

 

JSON Deserialization  

JSON deserialization is the reverse: taking a JSON string or byte stream and reconstructing it back into an object that your program can work with. 

This is critical when consuming data from external APIs or reading stored data—because your app needs to understand and use that information. 

 

The Deserialization Error I Encountered 

One of the common errors I keep running into is this: 

System.Text.Json.JsonException: The JSON value could not be converted to... 

I usually see this when I connect my API to the front end. Interestingly, the API works fine in Swagger or Postman, but fails when hit from the actual front end of my application. 

This error usually means the JSON being deserialized doesn’t match the expected .NET type. That mismatch might be: 

A different property name 

A type mismatch (e.g., string instead of int) 

Missing or extra fields 

A simple way to fix this is to ensure the structure of your incoming JSON matches the structure of your C# object exactly including property names and data types. Tools like JsonSerializerOptions.PropertyNameCaseInsensitive = true can help, but proper alignment is best practice. 

 

 

 

Why JSON Serialization Matters 

Serialization and deserialization are foundational for modern software systems. Without them, it would be almost impossible to: 

Transfer data between systems. 

Persist application state. 

Reconstruct object state after retrieval. 

Let us examine several primary use cases: 

 

  

 

1. Facilitating Data Transfer and API Communication 

Serialization is the process of converting in-memory objects into a portable format that can be transmitted over the internet, such as through REST APIs. 

For example, in one of my projects, I built an Android app that connects to an ASP.NET Core Web API. JSON acts as the glue between the mobile front end and the backend server. 

Why JSON? Because: 

It is lightweight. 

It is human-readable. 

JavaScript provides built-in support for this feature and is commonly used in front-end applications. 

That is why JSON is the de facto standard for REST APIs and browser-server communication. 

2. Enabling Data Persistence and Storage 

Serialization is not just for network communication. It also helps you store object state—say in a file, database, or session. 

Use cases include: 

Saving user sessions 

Storing app settings 

Backing up game state 

You can manually serialize an object to a JSON string and store it or use an ORM (like Entity Framework) to manage this behind the scenes. 

For example, storing a complex object like a user profile in a PostgreSQL database as a JSON column lets you persist flexible data structures without needing rigid schemas. 

 

Conclusion 

JSON serialization and deserialization are more than just technical processes—they are essential tools for creating modern, connected, and persistent software applications. Whether you are building APIs, saving app state, or working with distributed systems, understanding how these processes work (and how they can fail) will make you a more effective developer. 

In my own journey, running into serialization issues reminded me of just how fragile the communication between components can be—and how important it is to get the details right. 

 