const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const version = "0.2"
 
client.on("ready", () => {
  console.log("I am ready!\nPrefix: \"" + config.prefix + "\"");
});
 
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === 'about') {
    message.channel.send("Version "+ version + "\nhttps://github.com/AlexVDW/AlphaBot");
  } else
  if (command === 'ping') {
    message.channel.send("pong!");
  } else
  if (command === 'foo') {
    message.channel.send("bar!");
  } else {
    message.channel.send("command `" + command + "` not recognised")
  }
});
 
client.login(config.token);