require('dotenv').config();


const express=require("express");
const cors=require("cors");
const path=require("path");

//import DB connection and routes

require("./config/db");
const productRoutes=require("./routes/productRoutes");
const uploadRoutes=require("./routes/uploadRoutes");

const app=express();
const port=5000;

app.use(express.json());
app.use(cors());

//Serving static images
app.use("/images",express.static(path.join(__dirname,'Uploads/Images')))

// Default route
app.get("/", (req, res) => {
    res.send("Express App is Running");
  });
  
  // API routes
  app.use("/api/products", productRoutes);
  app.use("/api", uploadRoutes);
  
  app.listen(port, (error) => {
    if (!error) {
      console.log(`Server Running on Port ${port}`);
    } else {
      console.log("Error: " + error);
    }
  });