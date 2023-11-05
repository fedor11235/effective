import createhistory from './swagger-endpoint/create-history.js'

export default {
  openapi: '3.0.0',
  info: {
    title: 'History service',
    version: '0.0.1',
    description: 'The History API description',
  },
  paths: {
    '/': createhistory,
  },
}