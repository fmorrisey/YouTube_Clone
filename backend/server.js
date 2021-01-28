"use strict";

// Package dependencies
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const debug = require("debug");

const app = express();

const port = process.env.PORT || 5000;

require("dotenv").config();

app.use(cors());
app.use(express.json());


//===========MONGOOSE x MongoDB=============
// connection string parser for MongoDB
// connection constructor
const uri = process.env.ATLAS_URI;
const DEBUG = debug("dev");
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true, //added 12.22 to use newest
  })
  .then(() => {
    DEBUG("MongoDB is connected");
  })
  .catch((err) => {
    DEBUG("MongoDB connection unsuccessful");
    DEBUG(err);
  });
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// connection port messages for successful launch!
app.listen(port, () => {
  console.log(`YouTube is live! Running on port: ${port}`);
});

//===========ROUTERS==============
//const productsRouter = require("./inventory/routes/product");
//... More routers to come

//app.use("/products", productsRouter);

module.exports = app;
