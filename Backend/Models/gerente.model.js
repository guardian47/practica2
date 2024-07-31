import { empleadosEsquema } from "./empleados.model.js";
import { model } from "mongoose";

export const gerenteModelo = new model('Gerente', empleadosEsquema)