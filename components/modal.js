export const modalComponent = (items, total) => {
    return `
    <div class="modal fade" id="cartModal" tabindex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="cartModalLabel">Confirmar Compra</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div id="cartItems">
                    ${
                        items.map(e => {
                            return `
                            <div class="cart-item mt-3">${e.title} - $${e.price} - (x${e.quantity})</div>
                            `
                        }).join('')
                    }
                    </div>
                    <div class="cart-total mt-3 d-flex flex-row-reverse">
                        Total: ${total}
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" data-accion="cerrar">Cerrar</button>
                    <button type="button" class="btn btn-primary" data-accion="pagar" >Pagar</button>
                </div>
            </div>
        </div>
    </div>
    `
}