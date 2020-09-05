const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
  run: async(client, message, args) => {
if(message.author.id !== "568047854837301280") return message.channel.send("`restart` Only bot owner can use command")
message.channel.send(new Discord.MessageEmbed().setDescription('If you consent to the bot restarting `30` second in `yes` in summer').setColor("RANDOM"))
.then(() => {
  message.channel.awaitMessages(response => response.content === "yes", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(new Discord.MessageEmbed().setDescription('Bot restarting').setColor("RANDOM")).then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot restarting`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.send('Restart operation ıt is cancelled');
    });
});

},
aliases: ['r'],
name: 'restart',
category: "botowner",
description: 'Restarts the bot.'
}