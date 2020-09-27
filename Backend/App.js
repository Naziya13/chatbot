const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var AWS =require('aws-sdk');
//const mysql = require('mysql2');

const register_NormRoutes = require("./routes/registrationForm");
//create multiple apis.. with different file names

// const fs = require('fs');
const urlencodedParser = bodyParser.urlencoded({
  extended: true
});

app.use("/routes", express.static("routes"));

// create the connection to database

var docClient=new AWS.DynamoDB.DocumentClient();

app.use('/Register', register_NormRoutes);

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);


const PORT = process.env.PORT || 8082;
app.listen(PORT, function() {
  console.log("Example app is listening on localhost port 8082...");
});
