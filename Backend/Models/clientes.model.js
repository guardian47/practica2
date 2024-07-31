import {Schema, model} from 'mongoose'
 
const clientesEsquema = new Schema({
    name:{
        type:String
    },
    apepat:{
        type:String
    },
    apemat:{
        type:String
    },
    age:{
        type:Number
    },
    calle:{
        type:String
    },
    email:{
        type:String 
    },
    phone:{
        type:Number
    }
})
 
export const clientesModel = new model('Clientes', clientesEsquema)