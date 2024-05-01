import './style_container_products.css'
import '../../public/assets/style_media_query.css'

//ARRAYS
const arrayProducts = [
  {
    name: 'Gafas de Sol',
    price: 24.99,
    stars: 4,
    reviews: 250,
    seller: 'STORE',
    image: './img/1.jpg',
    href: '#'
  },
  {
    name: 'Aretes',
    price: 15.99,
    stars: 4,
    reviews: 250,
    seller: 'STORE',
    image: './img/2.jpg',
    href: '#'
  },
  {
    name: 'Perfumes',
    price: 199.99,
    stars: 4,
    reviews: 250,
    seller: 'STORE',
    image: './img/3.jpg',
    href: '#'
  },
  {
    name: 'Aviones',
    price: 12.99,
    stars: 4,
    reviews: 250,
    seller: 'STORE',
    image: './img/4.jpg',
    href: '#'
  },
  {
    name: 'Tazas',
    price: 6.99,
    stars: 4,
    reviews: 250,
    seller: 'STORE',
    image: './img/5.jpg',
    href: '#'
  },
  {
    name: 'Diamantes',
    price: 124.99,
    stars: 4,
    reviews: 250,
    seller: 'STORE',
    image: './img/6.jpg',
    href: '#'
  },
  {
    name: 'Reloj',
    price: 125.69,
    stars: 4,
    reviews: 250,
    seller: 'STORE',
    image: './img/7.jpg',
    href: '#'
  },
  {
    name: 'Bolsos',
    price: 24.99,
    stars: 4,
    reviews: 250,
    seller: 'STORE',
    image: './img/8.jpg',
    href: '#'
  },
  {
    name: 'Lentes',
    price: 24.99,
    stars: 4,
    reviews: 250,
    seller: 'STORE',
    image: './img/1.jpg',
    href: '#'
  },
  {
    name: 'Flores',
    price: 15.99,
    stars: 4,
    reviews: 250,
    seller: 'STORE',
    image: './img/1.jpg'
  }
]

const container = document.querySelector('#container_products_items')
//CREATE
const divContainer = document.createElement('div')

//ATTRIBUTE
divContainer.setAttribute('class', 'container_cards_grid')

//TEXT CONTENT

//APPEND
container.appendChild(divContainer)

//ARRAY FOR - APPEND
for (const arrayProduct of arrayProducts) {
  //CREATE
  const divCard = document.createElement('div')
  const divCardImg = document.createElement('div')
  const img = document.createElement('img')
  const p = document.createElement('p')
  const a = document.createElement('a')
  const b = document.createElement('b')
  const divDescriptionCard = document.createElement('div')
  const hthree = document.createElement('h3')
  const pDescription = document.createElement('p')
  const spanDescription = document.createElement('span')
  const btnCard = document.createElement('button')

  //ATTRIBUTE
  divCard.setAttribute('class', 'card_grid')
  divCardImg.setAttribute('class', 'card_grid_img')
  img.setAttribute('loading', 'lazy')
  img.setAttribute('src', arrayProduct.image)
  img.setAttribute('alt', arrayProduct.name)
  p.setAttribute('class', 'card_item_p')
  a.setAttribute('href', arrayProduct.href)
  a.setAttribute('target', '_blank')
  a.setAttribute('class', 'text_special_card')
  divDescriptionCard.setAttribute('class', 'description_card spacing_top')
  btnCard.setAttribute('class', 'btn-buy')

  //TEXT CONTENT
  hthree.textContent = arrayProduct.name
  pDescription.textContent = arrayProduct.price
  spanDescription.textContent = 'Precio minimo historico'
  btnCard.textContent = 'Comprar'
  a.textContent = 'Ofertas días azulados'

  //APPEND
  divContainer.appendChild(divCard)
  divCard.appendChild(divCardImg)
  divCardImg.appendChild(img)
  divCardImg.appendChild(p)
  p.appendChild(b)
  b.appendChild(a)
  divCard.appendChild(divDescriptionCard)
  divDescriptionCard.appendChild(hthree)
  divDescriptionCard.appendChild(pDescription)
  divDescriptionCard.appendChild(spanDescription)
  divCard.appendChild(btnCard)

  /* name: 'Gafas de Sol',
    price: 24.99,
    stars: 4,
    reviews: 250,
    seller: 'STORE',
    image: './img/1.jpg' 
    href: '#'
    */
}
