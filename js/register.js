// Redireccionar a traves del form sin manejar el request del metodo post me generaba un error 405
// Este script evita el envio del formulario, se usará provisoriamente hasta darle lógica al register 

import { footerComp } from "../components/footer.js";

let footerContainer = document.getElementById('footer')

window.addEventListener('load', ()=>{
    footerContainer.innerHTML = footerComp;  
})

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = './index.html';
});

document.getElementById('btnLogin').addEventListener('click', function() {
    window.location.href = '../pages/login.html';
});
