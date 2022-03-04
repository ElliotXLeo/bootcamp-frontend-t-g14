'use strict';
const documentReady = () => {
  const mainTitle = document.getElementById('mainTitle');
  const buttonYes = window.document.getElementById('buttonYes');
  const botonNo = document.querySelector('#buttonNo');
  
  const zomosNobios = () => {
    alert('💞NoW ZoMos NoBioS💞');
    alert('😱NuesTra VoDa Is TomorroW😱');
    location.href = 'https://www.youtube.com/watch?v=QcQ-PxUtgaE';
  }

  const ebitarKCRombaMyBobo = () => {
    botonNo.style.position = 'absolute';
    botonNo.style.top = (Math.random() * window.innerHeight) + 'px';
    botonNo.style.left = (Math.random() * window.innerWidth) + 'px';
  }
  
  const nombre = prompt('¿KoMor Te Iamas BB?');
  mainTitle.innerHTML += `${nombre} ❤`;
  buttonYes.addEventListener('click', zomosNobios);
  botonNo.addEventListener('mouseover', ebitarKCRombaMyBobo);
}

document.addEventListener('DOMContentLoaded', documentReady);