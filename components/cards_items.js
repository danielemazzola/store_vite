export const cardsItems = () => {
  const products = [
    {
      name: 'Gafas de Sol',
      price: 24.99,
      stars: 4,
      reviews: 250,
      seller: 'STORE',
      image: './public/img/1.jpg'
    },
    {
      name: 'Aretes',
      price: 15.99,
      stars: 4,
      reviews: 250,
      seller: 'STORE',
      image: './public/img/2.jpg'
    },
    {
      name: 'Perfumes',
      price: 199.99,
      stars: 4,
      reviews: 250,
      seller: 'STORE',
      image: './public/img/3.jpg'
    },
    {
      name: 'Aviones',
      price: 12.99,
      stars: 4,
      reviews: 250,
      seller: 'STORE',
      image: './public/img/4.jpg'
    },
    {
      name: 'Tazas',
      price: 6.99,
      stars: 4,
      reviews: 250,
      seller: 'STORE',
      image: './public/img/5.jpg'
    },
    {
      name: 'Diamantes',
      price: 124.99,
      stars: 4,
      reviews: 250,
      seller: 'STORE',
      image: './public/img/6.jpg'
    },
    {
      name: 'Reloj',
      price: 125.69,
      stars: 4,
      reviews: 250,
      seller: 'STORE',
      image: './public/img/7.jpg'
    },
    {
      name: 'Bolsos',
      price: 24.99,
      stars: 4,
      reviews: 250,
      seller: 'STORE',
      image: './public/img/8.jpg'
    },
    {
      name: 'Lentes',
      price: 24.99,
      stars: 4,
      reviews: 250,
      seller: 'STORE',
      image: './public/img/1.jpg'
    },
    {
      name: 'Flores',
      price: 15.99,
      stars: 4,
      reviews: 250,
      seller: 'STORE',
      image: './public/img/1.jpg'
    }
  ]
  const divApp = document.querySelector('#app')
  return `
  <section id="container_cards_items">
  <div class="container_cards_grid">
    <div class="card_grid">
      <div class="card_grid_img">
        <img loading="lazy" src="./public/img/1.jpg" alt="top" />
        <p class="card_item_p">
          <b
            ><a href="#" class="text_special">Ofertas Días Azuladas</a></b
          >
        </p>
      </div>
      <div class="description_card spacing_top">
        <h3>Gafas de SOL</h3>
        <p>24.99€</p>
        <span>Precio minimo historico</span>
      </div>
      <button class="btn-buy">Comprar</button>
    </div>
    <div class="card_grid">
      <div class="card_grid_img">
        <img loading="lazy" src="./public/img/2.jpg" alt="top" />
        <p class="card_item_p">
          <b
            ><a href="#" class="text_special">Ofertas Días Azuladas</a></b
          >
        </p>
      </div>
      <div class="description_card">
        <h3>Aretes</h3>
        <p>15.99€</p>
        <span>Precio minimo historico</span>
      </div>
      <button class="btn-buy">Comprar</button>
    </div>
    <div class="card_grid">
      <div class="card_grid_img">
        <img loading="lazy" src="./public/img/3.jpg" alt="top" />
        <p class="card_item_p">
          <b
            ><a href="#" class="text_special">Ofertas Días Azuladas</a></b
          >
        </p>
      </div>
      <div class="description_card spacing_top">
        <h3>Perfumes</h3>
        <p>199.99€</p>
        <span>Precio minimo historico</span>
      </div>
      <button class="btn-buy">Comprar</button>
    </div>
    <div class="card_grid">
      <div class="card_grid_img">
        <img src="./public/img/4.jpg" loading="lazy" alt="top" />
        <p class="card_item_p">
          <b
            ><a href="#" class="text_special">Ofertas Días Azuladas</a></b
          >
        </p>
      </div>
      <div class="description_card spacing_top">
        <h3>Áviones</h3>
        <p>12.99€</p>
        <span>Precio minimo historico</span>
      </div>
      <button class="btn-buy">Comprar</button>
    </div>
    <div class="card_grid">
      <div class="card_grid_img">
        <img loading="lazy" src="./public/img/5.jpg" alt="top" />
        <p class="card_item_p">
          <b
            ><a href="#" class="text_special">Ofertas Días Azuladas</a></b
          >
        </p>
      </div>
      <div class="description_card spacing_top">
        <h3>Tazas</h3>
        <p>6.99€</p>
        <span>Precio minimo historico</span>
      </div>
      <button class="btn-buy">Comprar</button>
    </div>
    <div class="card_grid">
      <div class="card_grid_img">
        <img loading="lazy" src="./public/img/6.jpg" alt="top" />
        <p class="card_item_p">
          <b
            ><a href="#" class="text_special">Ofertas Días Azuladas</a></b
          >
        </p>
      </div>
      <div class="description_card spacing_top">
        <h3>Diamantes</h3>
        <p>124.99€</p>
        <span>Precio minimo historico</span>
      </div>
      <button class="btn-buy">Comprar</button>
    </div>
    <div class="card_grid">
      <div class="card_grid_img">
        <img loading="lazy" src="./public/img/7.jpg" alt="top" />
        <p class="card_item_p">
          <b
            ><a href="#" class="text_special">Ofertas Días Azuladas</a></b
          >
        </p>
      </div>
      <div class="description_card spacing_top">
        <h3>Reloj</h3>
        <p>125.69€</p>
        <span>Precio minimo historico</span>
      </div>
      <button class="btn-buy">Comprar</button>
    </div>
    <div class="card_grid">
      <div class="card_grid_img">
        <img loading="lazy" src="./public/img/8.jpg" alt="top" />
        <p class="card_item_p">
          <b
            ><a href="#" class="text_special">Ofertas Días Azuladas</a></b
          >
        </p>
      </div>
      <div class="description_card spacing_top">
        <h3>Bolsos</h3>
        <p>24.99€</p>
        <span>Precio minimo historico</span>
      </div>
      <button class="btn-buy">Comprar</button>
    </div>
  </div>
</section>
  `
}
