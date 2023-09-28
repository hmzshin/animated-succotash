const { degisim } = require("./degisim.js");

let yazi = "merhaba benim adım Hamza";
let yaziArr = [...yazi];
for (let i = 0; i < yaziArr.length; i++) {
  for (let j = 0; j < degisim.length; j++) {
    if (yaziArr[i] === degisim[j].letter) {
      yaziArr[i] = degisim[j].changeWith;
    }
  }
}
ekranaYazdir = yaziArr.join("");
console.log(ekranaYazdir);
