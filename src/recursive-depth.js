module.exports = class DepthCalculator {
  calculateDepth(array, level = 0, arrmax = []) {
      if (array[0] === undefined){
          arrmax.push(level + 1);
      } else {    
          for (let element of array) {
              if (element instanceof Array) {
                      this.calculateDepth(element, level + 1, arrmax);
              } else {
                  arrmax.push(level + 1);
              }
          }
      }
      return(arrmax.sort(function(a, b){return b - a})[0]);       
  }
}