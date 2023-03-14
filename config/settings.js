const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['6285923463470'] // no own
global.author = 'AnggaKz' // nama author 
global.packname = 'Lisabotz-MD whatsapp' // nama pack sticker
global.namabot = 'Lisabotz-MD' // nama bot mu
global.group = 'https://chat.whatsapp.com/Ly28IB8Fel4JbPS0qCUy2p' // grup mu
global.pic = 'https://telegra.ph/file/3a0e3e7784ddfcf0c5afc.jpg' // logo bot



let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
