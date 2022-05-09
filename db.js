//const mysql = require('mysql');
//const express = require('express');
const Sequelize = require('sequelize');
const PersonaModel = require('./models/Persona');

//parametros de conexion

const db = new Sequelize('dbjudicialdr', 'root', '',{
    host:'localhost',
    dialect:'mysql'
})

const Persona = PersonaModel(db, Sequelize);

db.sync({ force: false})
    .then(() => {
        console.log('Tablas sincronizadas')
    })

//module.exports = db;

module.exports = {
    Persona
}