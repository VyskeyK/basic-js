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
  const addition = 'addition';
  const additionRepeatTimes = options['additionRepeatTimes'];

  const repeatTimesNum = options[repeatTimes] === undefined ? 1 : options[repeatTimes];
  const separatorStr = options[separator] === undefined ? '+' : options[separator];
  let additionStr = options[addition] === undefined ? '' : options[addition];
  let repeatedStr = '';

  if (additionRepeatTimes !== undefined) additionStr.repeat(additionRepeatTimes);

  if (repeatTimesNum === 1) return str + additionStr;
  
  for (let i = 0; i < repeatTimesNum; i++) {
    if ( (i + 1) === repeatTimesNum) {
      repeatedStr += str + additionStr;
    } else {
      repeatedStr += str + additionStr + separatorStr;
    }
  }
  
  return repeatedStr;
}

module.exports = {
  repeater
};
