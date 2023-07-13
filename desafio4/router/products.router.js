import {Router} from "express"
import { __dirname } from "../utils.js"

import ProductManager from "../classes/productManager.js"

const manager =new ProductManager(__dirname+"/files/products.json")
const router=Router()

router.get("/products",async(req,res)=>{
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

router.get("/products/:pid",async(req,res)=>{
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

router.post("/products",async(req,res)=>{
    const newproduct=await manager.addProduct(req.body)
    res.send({status:"success",newproduct})
})

router.put("/products/:pid",async(req,res)=>{
console.log(req.params)
    const updatedproduct=await manager.updateProduct(req.params,req.body)
    res.send({status:"success",updatedproduct})
})
router.delete("/products/:pid",async(req,res)=>{
    const deletedproduct=await manager.deleteProduct(req.params)
    res.send({status:"success",deletedproduct})
})


export default router