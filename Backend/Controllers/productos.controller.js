import { productoModel } from "../Models/productos.model.js";

const test = ()=> {
    console.log('LLamando al controlador desde gerentes')
}

productoModel.create({
    name:"Mesa",
    price: "$60.00",
    quantity: 60
    
})
export default test;