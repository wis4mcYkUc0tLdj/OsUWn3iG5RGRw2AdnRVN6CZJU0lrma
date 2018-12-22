const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**CAN YOU JOIN PLEASE? :heart_eyes: :hearts: https://discord.gg/ExPYXcN**`)

}).catch(console.error)
})

client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**CAN YOU JOIN PLEASE? :heart_eyes: :hearts: https://discord.gg/ExPYXc**`)

}).catch(console.error)
})
client.login('"NTIzODE1MjIxOTI4Nzg3OTY5.Dv_XvA.-P-2Ir-9jfdMQdbSNHUTRPSe7aM"');
