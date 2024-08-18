const mongoose = require("mongoose");

mongoose
  .connect(
   "mongodb+srv://test:test@cluster0.ecqczi0.mongodb.net/blogApp?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
