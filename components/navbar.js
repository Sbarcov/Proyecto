const url = 'http://127.0.0.1:5500/'

const navElementsLeft = [
    {title: 'Joyeria', link: `${url}joyeria.html`},
    {title: 'Electronica', link: `${url}electronica.html`},
    {title: 'Vestimenta', link: `${url}prendas.html`}
]

const navElementsRigth = [
    {class: 'navbar-brand', title: 'Carro de compras', link: `#`},
    {class: 'nav-link', title: 'Log Out', link: `${url}login.html`}
]

export const navbarComp =`
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html">Home</a>
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