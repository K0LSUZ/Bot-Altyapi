const Discord = require('discord.js');


module.exports = {
    name: "avatar",
    aliases: ["avatar"],
    description: "Sunucuya avatarınızı atar",
    usage: "avatar",
    ownerOnly: false,
    run: async (message,args,client) => {
        let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({size: 1024})


        const embed = new Discord.MessageEmbed()
        .setTitle(`${member.tag}`)
        .setImage(avatar)
        .setColor("RANDOM")

        message.channel.send(embed);

    }
}