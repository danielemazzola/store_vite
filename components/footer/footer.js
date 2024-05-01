import './style_footer.css'

//ARRAYS

const footer = document.querySelector('#footer')
//CREATE
const divContainer = document.createElement('div')
const divFirst = document.createElement('div')
const hfourFirst = document.createElement('h4')
const divExtraFirst = document.createElement('div')
const aFirst = document.createElement('a')
const divSecond = document.createElement('div')
const hfourSecond = document.createElement('h4')
const divExtraSecond = document.createElement('div')
const aSecond = document.createElement('a')
const divPowered = document.createElement('div')
const hPowered = document.createElement('h4')
const aPowered = document.createElement('a')
const imgPowered = document.createElement('img')

//ATTRIBUTE
divContainer.setAttribute('class', 'footer')
divExtraFirst.setAttribute('class', 'extra')
divExtraSecond.setAttribute('class', 'extra')
divPowered.setAttribute('class', 'powered')
aPowered.setAttribute('href', '#header')
aPowered.setAttribute('loading', 'lazy')
imgPowered.setAttribute('loading', 'lazy')
imgPowered.setAttribute('src', './img/logo.png')
imgPowered.setAttribute('width', '70')
imgPowered.setAttribute('alt', 'logo web STORE')

//TEXT CONTENT
hfourFirst.textContent = 'Contacto'
aFirst.innerHTML = `<a
href="mailto:mazzoladaniele@gmail.com"
target="_blank"
rel="noopener"
>mazzoladaniele@gmail.com</a
>`
hfourSecond.textContent = 'Repositorio'
aSecond.innerHTML = `<a
href="https://github.com/danielemazzola/store_vite"
target="_blank"
rel="noopener"
>Github</a
>`
hPowered.textContent = 'Powered by'

//APPEND
footer.appendChild(divContainer)
divContainer.appendChild(divFirst)
divFirst.appendChild(hfourFirst)
divFirst.appendChild(divExtraFirst)
divExtraFirst.appendChild(aFirst)
divContainer.appendChild(divSecond)
divSecond.appendChild(hfourSecond)
divSecond.appendChild(divExtraSecond)
divExtraSecond.appendChild(hfourSecond)
divExtraSecond.appendChild(aSecond)
footer.appendChild(divPowered)
divPowered.appendChild(hPowered)
divPowered.appendChild(aPowered)
aPowered.appendChild(imgPowered)

//ARRAY FOR - APPEND
