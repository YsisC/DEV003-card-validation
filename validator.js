const validator = {
  // ...
  isValid: function validateCard(numberCard) {
    // index par e impar
    let oddSum = 0;
    let evenSum = 0;

    // convertirlo en un array y en numero por que arroja un string
    let numToString = numberCard.toString().split("").map(Number);
    for (let i = 0; i < numToString.length; i++) {
      //la posicion del index es par
      if (i % 2 === 0) {
        //Cuando el resulta da mas de 9
        if (numToString[i] * 2 >= 10) {
          evenSum += numToString[i] * 2 - 9;
        } else {
          //Caundo el resultado da 9 o menos
          evenSum += numToString[i] * 2;
        }
      } else {
        //cuando la posicion  del index es impar
        oddSum += parseInt(numToString[i]);
      }
    }
    return (oddSum + evenSum) % 10 === 0;
  },
  maskify: function (info) {
    return info
      .split("")
      .map((letter, idx) => (idx < info.length - 4 ? "#" : letter))
      .join("");
  },
};

export default validator;
