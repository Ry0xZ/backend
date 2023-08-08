import mongoose from "mongoose"

const URI="mongodb+srv://coderhouse:djfpdXuDCAv6p50d@ryoxz.9rffw0v.mongodb.net/ecommerce?retryWrites=true&w=majority"

await mongoose.connect(URI,{
    serverSelectionTimeoutMS:5000, //mongodb esperara como maximo 5 segundos para conectarse al servidor
})
console.log("Base de datos conectada....")