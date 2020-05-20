// require the discord.js module
const Discord = require('discord.js');
const {token, prefix} = require('./config.json');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!', {channels: client.channels});
});

const fromMessageGetArgsAndCommand = (message, prefix) => {
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	return {args, command};
}

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const {args, command} = fromMessageGetArgsAndCommand(message, prefix);
    message.reply('Ola, sou o bot da Fimba')
    // other commands...
});

// login to Discord with your app's token
client.login(token);