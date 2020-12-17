const Discord = require('discord.js');

const mapping = {
    ' ': '   ',
    '0': ':zero:',
    '1': ':one:',
    '2': ':two:',
    '3': ':three:',
    '4': ':four:',
    '5': ':five:',
    '6': ':six:',
    '7': ':seven:',
    '8': ':eight:',
    '9': ':nine:',
    '!': ':grey_exclamation:',
    '?': ':grey_question:',
    '#': ':hash:',
    '*': ':asterisk:'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
	mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});

module.exports = {
    name: "emojiyazı",
    aliases: ["emojiyazı"],
    description: "Mesajlarınızı emojiye çevirir",
    usage: "emojiyazı",
    ownerOnly: false,
    run: async (message,args,client) => {
        if (args.length < 1) return message.reply('Lütfen bir mesaj belirt. **Doğru Kullanım**: ?emojiyazı <mesaj>')
		
        message.channel.send(args.join(' ').split('').map(c => mapping[c] || c).join(' '));
    }
}