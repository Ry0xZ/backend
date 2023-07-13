import express from "express"
import productRouter from "../router/products.router.js"
import cartRouter from "../router/carts.router.js"
const app=express()
const PORT=8080;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.Router())
app.use("/api",productRouter)
app.use("/api",cartRouter)

app.listen(PORT,()=>{
    console.log(`El servidor esta corriendo en el puerto  ${PORT}`)
})