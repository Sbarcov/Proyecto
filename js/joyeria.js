import { navbarComp } from "../components/navbar.js";

let navContainer = document.querySelector('header')

window.addEventListener('load', ()=>{
    navContainer.innerHTML = navbarComp
})