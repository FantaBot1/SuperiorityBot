let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*BIENVENIDO AL CENTRO DE GRUPOS OFC DE SUPERIORITY BOT 🇻🇮*

*• GRUPO DE SORTEOS :* *${nn}*

*• Nota :* *Recuerda Que Superiority No Tiene Grupo Propio Del Bot , El Grupo De Sorteos Es Donde Podras Ganar Totalmente Gratis Plantillas De Las Mejores Dzn Y Incluso A Superiority Para Tu Grupo*`.trim() 
conn.reply(m.chat, info, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: `${wm}`,
body: '', previewType: 0, thumbnail: imagen2, sourceUrl: nna}}})
//conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '𝙏𝙝𝙚-𝙇𝙤𝙡𝙞𝘽𝙤𝙩-𝙈𝘿', 'status@broadcast')
}
handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i
export default handler
