const Usuario = require('../models/Persona');

const vistaUsuarios2 = async (req, res) => {
    await res.render('usuarios')
}

const vistaUsuariosCreate = async (req, res) => {
    await res.render('usuariosCreate')
}

const usuariosSave = async (req, res) => {
    const {login,pass,tipo_usuario,estado,id_persona} = await req.body;
    const usuario = await Usuario.create({
        login:login, pass:pass, tipo_usuario:tipo_usuario, estado:estado, id_persona:id_persona
    }).catch(error=>console.log(error));
    console.log(usuario)

    //res.redirect('usuarios')


    await res.render('usuariosCreate')
}

module.exports = {
    vistaUsuarios2, vistaUsuariosCreate, usuariosSave
}