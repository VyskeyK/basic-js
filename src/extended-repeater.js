const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeatTimes = 'repeatTimes';
  const separator = 'separator';

  const separatorStr = options[separator] === undefined ? '+' : options[separator];
  let repeatedStr = '';
  
  for (let i = 0; i < options[repeatTimes]; i++) {
    if ( (i + 1) === options[repeatTimes]) {
      repeatedStr += str;
    } else {
      repeatedStr += str + separatorStr;
    }
  }
  
  return repeatedStr;
}

module.exports = {
  repeater
};
