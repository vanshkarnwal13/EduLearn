const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://Parth:Parth@cluster0.nvek1eo.mongodb.net/?retryWrites=true&w=majority", {
  keepAlive: true, // keeping the connection alive
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.set("debug", true) 
mongoose.Promise = Promise 

module.exports.Comments = require("./comments")