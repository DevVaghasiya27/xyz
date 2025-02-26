const prompt = require ("prompt-sync")({sigint: true})

class Password {
    constructor() {
      console.log("Welcome to Password Generator")
    }

// Fisher-Yates Shuffle implementation
shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

    generatePassword(len) {
      let chars = "abcdefghijklmnopqrstuvwxyz"
      let numbers = "1234567890"
      let special = "!@#$%^&*()"
      if (len < 3) {
        console.log("Your password should be atleast 3 characters long")
      }
      else {
        let i = 0
        let pass = ""
        while (i < len) {
      
          pass += chars[Math.floor(Math.random() * chars.length)]
          pass += numbers[Math.floor(Math.random() * numbers.length)]
          pass += special[Math.floor(Math.random() * special.length)]
          i += 3
        }
      pass = this.shuffle(pass.split('')).join('');
        pass = pass.substr(0, len)
        return pass
      }
    }
  }
  
  let p = new Password()
  let n = prompt("enter length of password: ")
  n = Number.parseInt(n)
  console.log(p.generatePassword(n))  