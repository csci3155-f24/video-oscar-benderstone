import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Express!')
})


// Concept 1: Higher order functions

// Composing functions
//
function add(y: number, f: (x: number) => number): (x:number) => number {
    return function (x: number): number {
        return y + f(x); 
    }
}


function multiply(y: number, f: (x: number) => number): (x:number) => number {
    return function (x: number): number {
        return y * f(x); 
    }
}

app.get('/function-compose', (req: Request, res: Response) => {
    const x = 2;
    const y = 3;
    const f = function(x: number) {
        return 2 * x;
    }
    const g = function(x: number) {
        return 2 + x;
    }

    const add_f = add(y, f)(x)
    const multiply_g = multiply(y, f)(x)

    const output = `${add_f}, ${multiply_g}`

    res.send(`${output}`)
})


// Next: using a callback, transitions
// between one middleware to another.


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
