import express from 'express';

const app = express();

app.use(express.json());

app.set('port', 3000);

app.get('/', (req, res) => {
  return res.send('Hello world!!\n');
});

export const dummy = (a: number): number => {
  return a + 1;
};

export default app;
