const mongoose = require("mongoose");
const colors = require("colors");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to mongoDB DataBaSE ${mongoose.connection.host}`.bgMagenta.white);
  } catch (error) {
    console.log(`MONGO connect ERROR ${error}`.bgRed.white);
  }
};

module.exports = connectDb;
