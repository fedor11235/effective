import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerDoc from './openapi.js';
import 'dotenv/config'

import router from "./routes.js";

const port = process.env.PORT;

const app = express()

app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(router);

app.listen(port, () => console.log(`Running on port ${port}`))