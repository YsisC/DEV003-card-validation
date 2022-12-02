import validator from "./validator.js";

// console.log(validator);

//funcion de solo numeros numeros en el numero de tarjeta
const numberCard = document.getElementById("ccNumber");
const errorNumber = document.getElementById("cardNumberError");
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

// chequear que el valor de la tarjeta sea valido o no. Y arroje un mensaje.
const btnCheck = document.querySelector(".check");

btnCheck.addEventListener("click", function () {
  const cardResultContainer = document.getElementById("mainValidator");
  const cardDataContainer = document.getElementById("mainContainer");
  const ccName = document.getElementById("ccName").value;
  const cardResultParap = document.getElementById("resultCard");
  // if (InputEvent.value === "") {
  // }n
  //El mensaje que arroja si es verdadero o falso
  const message = validator.isValid(numberCard.value)
    ? `${ccName} tu tarjeta de credito ${validator.maskify(
      numberCard.value
    )} es valida ☑`
    : `Lo sentimos ${ccName} no es valida tu tarjeta ${validator.maskify(
      numberCard.value
    )} ✖`;

  //La respuesta en el documento
  console.log(message);
  // Ocultar el primer contenedor y mostrar el segundo contenedor con las respuestas
  function ocultar() {
    cardDataContainer.style.display = "none";
    cardResultContainer.style.display = "block";

    // main.classList.toogle("inactivo");
  }
  ocultar();
  cardResultParap.textContent = message;
  // replace();
});
