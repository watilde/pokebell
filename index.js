const table = 'ＥあいうえおＡＢＣＤＪかきくけこＦＧＨＩＯさしすせそＫＬＭＮＴたちつてと\
ＰＱＲＳＹなにぬねのＵＶＷＸ／はひふへほZ？！ー絵まみむめも￥＆絵絵半や（ゆ）よ＊＃　絵\
５らりるれろ１２３４０わをん゛゜６７８９'

const encode = (input) => {
  return [...input].map((str) => {
    return ('0' + (table.indexOf(str) + 10)).slice(-2)
  }).join('')
}

const decode = (input) => {
  return input.replace(/ /g, '88').split(/(.{2})/).filter(n=>n).map((str) => {
    return table[((Number(str[0]) - 1) * 10) + Number(str[1])]
  }).join('')
}

module.exports = {
  encode,
  decode,
}
