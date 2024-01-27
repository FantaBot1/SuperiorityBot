import { generateWAMessageFromContent } from '@whiskeysockets/DokiBot'
let handler  = async (m, { conn }) => {
let texto = `
〔 𝗦𝘂𝗽𝗲𝗿𝗶𝗼𝗿𝗶𝘁𝘆 𝗕𝗼𝘁 〕

*COMPRAR BOT OPTIMUS*

*━━━━━━━━━━━━━⬣*
*✅ METODO DIAMANTES*
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
*200 DIAMANTES 1 GRUPO 💎*
*700 DIAMANTES PERMANENTE 💎*
*━━━━━━━━━━━━━⬣*

*━━━━━━━━━━━━━⬣*
*✅ METODO PERU BOT PROPIO*
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
*YAPE 1 :* 926 933 818 , Luis Alberto , 25 SOLES PROPIO
*YAPE 2 :* 976 336 831 , Mary Luz , 25 SOLES PROPIO
*━━━━━━━━━━━━━⬣*

*━━━━━━━━━━━━━⬣*
*✅ METODO PERU BOT GRUPO*
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
*YAPE 1 :* 926 933 818 , Luis Alberto , 5 SOLES 1 GRUPO
*YAPE 2 :* 976 336 831 , Mary Luz , 5 SOLES 1 GRUPOº
*━━━━━━━━━━━━━⬣*` 
let aa = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: `${texto}`.trim(), contextInfo: { externalAdReply: { title: '𝗦𝘂𝗽𝗲𝗿𝗶𝗼𝗿𝗶𝘁𝘆 𝗕𝗼𝘁', body: null, thumbnail: imagen2, sourceUrl: 'https://chat.whatsapp.com/GORUKC3sPk243HlE0FzYFa' }, mentionedJid: [m.sender] }}}, aa)
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })  
}
handler.tags = ['main']
handler.command = /^(instalarbot)/i
export default handler
