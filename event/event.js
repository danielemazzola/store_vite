//SERCH FORM IMPUT -- ADD EVENT
//CONDITIONS FILTER SEARCH
//SEARCH FUNCTION
input.addEventListener('input', (e) => {
  search(e.target.value)
})
export const search = (value) => {
  const resultP = arrayProducts.filter((product) => {
    return product.name.toLowerCase().includes(value.toLowerCase())
  })
}
//END SERCH FORM IMPUT
