const Discord = require('discord.js');


module.exports = {
    name: "yaz",
    aliases: ["yaz"],
    description: "",
    usage: "yaz",
    ownerOnly: false,
    run: async (message,args,client) => {
        const mesaj = args.slice(0).join(' ')
        if (mesaj < 1) {
          message.reply("Yazmam için bir şey belirt")
        } else {
          message.delete();
          message.channel.send(mesaj)
        }
        
    }
}