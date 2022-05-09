//const Persona = require('../models/Persona');
//const urlApi = require('../api/persona');
const { Persona } = require('../db');
//var $ = require( "jquery" );

const moment = require('moment');

//Mostrar
/*const mostrarClientes =  async (req, res) => {
  const clientes = await Persona.findAll();
  //console.log(clientes);
  await res.render('clientes', {
      clientes
  });
}*/
 //JSON Clientes
const traerClientes =  async (req, res) => {
    const clientes = await Persona.findAll();
    //console.log(clientes);
    res.send(clientes);
  }

//Crear
/*const crearCliente = async (req, res) => {
    //console.log(req.body);
    const cliente = await Persona.create({
      nombre: req.body.nombre,
      apaterno: req.body.apaterno,
      amaterno: req.body.amaterno,
      domicilio: req.body.domicilio,
      ciudad: req.body.ciudad,
      estado: req.body.estado,
      fecha_nacimiento: req.body.fecha_nacimiento,
      curp: req.body.curp,
      tel_fijo: req.body.tel_fijo,
      tel_celular: req.body.tel_celular,
      email: req.body.email,
      nacionalidad: req.body.nacionalidad
    }).catch(error=>console.log(error));
    console.log(cliente);
    res.send(cliente);

    //await res.redirect('clientes');
}*/

const crearCliente = async (req, res) => {
    //console.log(req.body);
    const cliente = await Persona.create(req.body).catch(error=>console.log(error));
    //console.log(cliente);
    res.send(cliente);
}


//Actualizar
const actualizarCliente = async (req, res) => {
    const cliente = await Persona.update(req.body, {
        where: {id_persona: req.params.id_persona}
    }).catch(error=>console.log(error));
    //res.send({success: true})
    res.send(cliente);
}

//buscar uno
/*const seleccionarCliente = async (req, res, next) => {
    try {
        const selec = await Persona.findOne( {
            where:{id_persona: req.params.id_persona}
            }
        );
        //console.log(selec);
        //selec.fecha_nacimiento = moment(selec.fecha_nacimiento).format('YYYY-MM-DD');
        res.send(selec);
    } catch (error) {
        console.log(error);
    }
}*/

const seleccionarCliente = async (req, res, next) => {
    const selec = await Persona.findOne( {
            where:{id_persona: req.params.id_persona}
            });
    res.send(selec);
}

function formatearFecha(fecha){
    //var localTime = moment().format('YYYY-MM-DD');
    //if(moment(fecha).isValid()){
        console.log(moment(fecha).format('YYYY-MM-DD'));
        return moment(fecha).format('YYYY-MM-DD')
    //};
  }


module.exports = { 
    crearCliente,
    actualizarCliente,
    seleccionarCliente,
    traerClientes
}