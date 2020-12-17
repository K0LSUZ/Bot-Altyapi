const Discord = require('discord.js');


module.exports = {
        name: "servericon",
        aliases: ["server-icon"],
        description: "",
        usage: "servericon",
        ownerOnly: false,
        run: async (message,args,client) => {

            var serverIcon = message.guild.iconURL();   

            const embed = new Discord.MessageEmbed()
            .setDescription("**SUNUCU ICONU**")
            .setImage(serverIcon)
    
        message.channel.send(embed);
        }
    }