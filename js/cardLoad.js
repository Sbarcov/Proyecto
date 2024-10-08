import { navbarComp } from "../components/navbar.js";
import { cardComponent } from "../components/card.js";
import { data} from "../data/cardData.js";

let navContainer = document.querySelector('header') // Se anexo el navbar a este script

let cardContainer = document.getElementById('cardElement')
let containerId = document.getElementsByClassName('container-sm')[0].id

window.addEventListener('load', ()=>{
    navContainer.innerHTML = navbarComp
})

window.addEventListener('load', () =>{

    const category = data.filter(e => {
        return e.category == containerId;
    });

    const cards = category.map(e =>{
        return cardContainer.innerHTML = cardComponent(e.img, e.title, e.desc, e.price)
    }).join('')

    cardContainer.innerHTML = cards


})