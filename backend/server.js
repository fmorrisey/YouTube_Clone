"use strict";

// Package dependencies
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT;

require("./config/mongodb.config")
  .configure()
  .then((res) => {
    app.use(cors());
    app.use(express.json());

    //===========ROUTERS==============
    const commentsRouter = require("./routes/comments.routes");
    //... More routers to come

    //===========Express App Use==============

    app.use("/comments", commentsRouter);
  })
  .catch((err) => {
    throw err;
  });

// connection port messages for successful launch!
app.listen(port, () => {
  console.log(`YouTube is live! Running on port: ${port}`);
});

module.exports = app;
