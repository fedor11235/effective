import { userSheme } from '../swagger-shemes/user.js'

export default {
  post: {
    tags: [],
    summary: 'создание записи',
    description: '',
    parameters: [],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: userSheme
        }
      },
    },
    responses: {
      201: {
        description: 'user and record created',
      },
      400: {
        description: 'bad request',
      },
    },
  },
};

// *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/Book'

// model History  {
//   id          Int      @id @default(autoincrement())
//   action      String
//   name        String   @unique
//   surname     String
//   createdAt   DateTime @default(now())
// }
