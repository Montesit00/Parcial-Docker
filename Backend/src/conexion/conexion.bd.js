const mongoose = require("mongoose");

const dbmongo = async () =>{

    return mongoose.connect(process.env.DBMONGO_URI)  
}

module.exports = dbmongo;