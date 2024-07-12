const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");
const { log, Console } = require("console");

app.use(express.json());
app.use(cors());

// Database connection with MongoDB
mongoose.connect("mongodb+srv://ndonyi:ndonyi@cluster0.hlkzsyc.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connecting to MongoDB: ", error);
});

// API creation
app.get("/", (req, res) => {
    res.send("Express App is running");
});

//Image Storage Engine
const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});

const upload = multer({ storage: storage });

//Creating Upload End point for images
app.use('/images', express.static('upload/images'))
app.post("/upload", upload.single("product"), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

//schema for creating objects
const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    }
});

//CREATING ONE END POINT WITH THE NAME OF OUR PRODUCT
app.post('/addproduct', async (req, res) => {
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array =products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id +1;
    } else {
        id=1;

    }
    const newProduct = new Product({
        id:id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
        date: req.body.date,
        available: req.body.available
    });

    try {
        await newProduct.save();
        console.log("Product saved");
        res.json({
            success: true,
            name: req.body.name
        });
    } catch (error) {
        console.error("Error saving product: ", error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

//Creating  API fOR DELTING

app.post('/removeproduct',async (req, res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Remove");
    res.json({
        success:true,
        name:req.body.name
    })
})


//creating API FOR GETTING ALL PRODUCTS
app.get('/allproducts', async (req, res)=>{
    let products = await Product.find({});
    console.log("All products Fetched")
    res.send(products)
})



app.listen(port, (error) => {
    if (!error) {
        console.log("Server is running on port " + port);
    } else {
        console.log("Error: " + error);
    }
});
