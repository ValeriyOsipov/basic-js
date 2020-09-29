module.exports = function repeater(str, options) {
  if (typeof(str) !== "string") {
      str = str.toString();
  }
  if (typeof(options.addition) !== "string") {
      options.addition = options.addition.toString();
  }
  if (options.repeatTimes === "" || options.repeatTimes === undefined) {
      options.repeatTimes = 0;
  }
  if (options.additionRepeatTimes === "" || options.additionRepeatTimes === undefined) {
      options.additionRepeatTimes = 0;
  }
  if (options.separator === undefined) {
      options.separator = "+";
  }
  if (options.additionSeparator === undefined) {
      options.additionSeparator = "|";
  }
  let answer = "";
  let addstr = "";
  let answerArr = [];
  let addstrArr = [];
  for (let i = 0; i < options.additionRepeatTimes; i++) {
      addstrArr.push(options.addition);
  }
  addstr = addstrArr.join(options.additionSeparator);
  for (let j = 0; j < options.repeatTimes; j++) {
      answerArr.push(str + addstr);
  }
  answer = answerArr.join(options.separator);
  return answer;
}