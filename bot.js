const Discord = require("discord.js");
const client = new Discord.Client();

const LocalStorage = require("node-localstorage").LocalStorage;
const localStorage = new LocalStorage('./store');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.author.id !== "370285378084798466" && msg.content) {
    msg.delete();

    let embed = new Discord.RichEmbed({
      "timestamp": new Date(msg.createdTimestamp).toISOString(),
      "description": owoify(msg.content),
      "author": {
        "name": owoify(msg.member.nickname || msg.author.username),
        "icon_url": msg.author.avatarURL,
      }
    });

    msg.channel.sendEmbed(embed);

  }
});

let owoify = function (v) {

  let faces=["(・`ω´・)",";;w;;","owo","UwU",">w<","^w^"];

  v = v.replace(/(?:r|l)/g, "w");
  v = v.replace(/(?:R|L)/g, "W");
  v = v.replace(/n([aeiou])/g, 'ny$1');
  v = v.replace(/N([aeiou])/g, 'Ny$1');
  v = v.replace(/N([AEIOU])/g, 'Ny$1');
  v = v.replace(/ove/g, "uv");
  v = v.replace(/\!+/g, " "+ faces[Math.floor(Math.random()*faces.length)]+ " ");

  return v;

}

client.login(localStorage.getItem('token'));
