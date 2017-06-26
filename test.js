const assert = require('assert')
const { decode } = require('.')
const nemuiyo = decode('52650361 8593410485 54731285')

assert.ok(nemuiyo, 'にほんは　よるた゛よ　ねむいよ')
