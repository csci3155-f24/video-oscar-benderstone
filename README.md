[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/skJdUf3s)
# Principles of Programming and Programming Languages
# Mini-Project

See [instructions.md](instructions.md) for submission instructions.

# Exploring the Express Web Framework

## Description

Express is a popular JavaScript web framework. It features an easy-to-use API for working with HTTP requests and routes. The framework is light-weight, well-maintained, and is customizable via user-made middleware. Express is widely used, being downloaded 32,820,381 times weekly and being used in 87,467 other npm packages [2]. An extension, via the DefinitelyTyped library, adds detailed type annotations, making Express.JS easier to use in TypeScript.

Among these features, ExpressJS exemlifies many PPL concepts. It has a strong focus on functions, treating functions as values, using higher-order functions, and including callbacks. It also has a strong emphasis on data types, with abstract data types for requests and responses and parametric types via DefinitelyTyped.


To demo these concepts in Express, this project uses a TypeScript file with several examples. Each example has its own webpage displaying the corresponding output. However, the concepts are best displayed in the code itself, found in `src/index.ts`.

## Repository Organization
- `src/index.ts`: contains the main source file used in the demo, with type annotations.
- `build/index.js`: contains the code that docker runs in the browser.
- `README.md`
- `script.md`

## Building and Testing Instructions

First, set up the project with npm: `npm install`.

Then, run with `docker-compose`, with root privileges on Linux/MacOS: `sudo docker-compose up`.

## Sources

[1] "DefinitelyTyped/DefinitelyTyped", hosted on GitHub, [https://github.com/DefinitelyTyped/DefinitelyTyped].

[2] "express", NPM, [https://www.npmjs.com/package/express].

[3] "expressjs/express", hosted on GitHub, [https://github.com/expressjs/express].

[4] OpenJS Foundation, "Express", [https://expressjs.com].


## Presentation

TODO: Update the following links and remove this line.

- YouTube: https://youtu.be/TODO.
- Script: [script.md](script.md) or [script.pdf](script.pdf).
- Recording: [recording.mp4](recording.mp4).
- Slides (if you use them in your recording): [slides.pdf](slides.pdf) and slide sources (e.g., [slides.pptx](slides.pptx) or [slides.key](slides.key)).
