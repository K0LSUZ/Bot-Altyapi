const Discord = require('discord.js');
const math = require('math-expression-evaluator')
const stripIndents = require('common-tags').stripIndents
const prefix = require('./prefix.js')


module.exports = {
    name: "hesapla",
    aliases: ["hesapla"],
    description: "",
    usage: "hesapla",
    ownerOnly: false,
    run: async (message,args,client) => {
        var soru = args.join(' ');
    
        if(!soru) return message.reply('Bir işlem belirtin. **Doğru Kullanım**: ?hesapla <işlem>')
        else { let cevap;
            try {
                cevap = math.eval(soru)
            } catch(err) {
                message.channel.send('Hatalı işlem: **' + err)
            }
    
            const embed = new Discord.MessageEmbed()
            .addField('Soru', soru)
            .addField('Cevap', cevap)
    
            message.channel.send(embed)
        }
    }
}