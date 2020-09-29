module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) {
      return false;  
  }
  let isWrong = true;
  let firstLetters = [];
  for (let i = 0; i < members.length; i++) {
      if (typeof(members[i]) === "string"){
          firstLetters.push(members[i].trim().slice(0,1).toUpperCase());
          isWrong = false;
      }
  }
  let dreamTeamName = firstLetters.sort().join("");
  if (isWrong) {
      return false;
  }
  return dreamTeamName;
}