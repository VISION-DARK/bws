let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat,`${pickRandom(global.shiraori)}`, m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = //i
handler.command = new RegExp
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.shiraori = [
'halo kak',
'knp kak',
'kak jalan yuk>_<',
'jangan ganggu aku lagi sibuk',
'bentar lagi pergokin Fariz ngegay',
'aku lagi makan',
'aku disini',
'Donasi dulu',
'aku lagi ngambek ',
'bagi duit dulu/',
'Silahkan ketik .menu ya kak',
'aku istirahat dulu',
]
