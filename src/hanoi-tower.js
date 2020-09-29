module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
  let minTurns = Math.pow(2, diskNumber) - 1;
  return {turns: minTurns, seconds: Math.floor(minTurns * 3600 / turnsSpeed)}
}