const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const version = "0.1"
 
client.on("ready", () => {
  console.log("I am ready!\nPrefix: \"" + config.prefix + "\"");
});
 
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  
  if (message.content.startsWith(config.prefix + "about")) {
    message.channel.send("Version "+ version + "\nhttps://github.com/AlexVDW/AlphaBot");
  } else
  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(config.prefix + "foo")) {
    message.channel.send("bar!");
  }
});
 
client.login(config.token);