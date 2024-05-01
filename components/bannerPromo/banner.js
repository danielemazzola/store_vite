import './style_banner_promo.css'

//ARRAYS

const banner = document.querySelector('#banner_promo')
//CREATE
const div = document.createElement('div')
const a = document.createElement('a')
const img = document.createElement('img')

//ATTRIBUTE
div.setAttribute('class', 'banner_promo')
a.setAttribute('href', '#container_cards')
img.setAttribute('src', './img/LevelUpSale.png')
img.setAttribute('alt', 'banner promotional day')

//TEXT CONTENT

//APPEND
banner.appendChild(div)
div.appendChild(a)
a.appendChild(img)

//ARRAY FOR - APPEND
