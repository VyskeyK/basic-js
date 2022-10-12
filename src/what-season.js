const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!(date instanceof Date)) return 'Unable to determine the time of year!';

  const month = date.getMonth();
  const seasonsList = [
    {winter: [0, 1, 11]},
    {spring: [2, 3, 4]},
    {summer: [5, 6, 7]},
    {fall: [8, 9, 10]}
  ]
  let season = '';

  seasonsList.forEach(function(item) {
    for (let key in item) {
      if (item[key].includes(month)) season = key;
    }
  })

  return season;
}

module.exports = {
  getSeason
};
