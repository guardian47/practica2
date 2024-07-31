import {Schema, model} from 'mongoose'
 
export const empleadosEsquema = new Schema({
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
    }
})
 
export const empleadoModel = new model('Empleados', empleadosEsquema)