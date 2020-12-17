module.exports = {
    name: "ping",
    aliases: ["ping"],
    description: "",
    usage: "ping",
    ownerOnly: false,
    run: async (message,args,client) => {
        message.channel.send("Pingim **" + client.ping + "** ms!");
    }
}