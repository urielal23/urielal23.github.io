var basededatos = {
	usuario: "urielal23",
	password: "ingreso" 
};

console.log("Arrancando server de Node");

var express = require("express");
var parcero = require("body-parser")
var web = express();
web.use( parcero.urlencoded() );
var servidor;

sevidor = web.listen(8080, function () {
	console.log("Servidor Arrancado :D")
});

web.get("/", function (req, res){
	res.sendfile("formulario.html");
});

web.post("/entrar", function (req, res){
	if(req.body.usuario == basededatos.usuario && req.body.clave == basededatos.password)
	{
		res.send("Bienvenido al servidor");
	}
	else
	{
		res.send("Usuario o Contraseña erronea, ingresa de nuevo")
	}
});
