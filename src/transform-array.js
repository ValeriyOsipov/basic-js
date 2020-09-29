module.exports = function transform(arr){
  if (!(arr instanceof Array)) {
      throw "Error";
  }
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "--discard-next") {
          if (i !== arr.length - 1) {
              i++;
          }
      } else if (arr[i] === "--double-next") {
          if (i !== arr.length - 1) {
              answer.push(arr[i + 1]);
          }
      } else if (arr[i] === "--discard-prev") {
          if (i !== 0) {
              answer.pop();
          }
      } else if (arr[i] === "--double-prev") {
          if (i !== 0) {
              answer.push(arr[i+1]);
          }
      } else {
          answer.push(arr[i]);
      }

  }
  return answer;
}