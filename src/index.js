import CryptoJS from 'crypto-js'

const encryptPassword = password =>
  CryptoJS.enc.Hex.stringify(CryptoJS.SHA256(password))

const encryptPin = (pin, key) => {
  const encKey = CryptoJS.enc.Utf8.parse(key)
  const result = CryptoJS.TripleDES.encrypt(pin, encKey, {
    mode: CryptoJS.mode.ECB,
  })
  return CryptoJS.enc.Hex.stringify(result.ciphertext)
}

module.exports = {
  encryptPassword,
  encryptPin,
}
