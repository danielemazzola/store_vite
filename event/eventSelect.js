//Scroll in option selected
const select = document.querySelector('#select_categories')
select.addEventListener('change', () => {
  const result = select.options[select.selectedIndex].value
  const scroll = document.querySelector(`#${result}`)
  scroll.scrollIntoView({ behavior: 'smooth' })
})
