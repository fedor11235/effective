import express from "express";
import { getMessage } from "./controllers.js";

const router = express.Router();

/**
* @swagger
* /users/{id}:
*   get:
*     summary: Retrieve a single JSONPlaceholder user.
*     description: Retrieve a single JSONPlaceholder user. Can be used to populate a user profile when prototyping or testing an API.
*     responses:
*       200:
*         description: A single user.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 data:
*                   type: object
*                   properties:
*                     id:
*                       type: integer
*                       description: The user ID.
*                       example: 0
*                     name:
*                       type: string
*                       description: The user's name.
*                       example: Leanne Graham
*/
router.get('/', async (request, response) => {
  const message = await getMessage()
  response.send(message)
});

export default router;
