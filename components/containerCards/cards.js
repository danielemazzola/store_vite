import './style_container_cards.css'

//ARRAYS
const arrayCards = [
  { name: 'Lo más TOP', img: './img/1.jpg', alt: 'Lo más TOP' },
  { name: 'Accesorios', img: './img/2.jpg', alt: 'Accesorios' },
  { name: 'Perfumes', img: './img/3.jpg', alt: 'Perfumes' },
  { name: 'Aviones', img: './img/4.jpg', alt: 'Aviones' },
  { name: 'Bolígrafos', img: './img/5.jpg', alt: 'Bolígrafos' },
  {
    name: 'Pulseras y collares',
    img: './img/6.jpg',
    alt: 'Pulseras y collares'
  },
  { name: 'Reloj', img: './img/7.jpg', alt: 'Reloj' },
  { name: 'Bolsos', img: './img/8.jpg', alt: 'Bolsos' },
  { name: 'Aretes', img: './img/6.jpg', alt: 'Aretes' },
  { name: 'Packs', img: './img/10.jpg', alt: 'Packs' }
]

const container = document.querySelector('#container_cards')
//CREATE
const divContainer = document.createElement('div')

//ATTRIBUTE
divContainer.setAttribute('class', 'container_cards')

//TEXT CONTENT

//APPEND
container.appendChild(divContainer)

//ARRAY FOR - APPEND
for (const arrayCard of arrayCards) {
  const divCard = document.createElement('div')
  const img = document.createElement('img')
  const p = document.createElement('p')

  //ATTRIBUTE
  divCard.setAttribute('class', 'card')
  img.setAttribute('loading', 'lazy')
  img.setAttribute('src', arrayCard.img)
  img.setAttribute('alt', arrayCard.alt)

  //TEXT CONTENT
  p.textContent = arrayCard.name

  //APPEND
  divContainer.appendChild(divCard)
  divCard.appendChild(img)
  divCard.appendChild(p)
}
