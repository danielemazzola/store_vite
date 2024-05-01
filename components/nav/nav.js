import './style_nav_secondary.css'

//ARRAYS
const navOptions = [
  { name: 'Gaming', href: '#', class: '' },
  { name: 'Portátiles', href: '#', class: '' },
  { name: 'Componentes', href: '#', class: '' },
  { name: 'Smartphone', href: '#', class: '' },
  { name: 'Televisores', href: '#', class: '' },
  { name: 'Hogar tech', href: '#', class: '' },
  { name: 'Ofertas Días Azuladas', href: '#', class: 'text_special' }
]

const sectionNav = document.querySelector('#nav_secondary')
//CREATE
const divContainer = document.createElement('div')
const divFirst = document.createElement('div')
const buttonFirst = document.createElement('button')
const bSecond = document.createElement('b')
const pSecond = document.createElement('p')
const nav = document.createElement('nav')
const ulNav = document.createElement('ul')

//TEXT-CONTEN
buttonFirst.innerHTML = `<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke-width="1.5"
stroke="currentColor"
class="action"
>
<path
  stroke-linecap="round"
  stroke-linejoin="round"
  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
/>
</svg>`

//ATTRIBUTE
sectionNav.setAttribute('class', 'navSecondary')
divContainer.setAttribute('class', 'container_secondary')
buttonFirst.setAttribute('class', 'btn')
bSecond.textContent = 'Todas las categorias'
nav.setAttribute('class', 'nav_secondary')

//APPEND
sectionNav.appendChild(divContainer)
divContainer.appendChild(divFirst)
divFirst.appendChild(buttonFirst)
divContainer.appendChild(pSecond)
pSecond.appendChild(bSecond)
sectionNav.appendChild(nav)
nav.appendChild(ulNav)

//ARRAY FOR APPEND
for (const navOption of navOptions) {
  const liNav = document.createElement('li')
  const aNav = document.createElement('a')
  liNav.setAttribute('class', navOption.class)
  aNav.setAttribute('href', navOption.href)

  if (navOption.class !== '') {
    const bNav = document.createElement('b')
    ulNav.appendChild(liNav)
    liNav.appendChild(aNav)
    aNav.appendChild(bNav)
    bNav.textContent = navOption.name
  } else {
    aNav.textContent = navOption.name
    ulNav.appendChild(liNav)
    liNav.appendChild(aNav)
  }
}
