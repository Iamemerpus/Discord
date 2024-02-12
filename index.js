const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/Port_of_Spain', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rpc started! check your profile ^^`);

  const r = new Discord.RichPresence()
    .setApplicationId('1189883886579232788')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=Lkfr3dnNOAY') //Must be a youtube video link 
    .setState('Sleepy')
    .setName('randomness')
    .setDetails(`Hey 👋⚓ [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1150242860273254460/1206396977269440584/cd0qa1.gif') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('insert funny text') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1150242860273254460/1206396977269440584/cd0qa1.gif?ex=65dbdbbd&is=65c966bd&hm=8b5855d5d1940919e2ca4c2aac25042a486c9035f52aa7f91efc8dc2d46a1cd5&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('You weirdo, why would you hover over the small image.') //Text when you hover the Small image
    .addButton('My Site 🔨', 'https://vornexx.is-a.dev/')
    .addButton('In depth bio 💞', 'https://rentry.co/vornexx')

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Hey 👋⚓ [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
