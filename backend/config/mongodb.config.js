const mongoose = require("mongoose");
const uri = process.env.ATLAS_URI;

exports.configure = function () {
  mongoose.Promise = global.Promise;
  mongoose.set("debug", true);
  mongoose.connection
    .on("error", function (err) {
      console.error(err);
    })
    .once("open", () => {
      console.log("{ + } MongoDb Connected");
    });

  return mongoose.connect(uri, {
    useNewUrlParser: true,
    keepAlive: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true, //added 12.22 to use newest
  });
};
