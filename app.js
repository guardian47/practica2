import express from  'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import testEmpleado from './Backend/Controllers/empleados.controller.js';
import testGerente from './Backend/Controllers/gerente.controller.js';
import testClientes from './Backend/Controllers/clientes.controller.js';
import testProductos from './Backend/Controllers/productos.controller.js';
import testPromo from './Backend/Controllers/promo.controller.js';
dotenv.config()

mongoose.connect(process.env.url)
.then(()=>{
    console.log('Funciona la verificacion de la base de datos ')
})
.catch((err)=>{
    console.log('No funciono', err)
})

const app = express()
app.use(cors())

app.listen(4001,()=>{
    console.log('Esta funcionando el servidor ')
})

testEmpleado()
testGerente()
testClientes()
testProductos()
testPromo()

