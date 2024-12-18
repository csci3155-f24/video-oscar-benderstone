import express, {Request, Response} from 'express';

const app = express();
const port = 3000;
const router = express.Router()

// Concept 1: Functions 
//
// Adapted (with extra comments) from:
// Express Documentation
// https://expressjs.com/en/guide/using-middleware.html
//
// From the Documentation:
// "Middleware functions can perform the following tasks:

// - Execute any code.
// - Make changes to the request and the response objects.
// - End the request-response cycle.
// - Call the next middleware function in the stack.""

// Functions as Values
// Note: next uses any types for parameters and returned expression
function logTime(req: Request, res: Response, next: Function) {
  console.log('Time:', Date.now())
  next()
}

//a middleware function with no mount path. This code is executed for every request to the router
router.use(logTime)


// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
function getRequestURL(req: Request, res: Response, next: Function) {
  console.log('Request URL:', req.originalUrl)
  next()
}

function getRequestType(req: Request, res: Response, next: Function) {
  console.log('Request Type:', req.method)
  next()
}

router.use('/user/:id', getRequestURL, getRequestType)

// TYPE: (string, (Request, Response, next: (...args: any) => any))

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', (req: Request, res: Response, next) => {
  // if the user ID is 0, skip to the next router
  console.log(req.params.id)
  if (req.params.id === '1') next('route')
  // otherwise pass control to the next middleware function in this stack
  else next()
}, (req: Request, res: Response, next) => {
  // render a regular page
  res.send('USER: regular')
})

// handler for the /user/:id path, which renders a special page
router.get('/user/:id', (req, res, next) => {
  console.log(req.params.id)
  res.send('USER: special')
})

// Alternatively, these can be chained:
router
    .get('/user1/:id', (req: Request, res: Response, next) => {
  // if the user ID is 0, skip to the next router
  console.log(req.params.id)
  if (req.params.id === '1') next('route')
  // otherwise pass control to the next middleware function in this stack
  else next()
}, (req: Request, res: Response, next) => {
  // render a regular page
  res.send('USER: regular')
})
    .get('/user1/:id', (req, res, next) => {
  console.log(req.params.id)
  res.send('USER: special')
})

// mount the router on the app
app.use('/', router)


app.get('/', (req: Request, res: Response) => {
    res.redirect('/user/:id')
})

// END Example

// Concept 2: Data Types
//
// See link:
// DefinitelyTyped/DefinitelyTyped/types/express
// License: MIT license
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/3c2ad7892a2d12f005177087a909635a71a50bcf/types/express/index.d.ts

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
