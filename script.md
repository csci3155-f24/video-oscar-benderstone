# Introduction
Hello! My name is Oscar, and for my mini-project, I will be exploring Express.JS with TypeScript.

Express is a popular JavaScript framework used to create web applications. It has a minimal, easy-to-use API for HTTP requests, with options to add custom middleware. I used this framework in CS3308, Software Development, and noticed it has several PPL concepts. The two I will focus on here are functions and datatypes.

// Transitions to project.

For the sake of time, I found small code snippets from the Express documentation and ran them. All concepts are shown through the code in `src/index.ts`, using TypeScript for type annotations. Also, due to technical difficulties, I am recording my laptop screen on my iPad.

# Functions

Express exemplifies functions as values, incorporating several operations on functions. 
- Functions are values: we can define functions and use them as arguments for methods in `app`, the Express object. Calling the `next` function, without any parameters, redirects control flow to the next available route 
- Variadic parameters: we can add as many functions as we want in `app.use`. Here we are using both `getRequestURL` and `getRequestMethod` as parameters. Each function is called, one after the other.
- Anonymous functions: we can write anonymous functions for our parameters instead. Here, we are checking whether the user id matches 0. If it does, we go to a route to print `special`, and if not, we print `regular`. This is useful for separating actions between, say, normal users vs site administrators.
- Chaining: taking the same example above, we can instead chain methods together. Small note: this also appears in JavaScript via Promises, where we can chain asyncrhonous functions together via `then` and `catch`.

# Data Types

I showed several examples of types in the code, but `@types/express` has many more. If we go to DefinitelyTyped on GitHub...

// Proceed to webpage

... we see several important kinds that appear in class. Firstly, Response, Request, and Express  are abstract data types. The Express documentation explains their fields and methods, but not underlying implementations. In particular, requests on `app`, such as `use` and `get`, expect a string, the route, and a callback, with the response and request as input. Express only guarantees that these functions are run, not how or where these functions are called.

Secondly, there is a big emphasis on parametric types, appearing in Response, Request, and the callback `next` in app requests. An interesting note: in my investigations, I found that `next` is a function type with parameter and return type `any`. While this has more expressive power, the type system has less information, which is important for developers to keep in mind.


With the type system, TypeScript ensures the parameters to any callback are the correct types. During testing, I had to add type annotations to ensure this callback met the typing requirements. This enabled safer code and made sure I strictly worked with a triple: the response, request, and optional next callback.

# Conclusion

Overall, Express.JS has several connections to the course, many of which enhance code readability and flow. Many of the types through TypeScript help make the code more self-documenting and less error prone.
