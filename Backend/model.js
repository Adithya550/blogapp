var mongoose = require("mongoose");
const schema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});

var blogModel = mongoose.model("blog", schema);

module.exports = blogModel;