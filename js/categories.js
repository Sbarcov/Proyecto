import { navbarComp } from "../components/navbar.js";
import { footerComp } from "../components/footer.js";
import { categoriesComponent } from "../components/categoriesComp.js"; 
import { getData, setData, updateCounter, removeElement} from "../components/localStorage.js";

let navContainer = document.querySelector('header')
let footerContainer = document.getElementById('footer')
let categoriesContainer = document.getElementById('cardElement')

const getUserData = (key) => {
    return JSON.parse(sessionStorage.getItem(key));
}


window.addEventListener('load', () => {

    const userInfo = getUserData('userData');

    if (userInfo) {

        navContainer.innerHTML = navbarComp;

        footerContainer.innerHTML = footerComp;

        let cartCounter = getData('counter');

        const quantityDisplay = navContainer.querySelector('#cart-counter');

        quantityDisplay.textContent = `(${cartCounter})`;

        fetch('https://fakestoreapi.com/products/categories').then(res => res.json()).then(json => {
        //fetch('../data/categoryTest.json').then(res => res.json()).then(json => {

            let colCounter = 0;
            let colDivider = '<div class="w-100"></div>';

            const cards = json.map(e => {

                let img = '../img/' + e + '.webp';

                colCounter = colCounter + 1;

                if (colCounter == 3){
                    colCounter = 0;
                    return categoriesContainer.innerHTML = categoriesComponent(img, e, colDivider)   
                }
                else{
                    return categoriesContainer.innerHTML = categoriesComponent(img, e, '')
                }

            }).join('')

            categoriesContainer.innerHTML = cards
        })

    }
    else {
        window.location.href = '../pages/login.html';
    }
})

categoriesContainer.addEventListener('click', function(event) {
    if (event.target.closest('.card')) {

        var card = event.target.closest('.card');
        var category = card.getAttribute('id');

        window.location.href = "../pages/productos.html?category=" + encodeURIComponent(category);
    }
});
