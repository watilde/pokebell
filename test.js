const assert = require('assert')
const { encode, decode } = require('.')
const nemumi = decode('にほんは　よるた゛よ　ねむいよ')
const nemusa = decode('52650361 8593410485 54731285')

assert.ok(nemumi, '526503618885934104858854731285')
assert.ok(nemusa, 'にほんは　よるた゛よ　ねむいよ')
