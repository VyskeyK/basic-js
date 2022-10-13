const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const discardNextControl = '--discard-next';
  const discardPrevControl = '--discard-prev';
  const doubleNextControl = '--double-next';
  const doublePrevControl = '--double-prev';
  const controls = [discardNextControl, discardPrevControl, doubleNextControl, doublePrevControl];

  if (!(arr instanceof Array)) throw new Error("\'arr\' parameter must be an instance of the Array!");
  
  for (let i = 0; i < arr.length; i++) {
    if (controls.includes(arr[i])) {
      if (arr[i] === discardNextControl) {
        arr[i] = undefined;
        arr[i + 1] = undefined;
      }
      if (arr[i] === discardPrevControl) {
        arr[i] = undefined;
        arr[i - 1] = undefined;
      }
      if (arr[i] === doubleNextControl) {
        arr[i] = arr[i + 1];
      }
      if (arr[i] === doublePrevControl) {
        arr[i] = arr[i - 1];
      }
    }
  }
  
  
  return arr.filter( (item) => item !== undefined);
}

module.exports = {
  transform
};
