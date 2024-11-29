const path = require('path'); //* Импорт библиотеки path
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') }); //* Подключение переменных окружения
const express = require('express'); //* Импорт библиотеки express
const serverConfig = require('./src/serverConfig/serverConfig');
const indexRouter = require('./src/router/index.routes');

const app = express();

serverConfig(app);

const PORT = process.env.PORT || 3000;


app.use('/api', indexRouter);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
