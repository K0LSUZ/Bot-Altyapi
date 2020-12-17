const Discord = require("discord.js");
const client = new Discord.Client();
const proton = require("proton-io")
const db = require("quick.db")
const ayarlar = require("./ayarlar.json")
const prefix = require("./komutlar/prefix.js")

let komutDosya = "./komutlar"
let event = "./eventler"
let gelistiricler = ["322914552708595712"]
let owner = true;
let defaultCommands = ["ping"];

const komutYukle = new proton(client, komutDosya, event, gelistiricler, { owner, defaultCommands })

let botlaraCevapVer = false;
let etiketlePrefixOgren = true;
let etiketiPrefixOlarakKullan = true;

client.on('message', async (msg) => {

  if (!await db.has("prefix_" + msg.guild.id)) {
    var prefix = "."
  } else {
    var prefix = await db.fetch("prefix_" + msg.guild.id)
  }

  komutYukle.message(msg, prefix, { botlaraCevapVer, etiketiPrefixOlarakKullan, etiketlePrefixOgren })
})

client.on("message", (message) => {
  if (message.content.toLowerCase() === "selam") {
    message.channel.send("Aleyküm selam.")
  }
  if (message.content.toLowerCase() === "sea") {
    message.channel.send("Aleyküm selam.")
  }
    if (message.content.toLowerCase() === "sa") {
    message.channel.send("Aleyküm selam.")
  }
})


client.on("message", async message => {

  if (message.content.startsWith(prefix.args)) return;
  if (message.author.bot) return;

  var id = message.author.id;
  var gid = message.guild.id;

  var xp = await db.fetch(`xp_${id}_${gid}`);
  var lvl = await db.fetch(`lvl_${id}_${gid}`);
  var xpToLvl = await db.fetch(`xpToLvl_${id}_${gid}`);


  if (!lvl) {

    db.set(`xp_${id}_${gid}`, 5);
    db.set(`lvl_${id}_${gid}`, 1);
    db.set(`xpToLvl_${id}_${gid}`, 100);

  } else {

    var random = Math.random() * (8 - 3) + 3;
    db.add(`xp_${id}_${gid}`, random.toFixed());
    console.log(xp);

    if (xp > xpToLvl) {

      db.add(`lvl_${id}_${gid}`, 1);
      db.add(`xpToLvl_${id}_${gid}`, await db.fetch(`lvl_${id}_${gid}`) * 100);
      var lvl = await db.fetch(`lvl_${id}_${gid}`);
      message.channel.send("Tebrikler, " + message.author.tag + ". Seviye atladın! Yeni seviyen: **" + lvl + "**");
      var role = message.guild.roles.get(await db.fetch(`role_${gid}_${lvl}seviye`));
      if (!role) return;
      else {
        message.member.addRole(role);
        message.channel.send("Tebrikler! **" + lvl + "** seviye olarak @" + role.name + " rolünü kazandınız.");
      }

    }

  }



});

client.login(ayarlar.token)