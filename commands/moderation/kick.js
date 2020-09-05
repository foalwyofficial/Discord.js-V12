const Discord = require("discord.js");
module.exports= {
  name: 'kick',
  category: 'moderation',
  description: 'kick a members',
  run: async(client,message,args,guild) => {

    let kicked = message.mentions.users.first() || client.users.resolve(args[0]);
    let reason = args.slice(1).join(" ")
  
    if (message.author === kicked) {
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
  
    if (!message.member.permissions.has("KICK_MEMBERS")) {
      let nopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "You do not have permission `KICK MEMBERS` contact an administrator"
        )
        .setColor("RANDOM");
      message.channel.send(nopermsembed);
  
      return;
    }
  
    if (!message.guild.me.permissions.has("KICK_MEMBERS")) {
      let botnopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "I do not have `KICK MEMBERS` permission, please contact an administrator"
        )
        .setColor("RANDOM");
      message.channel.send(botnopermsembed);
  
      return;
    }
  
    message.guild.member(kicked).kick(reason);
  
    let successfullyembed = new Discord.MessageEmbed()
      .setDescription(`**${kicked.tag}** **${reason}** has been successfully kicked. <a:pink_tik:744963035218706492>`)
      .setColor("RANDOM");
  
    message.channel.send(successfullyembed);

  }
}