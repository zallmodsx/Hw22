// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab



const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://chat.whatsapp.com/H1HCEkVOldb5sXfTeZ9mR2'
global.ig = 'https://chat.whatsapp.com/H1HCEkVOldb5sXfTeZ9mR2' // ubah aja
global.email = 'zallmodsx@gmail.com' //serah
global.region = 'indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = '𝚉𝚊𝚕𝚕𝙼𝚘𝚍𝚜' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.domain = 'https://panel.privat.isrooffc.my.id/' // Isi Domain Lu
global.apikey2 = 'ptla_yiVxSOcc04oKZf8gW1z7RH07qYuEBCmqinZ53wGaDYl' // Isi Apikey Plta Lu
global.capikey2 = 'ptlc_0DCWYvVWcrJZAvMrxhpaW0lXKsByA5BlDHX3JxPJZzE' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
//=================================================//
global.owner = ['6285319486520'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = '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'
//====================BY Hw Mods=============================//
global.botname = '𝚉𝚊𝚕𝚕𝙼𝚘𝚍𝚜' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = '𝚉𝚊𝚕𝚕𝙼𝚘𝚍𝚜' // ubah aja ini nama sticker
global.author = '𝚉𝚊𝚕𝚕𝙼𝚘𝚍𝚜' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})