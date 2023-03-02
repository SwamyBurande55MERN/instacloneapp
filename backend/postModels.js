const mongoose = require("mongoose");      // import mongoose using require();
const Schema = mongoose.Schema;            // schema is used to define layout of and content of documents
const PostSchema = new Schema({            
    author: String,
    location: String,
    description: String,
    image: String,
    date: String
});
const Posts = mongoose.model("instaposts", PostSchema); // new Instinct.
module.exports = Posts;                                 // export new Instinct.
//                                                         clear.