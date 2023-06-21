//Conexiones
const express = require('express');// importo librerias 
const cors = require('cors');
const morgan = require('morgan');

const conectDb = require('./src/conexion/conexion.bd');
require('dotenv').config();


const dato = express();
conectDb();

const port = process.env.PORT

dato.use(cors());
dato.use(morgan('dev'));
dato.use(express.json());

//Compruebo si funciona el servidor
dato.listen(port,()=>{
    console.log('Servidor corriendo en http://localhost:${port}/check-mongodb-connection')
})