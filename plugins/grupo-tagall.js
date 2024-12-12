let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@renacidas_femm ${pesan}`
let teks = `*𝑨𝒄𝒕𝒊𝒗𝒆𝒏𝒔𝒆 𝒑𝒖𝒕𝒊𝒕𝒂𝒔!!💅*\n${oi}\n\n*💅🏻@𝔠𝔢𝔬𝔤𝔢𝔯𝔦𝔭𝔦𝔲𝔪.𝔡𝔷𝔫*\n`
for (let mem of participants) {
teks += `💗꒱ @${mem.id.split('@')[0]}\n`}
teks += `${wm}`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) } )
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
