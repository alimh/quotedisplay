var fs = require('fs');
fs.writeFileSync('./.env', `API_KEY=${process.env.API_KEY}\n`);
fs.writeFileSync('./.env', `CLIENT_ID=${process.env.CLIENT_ID}\n`);
