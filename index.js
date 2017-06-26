const table = 'ＥあいうえおＡＢＣＤＪかきくけこＦＧＨＩＯさしすせそＫＬＭＮＴたちつてと\
ＰＱＲＳＹなにぬねのＵＶＷＸ／はひふへほZ？！ー絵まみむめも￥＆絵絵半や（ゆ）よ＊＃　絵\
５らりるれろ１２３４０わをん゛゜６７８９'

const encode = (input) => {
  return [...input].map((str) => {
    return ('0' + (table.indexOf(str) + 10)).slice(-2)
  }).join('')
}

const decode = (input) => {
  const str = input.replace(/ /g, '88')
  const len = str.length
  let out = ''
  for (let i = 0; len > i; i += 2) {
    const key = ((Number(str[i]) - 1) * 10) + Number(str[i + 1]) - 1
    out += table[key]
  }
  return out
}

module.exports = {
  encode,
  decode,
}
