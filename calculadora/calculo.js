
const select = document.getElementById("select");
const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const resultado = document.getElementById("resultado");

// realiza o calculo de acordo com a operacao selecionada
function calcular() {
  const msgerro = "Favor entrar apenas números";

  console.log("select", select.value);
  console.log("num1", numero1.value);
  console.log("num2", numero2.value);

  if (!Number.isNaN(numero1.value) && !Number.isNaN(numero2.value)) {
    switch (select.value) {
      case "adicao":
        console.log(
          "num1 + num2",
          Number(numero1.value) + Number(numero2.value)
        );
        resultado.value = Number(numero1.value) + Number(numero2.value);
        break;
      case "subtracao":
        console.log(
          "num1 - num2",
          Number(numero1.value) - Number(numero2.value)
        );
        resultado.value = Number(numero1.value) - Number(numero2.value);
        break;
      case "divisao":
        if (Number(numero2.value) === 0) {
          window.alert("Divisao por 0 nao e permitida.");
        } else {
          console.log(
            "num1 / num2",
            Number(numero1.value) / Number(numero2.value)
          );
          resultado.value = Number(numero1.value) / Number(numero2.value);
        }
        break;
      case "multiplicacao":
        console.log(
          "num1 * num2",
          Number(numero1.value) * Number(numero2.value)
        );
        resultado.value = Number(numero1.value) * Number(numero2.value);
        break;
      default:
        console.log("nao foi");
    }
  } else {
    console.error(msgerro);
  }
}

// realiza a limpeza dos campos input
function resetar() {
  numero1.value = null;
  numero2.value = null;
  resultado.value = null;
}