const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

module.exports = {
    name: "dmduyuru",
    aliases: ["dmduyuru","duyuru"],
    description: "",
    usage: "dmduyuru",
    ownerOnly: false,
    run: async (message,args,client) => {
if (message.author.id !=ayarlar.sahip ) { return; }
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Birşey Yazmalısınız');
  message.delete();
      const mesajat = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setDescription('' + mesaj + '')

      client.users.cache.forEach(u => {
u.send(mesajat)
})
    }
}