const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const slots = ['🍇', '🍊', '🍋'];


module.exports = {
    name: "slots",
    aliases: ["slots"],
    description: "",
    usage: "slots",
    ownerOnly: false,
    run: async (message,args,client) => {
        var slot1 = slots[Math.floor(Math.random() * slots.length)];
        var slot2 = slots[Math.floor(Math.random() * slots.length)];
        var slot3 = slots[Math.floor(Math.random() * slots.length)];
        
        if (slot1 === slot2 && slot1 === slot3) {
            message.channel.send(stripIndents`
            ${slot1} : ${slot2} : ${slot3}
            Tebrikler, kazandınız!
            `); 
        } else {
            message.channel.send(stripIndents`
            ${slot1} : ${slot2} : ${slot3}
            Eyvah, kaybettin!
            `);	
        }
    }
}