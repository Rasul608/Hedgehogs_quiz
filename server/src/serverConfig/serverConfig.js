const express = require("express");
const morgan = require("morgan");
const removeHTTPheader = require("../middleware/removeHTTPheader");
const cors = require("cors");


const serverConfig = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(
    cors({
      origin: ["http://localhost:5173"],
      optionsSuccessStatus: 200,
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(removeHTTPheader);
};

module.exports = serverConfig;
