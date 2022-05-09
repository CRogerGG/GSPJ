const Persona = require('../models/Persona');

const vistaAbogados = async (req, res) => {
    await res.render('abogados')
}

/* const vistaUsuariosCreate = async (req, res) => {
    await res.render('usuariosCreate')
} */

const abogadoSave = async (req, res) => {
    const {nombre,apaterno,amaterno,domicilio,ciudad,estado,fecha_nacimiento,curp,telfijo,telcelular,email,nacionalidad} = await req.body;
    const abogado = await Persona.create({
        login:login, pass:pass, tipo_usuario:tipo_usuario, estado:estado, id_persona:id_persona
    }).catch(error=>console.log(error));
    console.log(abogado)

    //res.redirect('usuarios')


    await res.render('abogados')
}

module.exports = {
    vistaAbogados, abogadoSave
}