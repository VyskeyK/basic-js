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
  const additionRepeatTimes = 'additionRepeatTimes';
  const additionSeparator = 'additionSeparator';
  
  let repeatedStr = '';
  const repeatTimesNum = options[repeatTimes] === undefined ? 1 : options[repeatTimes];
  const separatorStr = options[separator] === undefined ? '+' : options[separator];
  const additionSeparatorStr = options[additionSeparator] === undefined ? '|' : options[additionSeparator];
  const additionRepeatTimesNum = options[additionRepeatTimes] === undefined ? 1 : options[additionRepeatTimes];
  let additionStr = options[addition] === undefined ? '' : options[addition];
  let fullAdditionStr = '';
  
  for (let j = 0; j < additionRepeatTimesNum; j++) {
    if ( (j + 1) === additionRepeatTimesNum) {
      fullAdditionStr += additionStr;
    } else {
      fullAdditionStr += additionStr + additionSeparatorStr;
    }
  }


  if (repeatTimesNum === 1) return str + fullAdditionStr;

  for (let i = 0; i < repeatTimesNum; i++) {
    if ( (i + 1) === repeatTimesNum) {
      repeatedStr += str + fullAdditionStr;
    } else {
      repeatedStr += str + fullAdditionStr + separatorStr;
    }
  }
  
  return repeatedStr;
}

module.exports = {
  repeater
};
