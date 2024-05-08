import './style_container_products.css'
import '../../public/assets/style_media_query.css'
import { arrayProducts } from '../../arrayProducts/array_products.js'

const container = document.querySelector('#container_products_items')
//CREATE
const divContainer = document.createElement('div')
const divTitle = document.createElement('div')
const hTitle = document.createElement('h2')
const p = document.createElement('p')

//ATTRIBUTE
divContainer.setAttribute('class', 'container_cards_grid')
divTitle.setAttribute('class', 'title_cards')

//TEXT CONTENT
hTitle.textContent = 'Ofertas AZULADAS'
p.textContent = 'Aquí encontraras las mejores ofertas de nuestro portal web'

//APPEND
container.appendChild(divTitle)
divTitle.appendChild(hTitle)
divTitle.appendChild(p)
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
  const seller = document.createElement('p')
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
  a.setAttribute('loading', 'lazy')
  a.setAttribute('class', 'text_special_card')
  divDescriptionCard.setAttribute('class', 'description_card spacing_top')
  btnCard.setAttribute('class', 'btn-buy')
  seller.classList.add('seller')

  //TEXT CONTENT
  hthree.textContent = arrayProduct.name
  pDescription.textContent = arrayProduct.price
  spanDescription.textContent = 'Precio minimo historico'
  btnCard.textContent = 'Comprar'
  a.textContent = 'Ofertas días azulados'
  seller.textContent = `Seller: ${arrayProduct.seller}`

  //APPEND
  divContainer.appendChild(divCard)
  divCard.appendChild(divCardImg)
  divCardImg.appendChild(img, p)
  divCardImg.appendChild(p)
  p.appendChild(b)
  b.appendChild(a)
  divCard.appendChild(divDescriptionCard)
  divDescriptionCard.appendChild(hthree)
  divDescriptionCard.appendChild(pDescription)
  divDescriptionCard.appendChild(spanDescription)
  divDescriptionCard.appendChild(seller)
  divCard.appendChild(btnCard)
}
