# Example

```shell
$ npm install wolffer --save-dev
```

```javascript
const {wolffer} = require('wolffer')
const filtered = wolffer('hey there, how are you?', ['there']);

console.log(filtered)
// hey ***, how are you?
```
