const mysql = require('mysql')
const Schema = mysql.Schema
const Sequelize = require('sequelize');
const db = require('../db');

//const usuarioSchema = new Schema({
  //  login: String,
  //  pass: String,
   // tipo_usuario: Number,
   // estado: Number,
   // id_persona: Number
//}, {versionKey:false})

//module.exports = mysql.model('usuario', usuarioSchema)

const usuarioSchema = db.define('Usuario',{
    id_usuario:{
        type:Sequelize.INTEGER(10),
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    login:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    pass:{
        type:Sequelize.STRING,
        allowNull:false
    },
    tipo_usuario:{
        type:Sequelize.TINYINT,
        allowNull:false
    },
    estado:{
        type:Sequelize.TINYINT,
        allowNull:false
    },
    id_persona:{
        type:Sequelize.INTEGER(10),
        allowNull:false,
        foreignKey:true
    }

})

module.exports = usuarioSchema;
