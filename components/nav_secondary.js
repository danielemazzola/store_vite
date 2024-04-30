export const navSecondary = () => {
  return `
  <section id="nav_secondary">
  <div class="container_secondary">
    <div>
      <button class="btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="action"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
    <p><b>Todas las categorias</b></p>
  </div>
  <nav class="nav_secondary">
    <ul>
      <li>
        <a href="">Gaming</a>
      </li>
      <li><a href="#">Portátiles</a></li>
      <li><a href="#">Componentes</a></li>
      <li><a href="#">Smartphone</a></li>
      <li><a href="#">Televisores</a></li>
      <li><a href="#">Hogar tech</a></li>
      <li>
        <b><a href="#" class="text_special">Ofertas Días Azuladas</a></b>
      </li>
    </ul>
  </nav>
</section>
`
}
