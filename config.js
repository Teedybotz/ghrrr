/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
	zhir: 'https://zahirr-web.herokuapp.com',
	lol: 'https://api.lolhuman.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'apikeylu',
	'https://zahirr-web.herokuapp.com': 'zahirgans',
	'https://api.lolhuman.xyz': 'apikeylu',
}

// Other
global.owner = ['6281271007021', '6281271007021']
global.botname = 'TEDZBOT-MD'
global.ownername = 'TEDZ OFC'
global.packname = 'TEDZOT-MD'
global.author = 'CREATED BY TEDZ OFC'
global.sessionName = 'session'
global.prefa = ['#','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done !! Subscribe Tedy Botz',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Mohon Tunggu Sebentar..',
}
global.thumb = fs.readFileSync('./lib/bayu.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
