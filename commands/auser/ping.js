module.exports = {
  run: async(client, message, args) => {
  message.channel.send('Ping?').then(m => m.edit(`Pong: ${(client.ws.ping)}ms.`))

},
aliases: [],
name: 'ping',
category: "user",
description: 'Ping/Pong command. I wonder what this does? /sarcasm'
}