# Pokebell decoder
It's all about 📟 input in Japanese.

## api

### pokebell.encode
```
const assert = require('assert')
const { decode } = require('pokebell')
const nemuiyo = decode('52650361 8593410485 54731285')

assert.ok(nemuiyo, 'にほんは　よるた゛よ　ねむいよ')
```

### pokebell.decode
```
const assert = require('assert')
const { decode } = require('pokebell')
const nemuiyo = decode('52650361 8593410485 54731285')

assert.ok(nemuiyo, 'にほんは　よるた゛よ　ねむいよ')
```
