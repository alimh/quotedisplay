var fs = require('fs');
fs.writeFileSync('./.env', `API_KEY=${process.env.API_KEY}\nREACT_CLIENT_ID=${process.env.CLIENT_ID}\n`);