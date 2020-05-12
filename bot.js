const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Ready to go");
});

client.on("message", async message => {
  if ((message.content === "halo")) {
    message.channel.send("Halo juga sayang");
  }
});

client.on("message", async message => {
  if ((message.content === "ping")) {
    message.channel.send("Aku bakal ada disini kok!");
  }
});

client.on("message", async message => {
  if ((message.content === "test")) {
    message.channel.send("V 0.0.1, Korban halu firman");
  }
});

client.on("message", async message => {
  if ((message.content === "uuh tayang")) {
    message.channel.send("utuk utuk");
  }
});

client.on("message", async message => {
  if ((message.content === "wkwkwk")) {
    message.channel.send("Kalo ketawa lucu deh");
  }
});

client.on("message", async message => {
  if ((message.content === "aamiin")) {
    message.channel.send("iya, aamiin");
  }
});

client.on("message", async message => {
  if ((message.content === "halu")) {
    message.channel.send("Gapapa, nanti baru kenyataan");
  }
});

client.on("message", async message => {
  if ((message.content === "cantik deh")) {
    message.channel.send("hehe, makasih >.<");
  }
});

client.on("message", async message => {
  if ((message.content === "gimana kabarmu")) {
    message.channel.send("baik, kamu?");
  }
});

client.on("message", async message => {
  if ((message.content === "baik")) {
    message.channel.send("Alhamdulillah deh :smiling_face_with_3_hearts:");
  }
});

client.on("message", async message => {
  if ((message.content === "cur")) {
    message.channel.send("eh, kenapa?");
  }
});

client.login("NzA4MjE3MTM5MTMxMzE4MzMy.Xri15Q.F1yLJFvpJM2Gy05iY2eaRuJ03SU")