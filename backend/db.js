const mongoose = require('mongoose');
require('dotenv').config(); // load env variables

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // use env variable
    console.log("MongoDB connected ✅");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;