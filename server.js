const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(`Go to https://console.cron-job.org/dashboard and paste this link to ping it every 1 minute 💞`)
})
 
function keepAlive() {
  server.listen(3000, () => { console.log("RPC is Ready 💞" + Date.now()) });
}
 
module.exports = keepAlive;

