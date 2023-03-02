const express = require("express");
const mongoose = require("mongoose");
const router = require("./route");
const port = 5000;

const app = express();
app.use(express.json());
app.use('/', router);

const dotenv = require("dotenv");
dotenv.config({path : "./config.env"});

const dataBase = process.env.DATABASE;
mongoose.connect(dataBase)
.then(() => {
      console.log("Connected!");
})
.catch(() => { 
      console.log("try again"); 
});

app.listen(port, () => {
      console.log(`backend server is running Successfully on port : ${port}`); 
});