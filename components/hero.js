export function heroNav() {
  return `
  <header class="container_header" id="init">
  <div class="logo">
    <a href="index.html">
      <img
        loading="lazy"
        src="./public/img/logo.png"
        alt="logo web STORE"
      />
      <h1 class="title">STORE</h1>
    </a>
  </div>
  <div class="search_bar">
    <form class="">
      <select name="select_categories" id="select_categories">
        <option value="all_categories">Todas las categorías</option>
        <option value="blue_days_2024">Días Azulados 2024</option>
        <option value="reconditioned">Reacondicionados</option>
      </select>
    </form>
    <form class="">
      <input id="form_search" type="search" placeholder="Buscar" />
    </form>
  </div>
  <nav id="nav_header">
    <ul class="nav_header">
      <li>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
            />
          </svg>
          <p>Compromiso</p>
        </a>
      </li>
      <li>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
            />
          </svg>
          <p>Mi cuenta</p>
        </a>
      </li>
      <li>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <span class="count_article">2</span>
          <p>Mi cesta</p>
        </a>
      </li>
    </ul>
  </nav>
  </header>
  `
}
