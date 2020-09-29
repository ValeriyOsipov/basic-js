module.exports = function getSeason(date){
  let result;
  if (date == undefined) {
      return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date)) {
      throw "Error";
  }
  switch(date.getMonth()) {
      case 11:
      case 0:
      case 1:
          result = "winter";
          break;
      case 2:
      case 3:
      case 4:
          result = "spring";
          break;
      case 5:
      case 6:
      case 7:
          result = "summer";
          break;
      case 8:
      case 9:
      case 10:
          result = "autumn";
          break;
  }
  return result;
}