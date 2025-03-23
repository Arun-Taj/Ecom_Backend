

const mongoose = require("mongoose");
const dbURI=process.env.MONGO_URI
if(!dbURI){
  console.log("MONGO_URI not defined in the environment variables.")
  process.exit(1)
}
mongoose.connect(dbURI)
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.error("Connection error:", err));

module.exports = mongoose.connection;
