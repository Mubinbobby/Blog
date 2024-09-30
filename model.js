const mongoose=require("mongoose");
const schema = mongoose.Schema({
//Write missing code here

title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


//Write missing code here


// Middleware to update the `updated_at` field
schema.pre('save', function(next) {
    this.updated_at = Date.now();
    next();
});

// Creating the model from the schema
const Blog = mongoose.model("Blog", schema);

module.exports = Blog; // Exporting the Blog model