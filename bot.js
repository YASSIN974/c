const Discord = require('discord.js')
const client = new Discord.Client();
client.on('ready', function(){
const prefix = "*"
  console.log(Logged in as ${client.user.tag}!);
   // var s = ['483063515981283354','483063446376677386','483063378726879232','483063354332545045','483063463179190293'];
   var s = ['483055660209012736','480169573530861578','483055655800930315'];
client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "332713449215754242") return;

if (message.content.startsWith(prefix + 'setstream')) {
  client.user.setGame(argresult, 'https://www.twitch.tv/skwadraa');
     console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}`)
}

if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
}
if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}
});
client.login(process.env.BOT_TOKEN);
