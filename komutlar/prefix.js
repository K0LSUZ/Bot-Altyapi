const db = require('quick.db')

module.exports = {
    name: "prefix",
    aliases: ["prefix"],
    description: "Botun Prefixini Değiştirmeye Yarar",
    usage: "prefix",
    ownerOnly: false,
    run: async (message,args,client) => {
        
        if(!message.guild.members.cache.get(message.author.id).hasPermission("ADMINISTRATOR")) {
            return message.channel.send("Bu işlem işin gerekli yetkiniz bulunmamaktadır.")
        }
        var args = args[0]

        if(!args) {
            return message.channel.send("Lütfen bir prefix belirtiniz.")
        }

        db.set("prefix_" + message.guild.id, args)

        message.channel.send("Başarı ile prefixiniz " + args + " olarak ayarlandı.")
    }
}