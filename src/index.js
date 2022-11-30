import validator from "./validator.js";

// console.log(validator);

//funcion de solo numeros numeros

// function Card(event, el) {
//   //Validar nombre
//   let val = el.value; //Valor de la caja de texto
//   let pos = val.slice(0, el.selectionStart).length;

//   let out = '';//Salida
//   let filtro = '1234567890';
//   let v = 0;//Contador de caracteres validos

//   //Filtar solo los numeros
//   for (let j =0; i<val.length; j++){
//      if (filtro.indexOf(val.charAt(j)) != -1){
//      v++;
//      out += val.charAt(i);
//      //Agregando un espacio cada 4 caracteres
//      if((v==4) || (v==8) || (v==12))
//          out+=' ';
//    }

// }

//Aplicar algoritmo de luhn
function validateCard(numberCard) {
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
}

// chequear que el valor de la tarjeta sea valido o no. Y arroje un mensaje.
const btnCheck = document.querySelector(".check");

btnCheck.addEventListener("click", function () {
  const resultContainer = document.getElementById("mainValidator");
  const ccName = document.getElementById("ccName").value;
  const numberCard = document.getElementById("ccNumber");
  //El mensaje que arroja si es verdadero o falso
  const message = validateCard(numberCard.value)
    ? `${ccName} tu tarjeta de credito ${numberCard.value} es valida ☑`
    : `Lo sentimos ${ccName} no es valida tu tarjeta ${numberCard.value} ✖`;

  //La respuesta en el documento
  console.log(message);
  // Ocultar el primer contenedor y mostrar el segundo contenedor con las respuestas
  function ocultar() {
    document.getElementById("mainContainer").style.display = "none";
    document.getElementById("mainValidator").style.display = "block";

    // main.classList.toogle("inactivo");
  }
  ocultar();
  resultContainer.textContent = message;
  // replace();
});
