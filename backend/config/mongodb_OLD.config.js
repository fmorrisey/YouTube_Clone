//===========MONGOOSE x MongoDB=============
/*          ?? DEPRECATED ??
/*         KEPT FOR POSTERITY 
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
*/
