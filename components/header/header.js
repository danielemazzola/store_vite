import './style_header.css'
import '../../public/assets/style_media_query.css'
import { arrayProducts } from '../../arrayProducts/array_products.js'

const navOptions = [
  {
    name: 'Compromiso',
    a: '#',
    extra: `<svg
  xmlns='http://www.w3.org/2000/svg'
  fill='none'
  viewBox='0 0 24 24'
  stroke-width='1.5'
  stroke='currentColor'
>
  <path
    stroke-linecap='round'
    stroke-linejoin='round'
    d='M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125'
  />
</svg>`
  },
  {
    name: 'Mi cuenta',
    a: '#',
    extra: `<svg
  xmlns='http://www.w3.org/2000/svg'
  fill='none'
  viewBox='0 0 24 24'
  stroke-width='1.5'
  stroke='currentColor'
>
  <path
    stroke-linecap='round'
    stroke-linejoin='round'
    d='m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9'
  />
</svg>`
  },
  {
    name: 'Mi cesta',
    a: '#',
    extra: `<svg
  xmlns='http://www.w3.org/2000/svg'
  fill='none'
  viewBox='0 0 24 24'
  stroke-width='1.5'
  stroke='currentColor'
>
  <path
    stroke-linecap='round'
    stroke-linejoin='round'
    d='M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
  />
</svg>`
  }
]

//CREATE
const header = document.querySelector('#header')
const div = document.createElement('div')
const a = document.createElement('a')
const img = document.createElement('img')
const h1 = document.createElement('h1')
const div2 = document.createElement('div')
const formOption = document.createElement('form')
const select = document.createElement('select')
const formInput = document.createElement('form')
const input = document.createElement('input')
const nav = document.createElement('nav')
const ul = document.createElement('ul')

//TEXT-CONTEN
h1.textContent = 'STORE'

//ATTRIBUTES
header.setAttribute('class', 'container_header')
div.setAttribute('class', 'logo')
a.setAttribute('href', '#')
img.setAttribute('loading', 'lazy')
img.setAttribute('src', './img/logo.png')
img.setAttribute('alt', 'logo web STORE')
img.setAttribute('id', 'img')
h1.setAttribute('class', 'title')
div2.setAttribute('class', 'search_bar')
select.setAttribute('name', 'select_categories')
select.setAttribute('id', 'select_categories')
input.setAttribute('id', 'form_search')
input.setAttribute('type', 'number')
input.setAttribute('min', 1)
input.setAttribute('placeholder', 'price limit')
nav.setAttribute('id', 'nav_header')
ul.setAttribute('class', 'nav_header')

//APPEND
header.appendChild(div)
div.appendChild(a)
a.appendChild(img)
a.appendChild(h1)
header.appendChild(div2)
div2.appendChild(formOption)
formOption.appendChild(select)
div2.appendChild(formInput)
formInput.appendChild(input)
header.appendChild(nav)
nav.appendChild(ul)

//ARRAY FOR - APPEND
//Select -> Options -> SELLERS
const newArraySeller = arrayProducts.map((val) => val.seller)
// DELETE DUPLICATE
const updateArray = newArraySeller.filter(
  (item, index) => newArraySeller.indexOf(item) === index
)
const optionInit = document.createElement('option')
optionInit.setAttribute('value', '')
optionInit.textContent = 'Elige un seller'
select.appendChild(optionInit)
for (const op of updateArray) {
  const option = document.createElement('option')
  option.setAttribute('value', op)
  option.textContent = op
  select.appendChild(option)
}
//Items -> NavBar
for (let index = 0; index < navOptions.length; index++) {
  const element = navOptions[index]
  const li = document.createElement('li')
  const aNav = document.createElement('a')
  const p = document.createElement('p')
  aNav.innerHTML = element.extra
  p.textContent = element.name
  aNav.setAttribute('href', element.a)
  ul.appendChild(li)
  li.appendChild(aNav)
  aNav.appendChild(p)
}
