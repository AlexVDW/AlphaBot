const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
var schedule = require("node-schedule");
const version = "0.3"

//channels
const ch_schedule = "545823492583718932";

//variables
const wd = [ 'Su','Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const sch_len = 10;
var d = new Date();

 
client.on("ready", () => {
  console.log("I am ready!\nPrefix: \"" + config.prefix + "\"");
  
/*
  const abc = client.channels.get(ch_schedule).fetchMessages({limit : 10})
  .then(function(a){

    //produce expected log
    expected = wd.concat(wd).concat(wd).slice(d.getDay(),d.getDay()+sch_len)
                 .map((a, i) => a + ' ' + d.getDate() + '/' + [d.getMonth()+1]);
    console.log(expected);
    
    console.log(a.filter(m => m.author.id === '545560466420662274').map(g => g.content).reverse());
  });
*/
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

var j = schedule.scheduleJob('0 0 1 * * *', function(){
  //Triggers 1am Melbourne time every day

  //post new day (10 days in advance) (test will be a b c d e every minute)
  client.channels.get(ch_schedule).send("wd[(d.getDay()+10)%7")
    
  //Delete old day
});
 
client.login(config.token);