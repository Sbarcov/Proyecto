import { navbarComp } from "../components/navbar.js";
import { cardComponent } from "../components/card.js";
import { joyeriaData} from "../data/cardData.js";

let navContainer = document.querySelector('header')
let cardContainer = document.getElementById('cardElement')

window.addEventListener('load', ()=>{
    navContainer.innerHTML = navbarComp
})

window.addEventListener('load', () =>{
    const cards = joyeriaData.map(e =>{
        return cardContainer.innerHTML = cardComponent(e.img, e.title, e.desc, e.price)
    }).join('')

    cardContainer.innerHTML = cards

})