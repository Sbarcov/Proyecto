const url = 'http://127.0.0.1:5500/'

const navElementsLeft = [
    {title: 'Joyeria', link: `${url}joyeria.html`},
    {title: 'Electronica', link: `${url}electronica.html`},
    {title: 'Vestimenta', link: `${url}prendas.html`}
]

const navElementsRigth = [
    {title: '', link: `${url}}`},
    {title: '', link: `${url}`}
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
          <a class="navbar-brand" href="#">Carro de compras</a>
          <a class="nav-link" href="login.html">Log Out</a>
        </div>
      </div>
    </div>
  </nav>
`