import express from 'express'
import 'dotenv/config'

const port = process.env.PORT;

const app = express();

app.get('/', (request, response) => {
  response.send('Hello world!');
});

app.listen(port, () => console.log(`Running on port ${port}`));