import express from "express";
import { getMessage } from "./controllers.js";

const router = express.Router();

router.get('/', async (request, response) => {
  const message = await getMessage()
  response.send(message)
});

export default router;
