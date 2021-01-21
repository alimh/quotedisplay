var fs = require('fs');
fs.writeFileSync('./.env', `API_KEY=${process.env.API_KEY}\nGATSBY_CLIENT_ID=${process.env.CLIENT_ID}\n`);