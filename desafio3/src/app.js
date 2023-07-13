import express from "express";
import { __dirname } from "../utils.js"
import ProductManager from "./ProductManager.js";
const app = express()
const manager =new ProductManager(__dirname+"/files/products.json");
const PORT = 8080;

app.get("/", (req, res) => {
    res.send("hola mundo");
  });

app.get("/products",async(req,res)=>{
    const {limit}=req.query
    const products= await manager.getProducts()
    if(limit){
     const limitproducts=products.slice(0,limit)
     res.json({status:"Success",limitproducts})

    }
    else{
        res.json({status:"Success",products})
    }
})

app.get("/products/:pid",async(req,res)=>{
    const { pid } = req.params;
    let productfound= await manager.getProductbyId(parseInt(pid))
    
    if (productfound){
        res.json({status:"success",productfound})
    } else {
        res.json({
            message: "el producto solicitado no existe",
          });
        }
})


app.listen(PORT,()=>{
    console.log(`El servidor esta corriendo en el puerto  ${PORT}`)
})
