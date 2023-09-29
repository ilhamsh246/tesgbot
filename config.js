/*
Thanks to Botcahx
Thanks to Betabotz
Thanks to DyLux-FG
Thanks to Subscriber
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6285640166891', 'HenzzXD', true],
  ['62895351154108']
] // Nomor Owner

global.mods = ['6285711324080'] 
global.prems = ['6285711324080', '6285711324080']

// apikey
global.lann = 'zyHiDhxH'
// apikeylu di ganti menggunakan apikey yang di dapatkan di website https://api.betabotz.org. contohnya global.lann = 'nans' (contoh). cara mendapatkan apikey. masuk website > scroll ke bawah dan cari harga yang kamu mau ada juga yang free dan tekan > otomatis akan di arahkan untuk registrasi, isi data diri email dll. > kalo sudah klik profil dan di situ akan muncul apikey mu. terima kasih.

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-fgmods.ddns.net': 'mhdAnan',
  'https://api.betabotz.org': 'apikeylu'
}

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org'
}

// Watermark
global.nama = 'HenzzXD' // nama owner
global.nomor = '6285711324080' // nomor owner
global.nans = 'HenzzXD' // nama bot 
global.thumb = 'https://ibb.co/qn81dTp' // thumbnail bot ( foto menu )
global.dygp = 'https://chat.whatsapp.com/C4OGXvdgseAAS8KM6uyXnO' // link group yang ada di menu

// Sticker wm
global.packname = 'WhatsApp' 
global.author = 'Dibuat Oleh WhatsApp' 
global.fgig = 'https://www.instagram.com/henzz4368' // bebas tapi jangan kosong 
global.fgsc = 'https://github.com/henzz4368' // bebas tapi jangan kosong
global.fgyt = 'https://youtube.com/@HenzzXD1' // bebas tapi jangan kosong
global.fgpyp = 'https://youtube.com/@HenzzXD1' // bebas tapi jangan kosong
global.fglog = 'https://ibb.co/qn81dTp'

// Other
global.dana = '085711324080'
global.qris = 'https://ibb.co/qn81dTp'
global.web = 'https://youtube.com/@HenzzXD1'
global.email = 'henzzxd01@gmail.com'
global.lastm = 'ꜱɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʙʏ HenzzXdD'

global.wait = 'Tunggu sebentar....'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // Peringatan maksimum

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})