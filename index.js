const table = 'あいうえおＡＢＣＤＥかきくけこＦＧＨＩＪさしすせそＫＬＭＮＯたちつてと\
ＰＱＲＳＴなにぬねのＵＶＷＸＹはひふへほZ？！ー／まみむめも￥＆絵絵絵や（ゆ）よ＊＃　絵半\
らりるれろ１２３４５わをん゛゜６７８９０'

const decode = (input) => {
  const str = input.replace(/ /g, '88')
  const len = str.length
  let out = ''
  for (let i = 0; len > i; i += 2) {
    let n1 = Number(str[i])
    let n2 = Number(str[i + 1])
    n1 = n1 === 0 ? 10 : n1
    n2 = n2 === 0 ? 10 : n2
    const key = ((n1 - 1) * 10) + n2 - 1
    out += table[key]
  }
  return out
}

module.exports = {
  decode
}
