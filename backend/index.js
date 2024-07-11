const port = 4000;
const express = require("express");
const app = express();
const mongoose = requre("mongoose")
const jwt = require ("jsdwebtoken")
const  multer = requre ("multer")
const path  = requre ("path")
const core = requre ("cors")