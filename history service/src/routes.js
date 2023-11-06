import express from "express";
import { createUser, updateUser, getHistory } from "./controllers.js";

const router = express.Router();

router.post('/create', async (request, response) => {
  const message = await createUser(request.body)
  response.send(message)
});

router.post('/update/:id', async (request, response) => {
  const { id } = request.params
  const message = await updateUser(id, request.body)
  response.send(message)
});

router.get('/get', async (request, response) => {
  const message = await getHistory()
  response.send(message)
});

export default router;
