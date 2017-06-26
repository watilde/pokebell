# Pokebell decoder
it's all about 📟 input in Japanese.

## api

### pokebell.encode
```js
const assert = require('assert')
const { encode } = require('pokebell')
const nemumi = encode('にほんは　よるた゛よ　ねむいよ')

assert.ok(nemumi, '526503618885934104858854731285')
```

### pokebell.decode
```js
const assert = require('assert')
const { decode } = require('pokebell')
const nemusa = decode('52650361 8593410485 54731285')

assert.ok(nemusa, 'にほんは　よるた゛よ　ねむいよ')
```
