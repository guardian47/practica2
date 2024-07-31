import { gerenteModelo } from "../Models/gerente.model.js";

const test = ()=> {
    console.log('LLamando al controlador desde gerentes')
}

gerenteModelo.create({
    name:"Carlos",
    apepat:"Gutierrez",
    apemat:"Padilla",
    age: 30
    
})
export default test;