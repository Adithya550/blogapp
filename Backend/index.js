const express = require("express");
const cors = require("cors");

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
require("./connection.js");

var BlogModel = require("./model.js");


app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.post("/add", async (req, res) => {
  try {
      await BlogModel(req.body).save();
      res.send({ message: "Blog Added" });
  } catch (error) {
      console.log(error);
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await BlogModel.findByIdAndDelete(id)
    res.send({ message: "Blog Deleted" });
  } catch (error) {
    console.log(error);
  }
});

app.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  const blog = req.body;
  await BlogModel.findByIdAndUpdate(id, blog);
  res.send({ message: "Blog Updated" });
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});