const CryptoJS = require('crypto-js')



const encryptPassword = password =>  CryptoJS.enc.Hex.stringify(CryptoJS.SHA256(password))
 

const encryptyPin = (pin, key) => {
  const encKey =  CryptoJS.enc.Utf8.parse(key);
  const result = CryptoJS.TripleDES.encrypt(pin, encKey,{mode:CryptoJS.mode.ECB});
  return CryptoJS.enc.Hex.stringify(result.ciphertext);
}



module.exports = {
  encryptPassword,
  encryptyPin
}