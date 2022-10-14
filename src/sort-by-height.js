const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let nonHeightPos = [];
  let heightArr = [];
  
  arr.forEach( (item, i) => { 
    if (item === -1) 
      nonHeightPos.push(i) 
  });
  
  arr.forEach( (item) => { if (item !== -1) heightArr.push(item)});
  
  heightArr.sort( (a,b) => a - b);
  
  for (let i = 0; i < nonHeightPos.length; i++) {
    heightArr.splice(nonHeightPos[i], 0, -1);
  }

  return heightArr;
}

module.exports = {
  sortByHeight
};
