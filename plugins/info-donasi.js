let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
「 Suport Bot Dengan Cara donasi 」

⫹⫺ Via Pulsa XL : 087841959988
⫹⫺ Via Pulsa Telkomsel : 082398074198
⫹⫺ Via Gopay : 087841959988
⫹⫺ Via Saweria :
⫹⫺ https://saweria.co/jarotoffc

`.trim()
  m.reply(text)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
