import { footerComp } from "../components/footer.js";

let footerContainer = document.getElementById('footer')

window.addEventListener('load', ()=>{
    sessionStorage.removeItem('userData');
    footerContainer.innerHTML = footerComp;  
})

document.getElementById('btnRegistro').addEventListener('click', function() {
    window.location.href = '../pages/register.html';
});

document.getElementById('loginForm').addEventListener('submit', (e) =>{
    e.preventDefault();
    let userEmail = document.getElementById('email').value;
    let userPass = document.getElementById('password').value;

    fetch('../data/users.json').then(res => res.json()).then(users =>{
        const user = users.find(e => e.email == userEmail && e.password == userPass);

        if(user) {
            sessionStorage.setItem('userData', JSON.stringify(user));
            window.location.href = '../index.html';
        } else {
            window.alert("Error, el usuario no fue encontrado");
        }
    });
});