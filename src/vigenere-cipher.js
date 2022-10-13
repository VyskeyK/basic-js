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
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');
    
    const messageArr = message.toLowerCase().split('')
    const messageToAlphabet = messageArr.map(letter => letter.charCodeAt(0) - 96);
    const keyArr = key.toLowerCase().split('');
    const keyToAlphabet = keyArr.map(letter => letter.charCodeAt(0) - 96);
    const keyLength = keyArr.length;
    
    let keyToInsert = 0;
    for (let i = 0; i < messageToAlphabet.length; i ++) {
      if (messageToAlphabet[i] <0 || messageToAlphabet[i] > 26) {
        keyToAlphabet.splice(i, 0, messageToAlphabet[i]);
      } else if (keyToAlphabet.length <= i) {
        keyToAlphabet.push(keyToAlphabet[keyToInsert % keyLength]);
        keyToInsert += 1;
      }      
    }
    
    let encryptMessage = [];
    let encryptAlphabet = [];
    for (let i = 0; i < messageToAlphabet.length; i++) {
      if ((messageToAlphabet[i] <= 0 || messageToAlphabet[i] > 26) && (keyToAlphabet[i] <= 0 || keyToAlphabet[i] > 26)) {
        encryptAlphabet.push(keyToAlphabet[i]);
      } else {
        if (messageToAlphabet[i] + keyToAlphabet[i] === 27) {
          encryptAlphabet.push((messageToAlphabet[i] + keyToAlphabet[i]-1) % 27);          
        }
        else {
          encryptAlphabet.push((messageToAlphabet[i] + keyToAlphabet[i]-1) % 26);
        }
      }
    }
    
    encryptMessage = encryptAlphabet.map(letter => String.fromCharCode(letter+96).toUpperCase());
    
    return this.direct ? encryptMessage.join('') : encryptMessage.reverse().join('');
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');

    const messageArr = message.toLowerCase().split('')
    const messageToAlphabet = messageArr.map(letter => letter.charCodeAt(0) - 96);
    const keyArr = key.toLowerCase().split('');
    const keyToAlphabetArr = keyArr.map(letter => letter.charCodeAt(0) - 96);
    const keyLength = keyArr.length;
    
    let keyToInsert = 0;
    let keyToAlphabet = [];
    for (let i = 0; i < messageToAlphabet.length; i ++) {
      if (messageToAlphabet[i] <=0 || messageToAlphabet[i] > 26 ) {
        keyToAlphabet.splice(i, 0, messageToAlphabet[i]);
      } else if (keyToAlphabet.length <= i) {
        keyToAlphabet.push(keyToAlphabetArr[keyToInsert % keyLength]);
        keyToInsert += 1;
      }      
    }
    console.log(messageToAlphabet);
    console.log(keyToAlphabet);
    
    let decryptMessage = [];
    let decryptAlphabet = [];
    for (let i = 0; i < messageToAlphabet.length; i++) {
      if (messageToAlphabet[i] <= 0 || messageToAlphabet[i] > 26) {
        decryptAlphabet.push(keyToAlphabet[i]);
      } else {
        if (messageToAlphabet[i] >= keyToAlphabet[i]) {
          if (messageToAlphabet[i] - keyToAlphabet[i] === 25) {
            decryptAlphabet.push((messageToAlphabet[i] - keyToAlphabet[i]+1) % 27);
          } else {
            decryptAlphabet.push((messageToAlphabet[i] - keyToAlphabet[i]+1) % 27);
          }
        }
        else {
          decryptAlphabet.push((26 -(keyToAlphabet[i] - messageToAlphabet[i]-1)) % 27);
          console.log((26 -(keyToAlphabet[i] - messageToAlphabet[i]-1)));
        }
      }
    }
    
    decryptMessage = decryptAlphabet.map(letter => String.fromCharCode(letter+96).toUpperCase());
    
    return this.direct ? decryptMessage.join('') : decryptMessage.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
