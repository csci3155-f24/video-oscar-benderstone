[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/skJdUf3s)
# Principles of Programming and Programming Languages
# Mini-Project

See [instructions.md](instructions.md) for submission instructions.

# Exploring the Express Web Framework

## Description

Express is a popular JavaScript framework made by the OpenJS foundation to create web applications. The reason for this is  It provides an easy-to-use API for HTTP utilities, has a small footprint, and can be augmented with custom middleware. All of these features explain why Express is one of the most used JavaScript packages globally. According to npm, Express has 33,820,381 weekly downloads and 87,467 dependent packages [1]. The framework is well-maintained and continues to support several programs for the web.

In addition to its popularity and robustness, Express incorporates many PPL concepts. For instance, Express exemplifies functions as values, provides routes as higher order functions, and `map` throughout the codebase. Additionally, Express uses several abstract data types and parametric types, the latter of which appear in the package `@types/express`. Both of these aspects make the API more declarative and easier to use.

To analyze thse concepts in Express, this project is run with NodeJS with a browser. The source code contains examples of funtional programming and data types. Each example is rendered on its own separate webpage, with both the source code and output.

## Repository Organization

- `build`
    - `index.js`: Generated from `src/index.ts`. Used to run the project.
- `src`
    - `index.ts`: TypeScript source code. Shown in the demo to emphasize types.
- `docker-compose.yaml`: manages the `docker-compose` configuration for this project.
- `package.json`: manages the JavaScript dependencies and project commands.
- `README.md`
- `script.md`

## Building and Testing Instructions

First, set up this project with NodeJS: `npm install`.

Then, to test the source code, run: `docker-compose up`. On Linux/MacOS, you will (probably) need to run this command with `sudo`.

# Sources

[1] "express", NPM, [https://www.npmjs.com/package/express].

[2] OpenJS Foundation, "Express.JS", [https://expressjs.com/].

## Presentation

TODO: Update the following links and remove this line.

- YouTube: https://youtu.be/TODO.
- Script: [script.md](script.md) or [script.pdf](script.pdf).
- Recording: [recording.mp4](recording.mp4).
- Slides (if you use them in your recording): [slides.pdf](slides.pdf) and slide sources (e.g., [slides.pptx](slides.pptx) or [slides.key](slides.key)).
