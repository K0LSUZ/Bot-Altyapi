const Discord = require('discord.js');
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json")

module.exports = {
    name: "reboot",
    aliases: ["reboot","yenidenbaşlat"],
    description: "",
    usage: "reboot",
    ownerOnly: false,
    run: async (message,args,client) => {
 if(message.author.id !== "322914552708595712") return message.channel.send("🚫 Yapımcım Değilsin!")
    
    message.channel.send(`Bot yeniden başlatılıyor...`).then(msg => {
    console.log(`BOT: Yeniden Başlatılıyor.....`);
    process.exit(0);
  })
    }
}