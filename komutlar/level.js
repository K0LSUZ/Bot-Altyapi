const Discord = require('discord.js');
const db = require("quick.db");


module.exports = {
    name: "level",
    aliases: ["level, seviye, lvl"],
    description: "",
    usage: "level",
    ownerOnly: false,
    run: async (message,args,client) => {
        var user = message.mentions.users.first() || message.author;
        var id = user.id
        var gid = message.guild.id;
        
        var xp = await db.fetch(`xp_${id}_${gid}`);
        var lvl = await db.fetch(`lvl_${id}_${gid}`);
        var xpToLvl = await db.fetch(`xpToLvl_${id}_${gid}`);
        
        var embed = new Discord.MessageEmbed()
          .setAuthor(user.tag)
          .addField("Level: ", lvl ? lvl : "0")
          .addField("XP: ", xp ? xp : "0")
          .setFooter(`Level atlamaya kalan son ${xp ? xpToLvl - xp : "0"} XP`)
        message.channel.send(embed);            
    }
}