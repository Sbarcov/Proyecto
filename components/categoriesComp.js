export const categoriesComponent = (img, title, divider) => {
    return `
    <div class="col mt-3">
        <div class="card" style="width: 18rem;" id="${title}">
          <img src="${img}" class="tarjeta" onerror="this.onerror=null; this.src='../img/new.webp';" alt="...">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
            </div>
        </div>
    </div>
    ${divider}
    `
}