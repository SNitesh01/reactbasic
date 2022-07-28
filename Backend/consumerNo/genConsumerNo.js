
const generateRandomNDigits = (n) => {
    return Math.floor(Math.random() * (9 * (Math.pow(10, n)))) + (Math.pow(10, n));
  }
  
  //generateRandomNDigits(5)
  //console.log(generateRandomNDigits(5))

module.exports= generateRandomNDigits;