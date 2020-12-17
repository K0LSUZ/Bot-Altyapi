const Discord = require('discord.js');
const db = require("quick.db");



module.exports = {
    name: "seviyeödül",
    aliases: ["seviyeödül"],
    description: "",
    usage: "seviyeödül",
    ownerOnly: false,
    run: async (message,args,client) => {
        var user = message.author;
        var role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
        if(!role) return message.channel.send("bir rol veya rol id si belirtin.");
        var lvl = args[1];
        if(!lvl) return message.channel.send("Bir seviye belirtin.");
        
        db.set(`role_${message.guild.id}_${lvl}seviye`, role.id);
        message.channel.send(lvl + " ödül rolü başarıyla @" + role.name + " olarak ayarlandı.");
    }
}