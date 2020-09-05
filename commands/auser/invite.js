const Discord = require('discord.js');
const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
module.exports = {
  run: async(client, message, args) => {
     let embed = new MessageEmbed()
    .setColor('RANDOM')
    .setAuthor("Pink Girl İnvite", client.user.displayAvatarURL())
    .setDescription(`<:heartss:744859982021001248> **Support Server**: [Click here](https://discord.gg/cS92NRh
)\n<:bot_davetlinki:649556757097611264> **Link**: [Click here](https://discord.com/api/oauth2/authorize?client_id=741977445917524049&permissions=8&scope=bot)`)
    .setFooter('2019-2020 Pink Girl')
    .setTimestamp()
    return message.channel.send(embed);
},
aliases: [],
name: 'invite',
category: "user",
description: 'Bans a guild member by their ID'
}