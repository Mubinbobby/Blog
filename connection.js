const mongoose = require("mongoose");

//Write missing code here for database connection

const mongoURI = "mongodb://localhost:27017/blogDB";

mongoose.connect(mongoURI).then(()=>{
    console.log('Connection established');
}).catch(()=>{
    console.log('Error in connection');
})