class VigenereCipheringMachine{
  constructor(type) {
      this.encType = type;
  }
  keyToFull(message, key) {
      let k = parseInt(message.length / key.length);
      let m = message.length % key.length;
      let kKey = "";
      for (let i = 0; i < k; i++) {
          kKey = kKey + key;
      }
      key = kKey + key.substring(0,m);
      for (let ii = 0; ii < message.length; ii++){
          if (!(/^[a-zA-Z]{1}$/.test(message[ii]))) { 
              key = key.slice(0,ii) + message[ii] + key.slice(ii);
              key = key.slice(0,message.length);
          }
      }
      return key;
  }
  encrypt(message, key) {
      if (message === undefined || key === undefined) {
          throw "Error";
      }
      key = this.keyToFull(message, key);
      let answer = "";
      let symbolN;
      message = message.toUpperCase();
      key = key.toUpperCase();
      for (let j = 0; j < message.length; j++) {
          if (/^[a-zA-Z]{1}$/.test(message[j])) { 
              symbolN = (message.charCodeAt(j) + key.charCodeAt(j) - 130) % 26 + 65;
              answer = answer + String.fromCharCode(symbolN);
          } else {
              answer = answer + message[j];
          }
      }
      if (this.encType === false) {
          return answer.split("").reverse().join("");
      } else {
          return answer;
      }
  }
  decrypt(encryptedMessage, key) {
      if (encryptedMessage === undefined || key === undefined) {
          throw "Error";
      }
      key = this.keyToFull(encryptedMessage, key);
      let answer = "";
      let symbolN;
      encryptedMessage = encryptedMessage.toUpperCase();
      key = key.toUpperCase();
      for (let j = 0; j < encryptedMessage.length; j++) {
          if (/^[a-zA-Z]{1}$/.test(encryptedMessage[j])) { 
              symbolN = (encryptedMessage.charCodeAt(j) - key.charCodeAt(j) + 26) % 26 + 65;
              answer = answer + String.fromCharCode(symbolN);
          } else {
              answer = answer + encryptedMessage[j];
          }
      }
      if (this.encType === false) {
          return answer.split("").reverse().join("");
      } else {
          return answer;
      }
  }
}

module.exports = VigenereCipheringMachine;
