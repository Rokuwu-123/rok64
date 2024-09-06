const {rokEncrypt,rokDecrypt} = require('./rok64')

encryptResult = rokEncrypt('test')
console.log(encryptResult)
console.log(rokDecrypt(encryptResult));
