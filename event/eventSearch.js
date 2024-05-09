import { arrayProducts } from '../arrayProducts/array_products.js'
const searchBar = document.querySelector('.search_bar')
const clean = document.createElement('button')
const sectionSearchAll = document.querySelector('#container_cards_search')
clean.setAttribute('id', 'clean')
clean.textContent = 'clean filters'
const input = document.querySelector('#form_search')
const select = document.querySelector('#select_categories')
const sectionSearch = document.createElement('section')

//EVENTS
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault()
    const INPUT = e.target.value
    if (select.value === '') {
      const result = arrayProducts.filter((val) => val.price <= INPUT)
      returnResult(result)
    } else {
      const result = arrayProducts.filter(
        (val) => val.price <= INPUT && val.seller === select.value
      )
      returnResult(result)
    }
  }
})
select.addEventListener('change', (e) => {
  const SELECT = e.target.value
  if (input.value === ``) {
    const result = arrayProducts.filter((val) => val.seller === SELECT)
    returnResult(result)
  } else {
    const result = arrayProducts.filter(
      (val) => val.price <= input.value && val.seller === SELECT
    )
    returnResult(result)
  }
})

const returnResult = (newArray) => {
  sectionSearch.innerHTML = ``
  const father = document.querySelector('#experts')
  const divFlex = document.createElement('div')
  const divGrid = document.createElement('div')
  const divResult = document.createElement('div')
  sectionSearch.setAttribute('id', 'container_cards_search')
  divFlex.setAttribute('id', 'container_products_items_search')
  divGrid.setAttribute('class', 'container_cards_grid')
  divResult.setAttribute('class', 'resultSearch')

  //APPEND
  father.parentNode.insertBefore(sectionSearch, father)
  sectionSearch.appendChild(divResult)
  sectionSearch.appendChild(divFlex)
  divFlex.appendChild(divGrid)
  if (newArray.length <= 0) {
    const alert = document.createElement('p')
    alert.setAttribute(
      'style',
      'text-align:center; margin-bottom:20px; color:red;'
    )
    alert.textContent =
      'No hay resultados de busqueda, prueba a cambiar el importe.'
    sectionSearch.append(alert)
    setTimeout(() => {
      alert.innerHTML = ``
      //sectionSearch.remove()
    }, 3000)
  } else {
    for (const arrayProduct of newArray) {
      //CREATE
      const wordRecomended = document.createElement('p')
      const divCard = document.createElement('div')
      const divCardImg = document.createElement('div')
      const seller = document.createElement('p')
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
      seller.classList.add('seller')
      p.setAttribute('class', 'card_item_p')
      a.setAttribute('href', arrayProduct.href)
      a.setAttribute('loading', 'lazy')
      a.setAttribute('class', 'text_special_card')
      divDescriptionCard.setAttribute('class', 'description_card spacing_top')
      btnCard.setAttribute('class', 'btn-buy')

      //TEXT CONTENT
      wordRecomended.textContent = arrayProduct.name
      wordRecomended.addEventListener('click', () => {
        input.value = arrayProduct.name
      })
      hthree.textContent = arrayProduct.name
      pDescription.textContent = arrayProduct.price
      spanDescription.textContent = 'Precio minimo historico'
      seller.textContent = `${arrayProduct.seller}`
      btnCard.textContent = 'Comprar'
      a.textContent = 'Ofertas días azulados'

      //APPEND
      searchBar.append(clean)
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
  }
}

//CLEAN
clean.addEventListener('click', () => {
  const initValue = ``
  document.querySelector('#formInput').reset()
  document.querySelector('#formOption').reset()
  sectionSearch.remove()
  //searchBar.form.reset()
})
