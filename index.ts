import express, { Request, Response, Express } from 'express';

const app: Express = express();

const port = 3001;

app.get('/', (req: Request, res: Response) => {
  res.send('Express App');
});

app.listen(port, () => {
  console.log('Server is running');
});
