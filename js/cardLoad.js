import { navbarComp } from "../components/navbar.js";
import { cardComponent } from "../components/card.js";

let navContainer = document.querySelector('header') // Se anexo el navbar a este script

let cardContainer = document.getElementById('cardElement')
let containerId = document.getElementsByClassName('container-sm')[0].id

const getUserData = (key) => {
    return JSON.parse(sessionStorage.getItem(key));
}


window.addEventListener('load', ()=>{

    const userInfo = getUserData('userData');

    if (userInfo){

        navContainer.innerHTML = navbarComp;
        
        fetch('https://fakestoreapi.com/products').then(res => res.json()).then(json =>{

            let filteredItems = []
        
            if(containerId == 'destacados') {
        
                for (var i = 0; i < 6; i++) {
                    filteredItems[i] = json[i*2]
                  }
        
            }
            else {
        
                filteredItems = json.filter(e => e.category == containerId);
                
            }
        
            const cards = filteredItems.map(e => {
                return cardContainer.innerHTML = cardComponent(e.image, e.title, e.description, e.price)
            }).join('')
        
            cardContainer.innerHTML = cards
        
        }) 
    }
    else
    {
        window.location.href = './login.html';
    }
})