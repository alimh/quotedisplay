var fs = require('fs');
fs.writeFileSync('./.env', `var API_KEY=${process.env.API_KEY};\nvar CLIENT_ID=${process.env.CLIENT_ID};\n`);
