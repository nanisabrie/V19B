const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api-alphabot.herokuapp.com',
}

// Free apikey
global.APIKeys = {
	'https://api-alphabot.herokuapp.com': 'Alphabot',
}

// setting 
global.autoread = false // auto read pesan / message
global.autorecording = false //status auto merekam ( auto record )
global.autoketik = true //status auto mengetik (auto typing)
global.available = true //status online (online)

// Other
global.botname = "𝐒𝐀𝐁𝐑𝐈𝐄 𝐁𝐎𝐓𝐙" //namabot kalian
global.ownername = "Sabrie" //nama kalian
global.myweb ="https://apikey-bear3.herokuapp.com" //bebas asal jan hapus
global.youtube = "https://www.youtube.com/channel/UCVSEzfCh6VYL3g9ixHnSqXQ" //bebas asal jan hapus
global.github = "https://nanisabrie.github.io/" //bebas
global.email = "sabrietoman@gmail.com" //bebas
global.region = "Malaysia" //bebas
global.ownernomer = "601161739141" // nomor wa kalian
global.ownernomerr = "+601161739141" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["601161739141"] //ganti agar fitur owner bisa di gunakan
global.packname = '© 𝐒𝐀𝐁𝐑𝐈𝐄 𝐁𝐎𝐓𝐙' //sticker wm ubah
global.author = 'Di Buat Oleh 𝐒𝐀𝐁𝐑𝐈𝐄' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Done, Oke Desu~',
    admin: 'Perintah Ini Hanya Boleh Digunakan Oleh Admin !',
    botAdmin: 'Perintah Ini Hanya Boleh Digunakan Ketika Bot Menjadi Admin !',
    owner: 'Perintah Ini Hanya Boleh Digunakan Oleh Owner !',
    group: 'Perintah Ini Hanya Boleh Digunakan Di Group !',
    private: 'Perintah Ini Hanya Boleh Digunakan Di Private !',
	bot: 'Fitur Untuk Pengguna Nombor Bot',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: '⏳ Sedang Di Proses',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
