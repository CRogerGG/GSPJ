const mysql = require('mysql')
//const Schema = mysql.Schema
const Sequelize = require('sequelize');
const db = require('../db');

const abogadoSchema = db.define('abogado',{
    id:{
        type:Sequelize.INTEGER(10),
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    id_persona:{
        type:Sequelize.INTEGER(10),
        allowNull:false,
        references: {
            model: 'Persona',
            key: 'id_persona'
        }
    },
    categoria:{
        type:Sequelize.STRING,
        allowNull:true
    }
})

module.exports = abogadoSchema;