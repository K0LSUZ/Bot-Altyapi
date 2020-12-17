const db = require('quick.db')
const Discord = require('discord.js');

const cevaplar = [
    "olumlu",
    "olumsuz"
];

module.exports = {
    name: "8ball",
    aliases: ["8ball"],
    description: "Sihirli 8ball sorularınızı cevaplar",
    usage: "8ball",
    ownerOnly: false,
    run: async (message,args,client) => {
        var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Bir soru belirt. **Doğru Kullanım**: ?8ball <soru>')
    else message.channel.send(cevap)

    }
}