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
    timeZone: 'VietNam/Ho_Chi_Minh_City', //https://www.zeitverschiebung.net/en/ and find your city and enter here
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
    .setApplicationId('1046430425905643612')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=-k7kjk34Asw') //Must be a youtube video link 
    .setState('Sleepy')
    .setName('randomness')
    .setDetails(`Baby Em Xinh Như Một Bông Hoa [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1197942655670296618/1201995856447033344/200.gif') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('insert funny text') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1197942655670296618/1207908987962527744/pink-verify.gif') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('You weirdo, why would you hover over the small image.') //Text when you hover the Small image
    .addButton('Discord ', 'https://discord.gg/DhT7adeM')
    .addButton('Youtube ✏️💞'https://www.youtube.com/watch?v=k5FrA2WJ23A')

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Baby Em Xinh Như Một Bông Hoa [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
