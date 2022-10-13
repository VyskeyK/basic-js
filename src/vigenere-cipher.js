const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    console.log(message.length);
    console.log(key.length);
    const messageArr = message.toLowerCase().split('')
    const messageToAlphabet = messageArr.map(letter => letter.charCodeAt(0) - 96);
    const keyArr = key.toLowerCase().split('');
    const keyToAlphabet = keyArr.map(letter => letter.charCodeAt(0) - 96);
    const keyLength = keyArr.length;
    
    let keyToInsert = 0;
    for (let i = 0; i < messageToAlphabet.length; i ++) {
      if (messageToAlphabet[i] <=0) {
        keyToAlphabet.splice(i, 0, messageToAlphabet[i]);
      } else if (keyToAlphabet.length <= i) {
        keyToAlphabet.push(keyToAlphabet[keyToInsert % keyLength]);
        keyToInsert += 1;
      }      
    }
    
    let encryptMessage = [];
    let encryptAlphabet = [];
    for (let i = 0; i < messageToAlphabet.length; i++) {
      if (messageToAlphabet[i] <= 0) {
        encryptAlphabet.push(keyToAlphabet[i]);
      } else {
        encryptAlphabet.push((messageToAlphabet[i] + keyToAlphabet[i] -1) % 26);
      }
    }

    encryptMessage = encryptAlphabet.map(letter => String.fromCharCode(letter+96).toUpperCase());
    
    return encryptMessage.join('');
  }
  decrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
