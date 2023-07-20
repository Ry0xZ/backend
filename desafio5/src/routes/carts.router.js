import {Router} from "express"
import { __dirname } from "../utils.js"

import CartManager from "../../managers/cartManager.js";
const manager =new CartManager(__dirname+"/files/carts.json")
const router=Router()

router.get("/carts",async(req,res)=>{
    const listOfCarts= await manager.getCarts()
    res.json({message:"success",listOfCarts})
 
})

router.get("/carts/:cid",async(req,res)=>{
    const cartfound=await manager.getCartbyId(req.params)
    if (cartfound){
        res.json({status:"success",cartfound})
    } else {
        res.json({
            message: "el carrito solicitado no existe",
          });
        }
})

router.post("/carts",async(req,res)=>{
    const newcart=await manager.addCart(req.body)
    res.send({status:"success",newcart})
})

router.post("/carts/:cid/products/:pid",async(req,res)=>{
    try {
        const cid = parseInt(req.params.cid);
        const pid = parseInt(req.params.pid);
    
        await manager.addProductToCart(cid, pid);
        res.json({ status: "success", message: "Producto agregado al carrito satisfactoriamente." });
      } catch (error) {
        console.error("Error agregando el producto al carrito:", error);
        res.status(500).json({ status: "error", message: "No se pudo agregar el producto al carrito." });
      }
})



export default router