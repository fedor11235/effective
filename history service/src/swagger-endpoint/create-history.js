export default {
  get: {
    tags: [],
    summary: 'healthcheck',
    description: '',
    parameters: [],
    responses: {
      200: {
        description: 'healthcheck okay',
      },
      400: {
        description: 'bad request',
      },
    },
  },
};