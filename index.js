
//------------------Checking------------------//
       //----Checking Node Version----//
if (process.version.slice(1, 3) - 0 < 16)
	throw new Error(
		`NodeJS Version 16 or higher version is required, you are using ${process.version}. Install New Node.js Version from https://nodejs.org/ , If using replit See This Video To Update Node 
tinyurl.com/updatenode `
	)
       //----Checking Discord.js Installed----//
try {
	require('discord.js')
} catch (e) {
	throw new Error('Please Install Discord.js By Using "npm i discord.js" , Discord JS is required for The Package to Run')
}
       //----Getting Version of Discord.js----//
const { version: discordJSVersion } = require(require('path').join(
	require.resolve('discord.js'),
	'..',
	'..',
	'package.json'
))
//----Checking If Discord.js is V13 or Not----//
if (discordJSVersion.slice(0, 2) !== '13')
	throw new Error(
		`Discord.JS version 13 is required, but you are using ${discordJSVersion}. See https://www.npmjs.com/package/discord.js`
	)
//--------------------------------------------//



//                  Funcitions                   //
module.exports.nqn = require('./src/General/nqn')
module.exports.giveawaySystem = require('./src/System/giveaway')
module.exports.ticketSystem = require('./src/System/ticketSystem')
