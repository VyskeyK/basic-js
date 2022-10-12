const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity ) {
  if (typeof sampleActivity !== 'string') return false;

  sampleActivityNum = +sampleActivity;

  if (typeof sampleActivityNum === 'undefined' || isNaN(sampleActivityNum) || sampleActivityNum === 0) return false;

  const lnTwo = 0.693;
  const k = lnTwo / HALF_LIFE_PERIOD;

  let result = 0;

  result = Math.log( MODERN_ACTIVITY / sampleActivityNum) / k;

  return Math.floor(result);
}

module.exports = {
  dateSample
};
