import {Schema, model} from 'mongoose'
 
export const promoEsquema = new Schema({
    name:{
        type:String
    },
    sale_on:{
        type:String
    },
    quantity:{
        type:Number
    },
    promo:{
        type:String
    }
})

export const promoModel = new model('promocion', promoEsquema)