const port = 4000;
const express = require("express");
const app = express();
const mongoose = requre("mongoose");
const jwt = require ("jsdwebtoken");
const  multer = requre ("multer");
const path  = requre ("path");
const core = requre ("cors");

app.use (express.json());
app.use (core());

//Database connection with MongoDb
mongoose.connect("mongodb+srv://ndonyi:ndonyi1@cluster0.pmoytxv.mongodb.net/ecommerce");
