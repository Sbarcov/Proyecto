import { navbarComp } from "../components/navbar.js";
import { cardComponent } from "../components/card.js";
import { prendasData} from "../data/cardData.js";

let navContainer = document.querySelector('header')
let cardContainer = document.getElementById('cardElement')

window.addEventListener('load', ()=>{
    navContainer.innerHTML = navbarComp
})

window.addEventListener('load', () =>{
    const cards = prendasData.map(e =>{
        return cardContainer.innerHTML = cardComponent(e.img, e.title, e.desc, e.price)
    }).join('')

    cardContainer.innerHTML = cards

})