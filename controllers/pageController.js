const vistaPrincipal = (req, res) =>{
    res.render('home')
}

const vistaUsuarios = (req, res) =>{
    res.render('usuarios')
}

const vistaClientes = (req, res) =>{
    res.render('clientes')
}

const vistaExpedientes = (req, res) =>{
    res.render('expedientes')
}

module.exports = {
    vistaPrincipal, 
    vistaUsuarios,
    vistaClientes,
    vistaExpedientes
}