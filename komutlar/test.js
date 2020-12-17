module.exports = {
    name: "test",
    aliases: ["test"],
    description: "",
    usage: "test",
    ownerOnly: false,
    run: async (message,args,client) => {
         message.channel.send("Bu bir test mesajıdır.")
    }
}