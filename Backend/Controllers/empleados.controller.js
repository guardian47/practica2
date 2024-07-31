import { empleadoModel } from "../Models/empleados.model.js";

const test = ()=> {
    console.log('LLamando al controlador desde empleados')
}

empleadoModel.create({
    name:"Carlos",
    apepat:"Gutierrez",
    apemat:"Novoa",
    age: 20
})
export default test;