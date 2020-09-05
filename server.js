const {prefix, token } = require("./config.json")
const { config } = require("dotenv");
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const discord = require("discord.js") //Gonna use Discord.js Module xD
const Canvas = require('canvas')
const snekfetch = require('snekfetch');
const db = require("quick.db");
const client = new discord.Client({
  disableEveryone: true
});

client.commands = new discord.Collection();
client.aliases = new discord.Collection();




["command"].forEach(handler => { 
  require("./models");
  require("./handlers/eventHandler")(client);
  require(`./handlers/${handler}`)(client)
})



client.on("ready", () => { //When bot is ready
  console.log("I am Reday to Go")
})

client.on("message", async message => {
   let prefix = await db.fetch(`prefix_${message.guild.id}`)
   if(prefix == null) {
    prefix = "p," 
  }
  
     let blacklist = await db.fetch(`blacklist_${message.author.id}`)
   
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
      
    if (blacklist === "Blacklisted") return message.reply("You are blacklisted from the bot!")

    
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    
    if (command) 
        command.run(client, message, args);
  
});
client.login(token)