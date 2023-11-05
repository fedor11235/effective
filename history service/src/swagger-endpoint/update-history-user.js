import { userSheme } from '../swagger-shemes/user.js'

export default {
  post: {
    tags: [],
    summary: 'обновление записи',
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
      200: {
        description: 'user updated',
      },
      400: {
        description: 'bad request',
      },
    },
  },
};
