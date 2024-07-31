import { promoModel } from "../Models/promo.model.js";

const test = ()=> {
    console.log('LLamando al controlador desde gerentes')
}

promoModel.create({
    name:"Mesa",
    sale_on: "sale $40.00",
    quantity: 60,
    promo: "De oferta por tiempo limitado"
    
})
export default test;