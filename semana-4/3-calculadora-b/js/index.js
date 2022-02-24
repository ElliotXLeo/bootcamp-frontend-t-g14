'use strict';
const documentReady = () => {
  const calculador = document.getElementById('calculador');

  const calcular = (e) => {
    e.preventDefault();

    const numero1 = parseInt(document.querySelector('#numero1').value);
    const operador = document.querySelector('#operador').value;
    const numero2 = parseInt(document.querySelector('#numero2').value);
    const contenedorError = document.querySelector('#contenedorError');
    const contenedorResultado = document.querySelector('#contenedorResultado');
    if (isNaN(numero1) || isNaN(numero2)) {
      contenedorError.innerHTML = 'Completar formulario';
    } else {
      let resultado;
      contenedorError.innerHTML = '';
      switch (operador) {
        case '+':
          resultado = numero1 + numero2;
          break;
        case '-':
          resultado = numero1 - numero2;
          break;
        case '*':
          resultado = numero1 * numero2;
          break;
        case '/':
          resultado = numero1 / numero2;
          break;
        default:
          break;
      };
      contenedorResultado.innerHTML = resultado;
    }
  };

  calculador.addEventListener('click', calcular);
}
document.addEventListener('DOMContentLoaded', documentReady);