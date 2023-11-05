import express from "express";
import { createUser, updateUser, getHistory } from "./controllers.js";

const router = express.Router();

router.post('/create', async (request, response) => {
  const message = await createUser(request.body)
  response.send(message)
});

router.post('/update', async (request, response) => {
  const message = await updateUser(request.body)
  response.send(message)
});

router.get('/get', async (request, response) => {
  const message = await getHistory()
  response.send(message)
});

export default router;
