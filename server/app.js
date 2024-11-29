require("dotenv").config();
const express = require("express");
const serverConfig = require("./src/serverConfig/serverConfig");
const indexRoutes = require('./src/router/index.routes')

const PORT = process.env.PORT || 2990;
const app = express();
serverConfig(app);


app.use('/api',indexRoutes)

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
