const url = 'http://127.0.0.1:5500/'

const navElementsLeft = [
    {title: 'Joyeria', link: `${url}pages/joyeria.html`},
    {title: 'Electronica', link: `${url}pages/electronica.html`},
    {title: 'Vestimenta', link: `${url}pages/prendas.html`}
]

const navElementsRigth = [
    {class: 'navbar-brand', title: 'Carro de compras', link: `${url}pages/carrito.html`},
    {class: 'nav-link', title: 'Log Out', link: `${url}pages/login.html`}
]

export const navbarComp =`
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="../index.html">Home</a>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav me-auto">
        ${
            navElementsLeft.map(e => {
                return `
                <a class="nav-link" aria-current="page" href=${e.link}>${e.title}</a>
                `
            }).join('')
        }
        </div>
        <div class="navbar-nav ms-auto">
        <span id="cart-counter" class="navbar-text me-1">  </span>
        ${
            navElementsRigth.map(e => {
                return `
                <a class="${e.class}" href="${e.link}">${e.title}</a>
                `
            }).join('')
        }
        </div>
      </div>
    </div>
  </nav>
`