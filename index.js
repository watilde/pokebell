const table = `
ＥあいうえおＡＢＣＤ
ＪかきくけこＦＧＨＩ
ＯさしすせそＫＬＭＮ
ＴたちつてとＰＱＲＳ
ＹなにぬねのＵＶＷＸ
／はひふへほZ？！ー
〒まみむめも￥＆〓☎
、や（ゆ）よ＊＃　♥
５らりるれろ１２３４
０わをん゛゜６７８９
`.replace(/\n/g, '')

const encode = (input) => {
  input = input.replace(/☕/g, '〒').replace(/⏰/g, '〓')
  return [...input].map((str) => {
    return ('0' + (table.indexOf(str) + 10)).slice(-2)
  }).join('')
}

const decode = (input) => {
  return input.replace(/ /g, '88').split(/(.{2})/).filter(n=>n).map((str) => {
    return table[((Number(str[0]) - 1) * 10) + Number(str[1])]
  }).join('').replace(/〒/g, '☕').replace(/〓/g, '⏰')
}

module.exports = {
  encode,
  decode,
}
