const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect(
   "mongodb+srv://test:test@cluster0.ecqczi0.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
