const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect(
   "mongodb+srv://ajaykn04:ajay@cluster0.oxe36hh.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });