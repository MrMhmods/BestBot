const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-'
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '-test') {
    msg.reply('شغال!');
  }
});

client.login('NTk3NTYzNzE5MTg2MzgyODUx.XSJ61w.q-Own_bXnwGQcGp-guqdcI3edtA');
