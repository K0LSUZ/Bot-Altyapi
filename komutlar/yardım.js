const Discord = require("discord.js");

module.exports = {
  name: "yardım",
  aliases: ["yardım", "y", "help", "h"],
  description: "sdsdsdsdsdsd",
  usage: "yardım",
  ownerOnly: false,
  //herkese açık mı yöneticilere özel mi?
  run: async (message,args,client) => {
    const yardımEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM') 
    .setTimestamp()
    .setTitle('**KOMUT LİSTESİ**')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`
    ?8ball       :: Sihirli 8ball sorularınızı cevaplar
    ?avatar      :: Avatarınızı gösterir
    ?emojiyazı   :: Mesajınızı emoji haline getirir
    ?hesapla     :: Belirtilen işlemi yapar.
    ?level       :: Seviyenizi gösterir.
    ?ping        :: Botun pingini gösterir
    ?servericon  :: Serverin iconunu gösterir
    ?seviye-ödül :: Belirtilen seviyeye gelince kullanıcıya verilecek rolleri belirler.
    ?slots       :: Slots oyunu oynatır
    ?stresçarkı  :: Sizin için bir stres çarkı çevirir.
    ?yardım      :: Tüm komutları gösterir.
    ?yaz         :: Bota istediğiniz bir mesaj yazdırırsınız
    ?yazıtura    :: Yazı-Tura atar.
    ?öneri       :: bot hakkındaki önerilerinizi bot sahiplerine ulaştırır
    ?şifre       :: Rastgele bir şifre oluşturur.
    `)
    .setFooter(message.author.username + ` tarafından istendi`);
    message.author.send(yardımEmbed);

    const mesajkontrol = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(":postbox: Özel mesajlarını kontrol et :postbox:")
    .setTimestamp();
    message.channel.send(mesajkontrol);
  }
}