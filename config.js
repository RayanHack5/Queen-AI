/*
                                ╭━━━┳╮ ╭┳━━━┳━━━┳━╮ ╭╮    ╭━━━┳━━╮
                                ┃╭━╮┃┃ ┃┃╭━━┫╭━━┫┃╰╮┃┃    ┃╭━╮┣┫┣╯
                                ┃┃ ┃┃┃ ┃┃╰━━┫╰━━┫╭╮╰╯┃    ┃┃ ┃┃┃┃
                                ┃┃ ┃┃┃ ┃┃╭━━┫╭━━┫┃╰╮┃┃╭━━╮┃╰━╯┃┃┃
                                ┃╰━╯┃╰━╯┃╰━━┫╰━━┫┃ ┃┃┃╰━━╯┃╭━╮┣┫┣╮
                                ╰━━╮┣━━━┻━━━┻━━━┻╯ ╰━╯    ╰╯ ╰┻━━╯
                                   ╰╯
## Project Name => Queen-AI
## Project Version => 1.0.1  
## Project Author => DarkWinzo
## Project license => MIT
## Project Team => DarkSide Team
## Module Name => config.js
## Coded By DarkWinzo
*/ 

const fs = require('fs');
const chalk = require('chalk');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = {
      BASE_URL: "https://queen-api-production.up.railway.app", //Queen-AI Base API Url
      SESSION_ID: process.env.SESSION_ID || "KermLite~FW0V9Vrd", //enter your session id here
      OWNER_NUMBER: process.env.OWNER_NUMBER || "237659535227", //Owner whatsapp number here
      OWNER_NAME: process.env.OWNER_NAME || "RayanAi", //Queen-AI Owner Name here
      PREFIX: ".", //Don't Change This..
      LANGUAGE: process.env.LANGUAGE || "FR" //Enter bot working language EN = English / SI = Sinhala /ML = Malayalam /HI =Hindi /UR = Urdu /FR = French
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright("Update config.js"))
	delete require.cache[file]
	require(file)
});
