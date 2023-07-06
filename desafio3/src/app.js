import express from "express"
import {ProductManager} from "../ProductManager.js"

const app = express();
const PORT = 8080;
const productManager = new ProductManager("../files/products.json")

app.get("/products", async (req, res) => {
    const {
        limit
    } = req.query
    const products = await productManager.getProducts()
    if (limit) {
        const limitproducts = products.slice(0, limit)
        res.json({
            status: "Success",
            limitproducts
        })

    } else {
        res.json({
            status: "Success",
            products
        })
    }
})

app.get("/products/:pid", async (req, res) => {
    const {
        pid
    } = req.params

    const products = await manager.getProducts()
    const productfind = products.find(elemento => elemento.id === parseInt(pid))
    console.log(productfind)
    res.send({
        status: "success",
        productfind
    })
})

app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en el puerto + ${PORT}`)
})