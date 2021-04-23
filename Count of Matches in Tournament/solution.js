/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  let noOfMatchesPlayed = 0;
  let teamsRemaining = n;
  while (teamsRemaining > 1) {
    if (teamsRemaining % 2 === 0) {
      noOfMatchesPlayed += Math.floor(teamsRemaining / 2);
      teamsRemaining = Math.floor(teamsRemaining / 2);
    } else {
      noOfMatchesPlayed += Math.floor((teamsRemaining - 1) / 2);
      teamsRemaining = Math.floor((teamsRemaining - 1) / 2) + 1;
    }
  }
  return noOfMatchesPlayed;
};
