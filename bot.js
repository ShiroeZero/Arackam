const Discord = require("discord.js");
const client = new Discord.Client();
const TOKEN = process.env.BOT_TOKEN;
const PREFIX = process.env.PREFIX;

client.on("ready", () => {
  console.log("Ready to go");
});

client.on("message", async message => {
  if ((message.content === "ping")) {
    message.channel.send("Server deploy succes");
  }
});

client.login("NzA5ODU1NTk0MTY4ODQ0NDE5.Xrr-qw.QhbkImxY2pupI2g_353EcKUumsU")
