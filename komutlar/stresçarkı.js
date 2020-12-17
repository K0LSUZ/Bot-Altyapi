const Discord = require('discord.js');

module.exports = {
    name: "stresçarkı",
    aliases: ["stresçarkı, stres-çarkı"],
    description: "",
    usage: "test",
    ownerOnly: false,
    run: async (message,args,client) => {
        let dönme = await message.channel.send({
            embed: {
                color: 0x00AE86,
                description: `${message.author.tag} bir stres çarkı çevirdi!`,
                image: {
                    url: "https://i.imgur.com/KJJxVi4.gif"
                }
            }
        });
        
        let bitiş = (Math.random() * (60 - 5 +1)) + 5;
        setTimeout(() => {
            dönme.edit({
                embed: {
                    color: 0x00AE86,
                    description: `${message.author.tag}, stres çarkın ${bitiş.toFixed(2)} saniye döndü.`
                }
            });
        }, 5 * 1000);
    }
}



