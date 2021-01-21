var fs = require('fs');
fs.writeFileSync('./env.js', `{ module.exports = {API_KEY=${process.env.API_KEY}, CLIENT_ID=${process.env.CLIENT_ID}\n`);
