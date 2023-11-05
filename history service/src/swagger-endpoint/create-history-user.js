export default {
  post: {
    tags: [],
    summary: 'создание записи',
    description: '',
    parameters: [],
    responses: {
      201: {
        description: 'пользователь и запись создана',
      },
      400: {
        description: 'неправильный запрос',
      },
    },
  },
};


// model History  {
//   id          Int      @id @default(autoincrement())
//   action      String
//   name        String   @unique
//   surname     String
//   createdAt   DateTime @default(now())
// }
