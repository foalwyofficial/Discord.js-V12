const Discord = require("discord.js");
module.exports= {
  name: 'ban',
  category: 'moderation',
  description: 'ban a members',
  run: async(client,message,args,guild) => {

    let banned = message.mentions.users.first() || client.users.resolve(args[0]);
    let reason = args.slice(1).join(" ")
  
    if (message.author === banned) {
      let sanctionyourselfembed = new Discord.MessageEmbed()
        .setDescription(`You cannot sanction yourself`)
        .setColor("RANDOM");
      message.channel.send(sanctionyourselfembed);
  
      return;
    }
  
    if (!reason) {
      let noreasonembed = new Discord.MessageEmbed()
        .setDescription(`Please Tag User And Reason`)
        .setColor("RANDOM");
      message.channel.send(noreasonembed);
  
      return;
    }
  
    if (!message.member.permissions.has("BAN_MEMBERS")) {
      let nopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "You do not have permission `BAN_MEMBERS` contact an administrator"
        )
        .setColor("RANDOM");
      message.channel.send(nopermsembed);
  
      return;
    }
  
    if (!message.guild.me.permissions.has("BAN_MEMBERS")) {
      let botnopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "I do not have `BAN_MEMBERS` permission, please contact an administrator"
        )
        .setColor("RANDOM");
      message.channel.send(botnopermsembed);
  
      return;
    }
  
    message.guild.members.ban(banned, { reason: reason });
  
    let successfullyembed = new Discord.MessageEmbed()
      .setDescription(`**${banned.tag}** **${reason}** has been successfully banned. <a:pink_tik:744963035218706492>`)
      .setColor("RANDOM");
  
    message.channel.send(successfullyembed);

  }
}