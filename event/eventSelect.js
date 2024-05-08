import { arrayProducts } from '../arrayProducts/array_products.js'
const select = document.querySelector('#select_categories')

const father = document.querySelector('#experts')
const sectionSearch = document.createElement('section')
const divSeparator = document.createElement('div')
const divResult = document.createElement('div')
const divRecomended = document.createElement('div')
const titleRecomended = document.createElement('h3')
const divFlex = document.createElement('div')
const divGrid = document.createElement('div')
const title = document.createElement('h3')
sectionSearch.setAttribute('id', 'container_cards_search')
divFlex.setAttribute('id', 'container_products_items_search')
divGrid.setAttribute('class', 'container_cards_grid')

select.addEventListener('change', (e) => {
  father.parentNode.insertBefore(sectionSearch, father)
  sectionSearch.appendChild(divResult)
  sectionSearch.appendChild(divFlex)
  sectionSearch.appendChild(divRecomended)
  divResult.appendChild(title)
  divRecomended.appendChild(titleRecomended)
  divFlex.appendChild(divGrid)
  const seller = e.target.value
  const productsFilter = arrayProducts.filter((val) => val.seller === seller)
  if (productsFilter.length >= 1) {
    divGrid.innerHTML = ``
    for (const arrayProduct of productsFilter) {
      //CREATE
      const wordRecomended = document.createElement('p')
      const divCard = document.createElement('div')
      const divCardImg = document.createElement('div')
      const img = document.createElement('img')
      const p = document.createElement('p')
      const seller = document.createElement('p')
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
      a.setAttribute('loading', 'lazy')
      a.setAttribute('class', 'text_special_card')
      divDescriptionCard.setAttribute('class', 'description_card spacing_top')
      btnCard.setAttribute('class', 'btn-buy')
      seller.classList.add('seller')

      //TEXT CONTENT
      seller.textContent = `${arrayProduct.seller}`
      hthree.textContent = arrayProduct.name
      pDescription.textContent = arrayProduct.price
      spanDescription.textContent = 'Precio minimo historico'
      btnCard.textContent = 'Comprar'
      a.textContent = 'Ofertas días azulados'

      //APPEND
      divRecomended.appendChild(wordRecomended)
      divGrid.appendChild(divCard)
      divCard.appendChild(divCardImg)
      divCardImg.appendChild(img)
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
  } else {
    sectionSearch.innerHTML = ``
  }
})
