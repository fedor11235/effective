import express from 'express'
// import swaggerUi from 'swagger-ui-express'
// import swaggerDocument from './swagger.json' assert { type: "json" }
import 'dotenv/config'

import router from "./routes.js";

const port = process.env.PORT;

const app = express()

// app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use(router);

// app.get('/', (request, response) => {
//   response.send('Hello world!')
// });

app.listen(5000, () => console.log(`Running on port ${port}`))