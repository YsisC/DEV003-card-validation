import validator from "./validator.js";

// console.log(validator);

//Elementos del DOM
const numberCard = document.getElementById("ccNumber");
const ccName = document.getElementById("ccName").value;
const btnCheck = document.querySelector(".check");

const inps= document.getElementsByTagName('input');
const errorNumber = document.getElementById("cardNumberError");
const cardDataContainer = document.getElementById("mainData");
const cardResultContainer = document.getElementById("mainResult");
const cardResultParap = document.getElementById("resultCard");


//funcion de solo numeros numeros en el numero de tarjeta
numberCard.addEventListener("input", () => {
  const regExp = /[A-z]/g;
  if (regExp.test(numberCard.value)) {
    errorNumber.textContent = "Error de formato, solo numeros";
    errorNumber.style.color = "red";
  } else {
    errorNumber.textContent = "Ok!";
    errorNumber.style.color = "green";
  }
});

//Funcion ocultar primer containter y mostrar el segundo container
function ocultar() {
  cardDataContainer.style.display = "none";
  cardResultContainer.style.display = "block";
}
// chequear que el valor de la tarjeta sea valido o no. Y arroje un mensaje.

btnCheck.addEventListener("click", function () {

  // if (InputEvent.value === "") 
  for (let k = 0; k < inps.length; k++) {
    if (inps[k].value === ''|| inps[k].value === null) {
        
      return alert(`Debe Completar todos los campos `);
    } 
    else  {
      

      //El mensaje que arroja si es verdadero o falso
      const message = validator.isValid(numberCard.value)
        ? `${ccName} tu tarjeta de credito ${validator.maskify(
          numberCard.value
        )} es valida ☑`
        : `Lo sentimos ${ccName} no es valida tu tarjeta ${validator.maskify(
          numberCard.value
        )} ✖`;

      //La respuesta en el documento
      // Ocultar el primer contenedor y mostrar el segundo contenedor con las respuestas
     
      ocultar();
      cardResultParap.textContent = message;
      // replace();
    } 
  }
})

