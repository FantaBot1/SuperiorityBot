let media = './media/menus/Menu4paypal.jpg'
let handler = async (m, { conn, command }) => {
let pp = './src/apoyo.jpg'
/*
//await conn.sendButton(m.chat, wm, `https://paypal.me/OficialGD`, pp, m)
await conn.sendButton(m.chat, ``, `https://paypal.me/OficialGD`, pp, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]], m) //[['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]]
  */
let name = await conn.getName(m.sender)
await conn.sendMessage(m.chat, { 
text: `
*BIENVENIDO AL CENTRO DE DONACION DE SUPERIORITY BOT 🇻🇮*

*• Yape :* *926 933 818*
        *Nombre : Luis Alberto*`, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"thumbnail": imagen3, 
"title": '𝗦𝘂𝗽𝗲𝗿𝗶𝗼𝗿𝗶𝘁𝘆 𝗕𝗼𝘁', 
"containsAutoReply": true,
"mediaType": 1, 
"mediaUrl": md, 
"sourceUrl": md, 
}}}, { quoted: m })
// await conn.sendButton(m.chat, `a`, `https://paypal.me/OficialGD`, pp, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]], m) //[['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]]
/*await conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/elrebelde21/The-LoliBot-MD', 'ɢɪᴛʜᴜʙ', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧 💗', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)}*/
}
handler.command = /^dona(te|si)|donar|apoyar|yape|donating|creditos$/i
handler.exp = 80
export default handler
