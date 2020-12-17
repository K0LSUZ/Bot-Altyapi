const Discord = require('discord.js');
const prefix = require('./prefix.js')


    module.exports = {
        name: "öneri",
        aliases: ["öneri"],
        description: "Botun sahibine önerilerinizi yazmanıza yarar",
        usage: "öneri",
        ownerOnly: false,
        run: async (message,args,client) => {
            let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.MessageEmbed()
.setDescription('Kullanım: !!tavsiye <Tavsiyeniz>'));
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription('Öneriniz Bildirildi!')
message.channel.send(embed)
const embed2 = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcının tavsiyesi:`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("Öneri", type)
.setThumbnail(message.author.avatarURL)
client.channels.cache.get('715915550575820863').send(embed2)
                    
        }
    }