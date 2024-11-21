import { navbarComp } from "../components/navbar.js";
import { footerComp } from "../components/footer.js";
import { modalComponent } from "../components/modal.js";
import { getData, setData, deleteData, removeElement, updateCounter } from "../components/localStorage.js";

let navContainer = document.querySelector('header')
let footerContainer = document.getElementById('footer')

let total = 0;
let productosEnCarro = [];
let cartModal;
const productosContainer = document.getElementById('productos');
const btnContainer = document.getElementById('btnContainer');
const cancelarCompra = document.getElementById('btnCancelar');

const modalContainer = document.getElementById('modalContainer');
let confirmar = document.getElementById('btnConfirmar');

const getUserData = (key) => {
    return JSON.parse(sessionStorage.getItem(key));
}

window.addEventListener('load', () => {

    const userInfo = getUserData('userData');

    if (userInfo) {

        navContainer.innerHTML = navbarComp;
        footerContainer.innerHTML = footerComp;        

        productosEnCarro = getData('itemsData')

        actualizarCarro();
    }
    else {
        window.location.href = './login.html';
    }
})

productosContainer.addEventListener('click', event => {

    const action = event.target.dataset.accion;

    if (action) {
        const prod = event.target.closest('.unit');

        const prodId = prod.id

        if (action === 'remove') {

            removerDelCarro(prodId);
            actualizarCarro();

        }
    }
});


cancelarCompra.addEventListener('click', event => {

            deleteData('itemsData');
            setData('counter', 0)
            window.alert("Compra cancelada");
            productosEnCarro = [];
            actualizarCarro();
});

confirmar.addEventListener('click', () => {

    total = 0

    productosEnCarro.forEach( function(producto, index) {
        total += (producto.price * producto.quantity);
    });
    
    total = total.toFixed(2);
    modalContainer.innerHTML = modalComponent(productosEnCarro, total);
    cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    cartModal.show();
});

modalContainer.addEventListener('click', event => {

    const action = event.target.dataset.accion;

    if (action) {
        if (action === 'pagar') {
            deleteData('itemsData');
            setData('counter', 0)
            window.alert("Gracias por su compra");
            productosEnCarro = [];
            actualizarCarro();
            cartModal.hide();
        }
        else if (action === 'cerrar'){
            cartModal.hide();
        }
    }

});

function removerDelCarro(id) {

    total = 0

    let productosEnCarro = getData('itemsData');

    if (productosEnCarro.length !== 0) {
        
        productosEnCarro = removeElement(productosEnCarro, id)

        setData('itemsData', productosEnCarro);
        let newCounter = updateCounter(productosEnCarro)
        setData('counter', newCounter);
    }
}

function actualizarCarro() {
    productosContainer.innerHTML = '';
    let productosEnCarro = getData('itemsData');
    if (productosEnCarro.length > 0) {
        productosEnCarro.forEach((producto, index) => {
            total += (producto.price * producto.quantity);
            productosContainer.innerHTML += `
            <div class="unit" id="${producto.id}">
                <div class="d-flex justify-content-between align-items-center mt-1">
                <div class="d-flex flex-column">
                    <div>
                        <p style="margin: 0; display: inline; font-size:120%; color:LightBlue;" class="me-3">Producto:</p>
                        <p style="margin: 0; display: inline; font-size:120%">${producto.title}</p>
                    </div>
                    <div>
                        <p style="margin: 0; display: inline; font-size:120%; color:LightBlue;" class="me-3">Precio:</p>
                        <p style="margin: 0; display: inline; font-size:120%">$${producto.price}</p>
                    </div>
                    <div>
                        <p style="margin: 0; display: inline; font-size:120%; color:LightBlue;" class="me-3">Cantidad:</p>
                        <p style="margin: 0; display: inline; font-size:120%">${producto.quantity}</p>
                    </div>
                </div>
                    <button class="btn btn-danger btn-sm" data-accion="remove">Eliminar</button>
                </div>
                <hr class="bg-secondary border-2 border-top border-secondary" />
            </div>
            `;
        });
    } else {
        productosContainer.innerHTML = '<p style="margin: 0; display: inline; font-size:120%; color:LightBlue;" class="me-3">No hay productos en el carro</p>';
        btnContainer.innerHTML = ``;
        total = 0
    }
    total = total.toFixed(2);
    document.getElementById('total').innerHTML = `Total: $${total}`;
}