const { Client, Intents } = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.login(token);



client.once('ready', () => {
    console.log('Ready!');
});
   
client.once('reconnecting', () => {
    console.log('Reconnecting!');
});
   
client.once('disconnect', () => {
    console.log('Disconnect!');
});