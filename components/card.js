export const cardComponent = (img, title, desc, price, id, counter, divider) => {
    return `
    <div class="col mt-3">
        <div class="card" style="width: 18rem;" id="${id}">
          <img src="${img}" class="tarjeta" alt="...">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${desc}</p>
                    <div class="d-flex flex-row mb-4">
                        <p style="margin: 0; display: inline; font-size:120%; color:LightGreen;">Precio: $</p>
                        <p style="margin: 0; display: inline; font-size:120%; color:LightGreen;" class="card-price" font-size:120%; color:LightBlue;>${price}</p>
                    </div>
                <div class="row justify-content-center align-items-center">
                    <div class="col-auto">
                        <button class="btn btn-secondary btn-add" data-accion="add">  +  </button>
                    </div>
                    <div class="col-auto">
                         <span class="counter">${counter}</span>
                    </div>
                    <div class="col-auto">
                         <button class="btn btn-secondary btn-remove" data-accion="remove">  -  </button>
                     </div>
                </div>
            </div>
        </div>
    </div>
    ${divider}
    `
}