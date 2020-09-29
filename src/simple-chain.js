let chainMaker = {
  chain: "",
  chainArr: [],
  getLength: function() {
      return this.chainArr.length;
  },
  addLink: function(value) {
      this.chainArr.push("(" + value + ")");
      return this;
  },
  removeLink: function(position) {
      let indexArr = [];
      for (let i = 0; i < this.chainArr.length; i++) {
          indexArr.push(i + 1);
      };
      if (position in indexArr) {
          this.chainArr.splice(position - 1, 1);
          return this;
      } else {
          this.chainArr = [];
          throw "Error";
      }
  },
  reverseChain: function() {
      this.chainArr.reverse();
      return this;
  },
  finishChain : function() {
      this.chain = this.chainArr.join("~~");
      this.chainArr = [];
      return this.chain;
  }
}

module.exports = chainMaker;
