import './style_experts.css'

//ARRAYS

const sectionExperts = document.querySelector('#experts')
//CREATE
const div = document.createElement('div')
const hTitle = document.createElement('h3')
const spam = document.createElement('spam')

//ATTRIBUTE
div.setAttribute('class', 'experts')
spam.setAttribute('class', 'text_no_bold')

//TEXT CONTENT
hTitle.textContent = 'Expertos en tecnologia '
spam.textContent = 'con un servicio 5 estrellas.'

//APPEND
sectionExperts.appendChild(div)
div.appendChild(hTitle)
hTitle.appendChild(spam)

//ARRAY FOR APPEND
