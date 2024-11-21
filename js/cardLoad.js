import { navbarComp } from "../components/navbar.js";
import { footerComp } from "../components/footer.js";
import { cardComponent } from "../components/card.js";
import { getData, setData, updateCounter, removeElement} from "../components/localStorage.js";

let navContainer = document.querySelector('header')
let footerContainer = document.getElementById('footer')
let cardContainer = document.getElementById('cardElement')
let containerId = document.getElementsByClassName('container-sm')[0].id

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

        fetch('https://fakestoreapi.com/products').then(res => res.json()).then(json => {

            let filteredItems = []

            if (containerId == 'destacados') {

                for (var i = 0; i < 6; i++) {
                    filteredItems[i] = json[i * 2] // muestra multiples elementos de distintas categorias
                }
            }
            else {
                filteredItems = json.filter(e => e.category == containerId);
            }

            let colCounter = 0;
            let colDivider = '<div class="w-100"></div>';

            const cards = filteredItems.map(e => {
                let counter = 0;              
                const res = getData('itemsData');

                for (let i = 0; i < res.length; i++) {
                    if (res[i].id == e.id) {
                        counter = res[i].quantity;
                        break;
                    }
                }
                
                colCounter = colCounter + 1;

                if (colCounter == 3){
                    colCounter = 0;
                    return cardContainer.innerHTML = cardComponent(e.image, e.title, e.description, e.price, e.id, counter, colDivider)   
                }
                else{
                    return cardContainer.innerHTML = cardComponent(e.image, e.title, e.description, e.price, e.id, counter, '')
                }

            }).join('')

            cardContainer.innerHTML = cards
        })

    }
    else {
        window.location.href = '../pages/login.html';
    }
})

cardContainer.addEventListener('click', event => {

    const action = event.target.dataset.accion;

    if (action) {
        const cardElement = event.target.closest('.card');

        const cardData = {
            title: cardElement.querySelector('.card-title').textContent,
            price: cardElement.querySelector('.card-price').textContent,
            quantity: 1,
            id: cardElement.id
        }

        if (action === 'add') {

            addItem(cardData);
            cardElement.querySelector('.counter').textContent++

        } else if (action === 'remove') {

            removeItem(cardData);
            if(cardElement.querySelector('.counter').textContent > 0){
                cardElement.querySelector('.counter').textContent--
            }

        }
    }
});

const addItem = cardData => {

    const res = getData('itemsData');

    if (res.length == 0) {
        res.push(cardData)
    }
    else {
        let aux = res.findIndex(({ id }) => id === cardData.id);
        if (aux != -1) {
            res[aux].quantity = res[aux].quantity + 1
        } else {
            res.push(cardData)
        }
    }
    setData('itemsData', res);
    let newCounter = updateCounter(res)
    setData('counter', newCounter);
    const quantityDisplay = navContainer.querySelector('#cart-counter');
    quantityDisplay.textContent = `(${newCounter})`;
};

const removeItem = cardData => {
    let res = getData('itemsData');

    if (res.length !== 0) {
        
        res = removeElement(res, cardData.id)

        setData('itemsData', res);
        let newCounter = updateCounter(res)
        setData('counter', newCounter);
        const quantityDisplay = navContainer.querySelector('#cart-counter');
        quantityDisplay.textContent = `(${newCounter})`;

    }
};
