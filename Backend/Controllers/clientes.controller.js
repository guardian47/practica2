import { clientesModel } from "../Models/clientes.model.js";

const test = ()=> {
    console.log('LLamando al controlador desde empleados')
}

clientesModel.create({
    name:"Carlos",
    apepat:"Gutierrez",
    apemat:"Novoa",
    age: 20,
    calle: "Haciendas",
    email:"Hola@gma",
    phone: 4494990462
    
})
export default test;