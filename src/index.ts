import express, {Request, Response} from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


// Adapted from: 
// DefinitelyTyped/DefinitelyTyped/types/express
// License: MIT license
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/3c2ad7892a2d12f005177087a909635a71a50bcf/types/express/index.d.ts#L96
app.get('/types-express', (req: Request, res: Response) => {


})
