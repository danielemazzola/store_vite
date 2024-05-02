import { arrayProducts } from '../arrayProducts/array_products.js'
//SERCH FORM IMPUT -- ADD EVENT
const input = document.querySelector('#form_search')
//SEARCH FUNCTION
//SECTION FATHER
const father = document.querySelector('#experts')
//CREATE
const sectionSearch = document.createElement('section')
const divSeparator = document.createElement('div')
const divResult = document.createElement('div')
const divRecomended = document.createElement('div')
const titleRecomended = document.createElement('h3')
const divFlex = document.createElement('div')
const divGrid = document.createElement('div')
const title = document.createElement('h3')
const wordSearch = document.createElement('p')
let word = ''

input.addEventListener('change', (e) => {
  //ADD LOADING
  word = e.target.value
  let resultP = []

  if (word === '') {
    sectionSearch.innerHTML = ``
    sectionSearch.removeAttribute('class', 'container_cards_grid')
    return (resultP = [])
  }
  //FILTER SEARCH
  filterSearch(resultP, arrayProducts, word)
  //ADD SECTION TO SEE THE RESULT OF SEARCH
  divRecomended.innerHTML = ``
  //ATTRIBUTE
  sectionSearch.setAttribute('id', 'container_cards_search')
  divFlex.setAttribute('id', 'container_products_items_search')
  divGrid.setAttribute('class', 'container_cards_grid')
  divResult.setAttribute('class', 'resultSearch')
  divRecomended.setAttribute('class', 'recomendedSearch')

  //TEXT CONTENT
  title.textContent = 'Resultado de busqueda:'
  wordSearch.textContent = word
  titleRecomended.textContent = 'Sugerencias:'
  //APPEND
  father.parentNode.insertBefore(sectionSearch, father)
  sectionSearch.appendChild(divResult)
  sectionSearch.appendChild(divFlex)
  sectionSearch.appendChild(divRecomended)
  divResult.appendChild(title)
  divRecomended.appendChild(titleRecomended)
  divResult.appendChild(wordSearch)
  divFlex.appendChild(divGrid)

  //ARRAY FOR - APPEND
  returnResult(resultP)
  //CONDITION
  if (resultP.length <= 0) {
    for (const arrayProduct of arrayProducts) {
      const wordRecomended = document.createElement('p')
      wordRecomended.setAttribute(
        'style',
        'background-color: green; padding: 2px 4px;'
      )
      wordRecomended.textContent = arrayProduct.name
      wordRecomended.addEventListener('click', () => {
        divRecomended.innerHTML = ``
        wordSearch.textContent = arrayProduct.name
        input.value = arrayProduct.name
        word = arrayProduct.name
        filterSearch(resultP, arrayProducts, word)
      })
      divRecomended.appendChild(wordRecomended)
    }
  }
})
//END SERCH FORM IMPUT

//FILTER
const filterSearch = (resultP, arrayProducts, word) => {
  divGrid.innerHTML = ``
  resultP = arrayProducts.filter((product) => {
    return product.name.toLowerCase().includes(word.toLowerCase())
  })
  if (resultP.length === 0) {
    alert('No hay resultados en su busqueda! Mira nuestras sugerencias:')
  }
  returnResult(resultP)
}

const returnResult = (resultP) => {
  /* divGrid.innerHTML = `` */
  for (const arrayProduct of resultP) {
    //CREATE
    const wordRecomended = document.createElement('p')
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
    divCard.appendChild(btnCard)
  }
}
