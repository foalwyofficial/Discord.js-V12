const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const guildModel = require("../models/guildModel");

module.exports = client => {
    var oyun = [
        "!help !invite",
        `Server ${client.guilds.cache.size}`,
        `User ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`
    ];

    setInterval(function () {

        var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

        client.user.setActivity(oyun[random],{ type: "PLAYING"} );
    }, 2 * 30000);

    console.log(`İnfo`, `Active, commands loaded!`);
    console.log(`İnfo`, `Game name set!`);
    console.log(`İnfo`, `${client.user.username} Login with name!`);   
    client.user.setStatus("PLAYING");
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] info Now ` + client.channels.cache.size + ` piece to channel, ` + client.guilds.cache.size + ` piece to the server and ` + client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` to the user service is given!`);
};
