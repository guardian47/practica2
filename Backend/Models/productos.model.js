import {Schema, model} from 'mongoose'
 
 const productoEsquema = new Schema({
    name:{
        type:String
    },
    price:{
        type:String
    },
    quantity:{
        type:Number
    }
})

export const productoModel = new model('producto', productoEsquema)
