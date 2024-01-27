var handler = async (m, {command, conn, args, usedPrefix, text}) => {
  if (command == "ytmp4" || command == "ytvmp4") {
    let mp4 = `*Atencion Le Avisamos Sobre El Nuevo Comando Que Ahora Es :_
_${usedPrefix}videomp4_`.trim();

    m.reply(mp4);
  }

  if (command == "cuentas") {
    var play = `*Las Cuentas Generadas De Hoy Y Actualizadas Ya Estan Disponibles*\n
*${usedPrefix}Recuerda Que Cada 24 Horas Hay Nuevas Cuentas*\n*Solicita las cuentas disponible con el siguiente comando 👇🏼*\n\n.cuentitas\n\n*Disfruta de las cuentas 👋🏼*`.trim();
    m.reply(play);
  }
};
handler.command = ["ytmp4", "cuentas", "", ""];
handler.tags = ["internet"];
export default handler
