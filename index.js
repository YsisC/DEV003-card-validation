import validator from "./validator.js";

// console.log(validator);

//Elementos del DOM
const numberCard = document.getElementById("ccNumber");
const ccName = document.getElementById("ccName");
const ccDate = document.getElementById("ccDate");
const ccV = document.getElementById("ccV");
const btnCheck = document.querySelector(".check");
const btnVolver = document.querySelector(".volver");

const inps= document.querySelectorAll('.form-input');
const errorNumber = document.getElementById("cardNumberError");
const cardDataContainer = document.getElementById("mainData");
const cardResultContainer = document.getElementById("mainResult");
const cardResultParap = document.getElementById("resultCard");


//funcion de solo numeros numeros en el numero de tarjeta
numberCard.addEventListener("input", function ()  {
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
function mostrar() {
  cardDataContainer.style.display ="flex";
  cardResultContainer.style.display = "none";
}

const continueShow = true;
continueShow;

// chequear que el valor de la tarjeta sea valido o no. Y arroje un mensaje.
btnCheck.addEventListener("click", function () {


  if (ccName.value === ''|| numberCard.value==='' || ccDate.value===''|| ccV.value==='') {
    alert(`Debe Completar todos los campos  `);
    return false
  } 
  else   {
      
    //El mensaje que arroja si es verdadero o falso
    const message = validator.isValid(numberCard.value)
      ? `${ccName.value} tu tarjeta de credito  ${validator.maskify(
        numberCard.value
      )} es valida ☑`
      : `Lo sentimos ${ccName.value} no es valida tu tarjeta 
         ${validator.maskify(
    numberCard.value
  )} ✖`;
          
    //La respuesta en el documento
    // Ocultar el primer contenedor y mostrar el segundo contenedor con las respuestas
     
    ocultar();
    cardResultParap.textContent = message;
    // replace();
    const btnMessage = validator.isValid(numberCard.value)?btnVolver.style.display = 'none':btnVolver.textContent=`Volver a la pagina anterior`;
    btnMessage;
  } 
}
)

btnVolver.addEventListener('click', function(){

  mostrar();
})