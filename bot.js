﻿const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("623240486412615761")
setInterval(function() {
channel.send(`كرتديت كرتديت كرتديت كرتديت كرتديت كرتديت كرتديت`);
}, 30)
})

client.login(process.env.BOT_TOKEN);