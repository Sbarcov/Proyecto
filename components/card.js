export const cardComponent = (img, title, desc, price) => {
    return `
    <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="${img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${desc}</p>
                <p class="card-text">Precio: $${price}</p>
                <a href="#" class="btn btn-primary">Agregar al Carrito</a>
            </div>
        </div>
    </div>
    `
}
