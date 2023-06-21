const dbmongo = require("../conexion/conexion.bd")
const dbsql = require("../conexion/conexion.mysql")
const ctrl = {}

ctrl.getSql = (_req, res) => {

    dbsql.authenticate().then(() => {
        res.json({
            msg: 'mysql conectada'
        })
    }).catch(err => {
        res.status(400).json({
            msg: 'Error al conectarse al mysql'
        })
    })

};

ctrl.getMongo = (_req, res) => {

    dbmongo().then(() => {
        res.json({
            msg: 'mongoDB conectada'
        })
    }).catch(err =>{
        res.status(400).json({
            msg: 'Error al conectarse al mongoDB'
        })
    })

};

module.exports = ctrl