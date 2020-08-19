var tmi = require('tmi.js');


// Configuraciones iniciales. process.env.TTOKEN equivale a la clave OAuth2 que tengo
// almacenada en una env var, para que en stream no se vea :)

var options = {
	options: {
		debug: true
	}, 
	connection: {
		cluster: "aws",
		reconnect: true
	},
	identity: {
		username: "Bot_Supremo",
		password: process.env.TTOKEN
	},
	channels: ["b0ssat192"]
};

var fumarContador = 0
var client = new tmi.client(options);


client.on('message', onMessageHandler);
client.on('connected', onConnectHandler);


client.connect();


function onMessageHandler(channel, tags, message, user, self) {
	if(self)
		return;
	const commandName = message.trim();
	const mod = (tags.username == "b0ssat192" || tags.mod); // Para los comandos meridianamente peligrosos :)
	

		// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
		// Switch para los comandos generales. 									 //
		// Decidí usar los switches por su sencilleza, porque el código es bastante sencillo de explicar y       //
		// leer de esta forma, per sobre todo por la estética que llega a tener el código.			 //
		// A parte, no quiero ser el próximo YandereDev.							 //
		// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 


	switch(channel, message) { 
		case "!comandos":
			client.say(channel, 'Comandos funcionales: !d20, !moderadores, !hola, !felipe, !fueafumar, !vecesfumando, !retrasao, !autores, !discord, !github, !chao, !adios, !specs, !programas, !pedirsong (Trabajo en progreso)')
