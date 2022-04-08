const loader = document.querySelector('.loader-wrapper')
window.addEventListener('load', () => {
    loader.classList.add('active')
    document.body.classList.add('active')
})

const header = document.querySelector('.header')
const burgerMenu = document.querySelector('.burger-menu')
const onClick = document.querySelector('.onclick')


// events menu
burgerMenu.addEventListener('click', () => {
    header.classList.toggle('active')
})
onClick.addEventListener('click', () => {
    header.classList.remove('active')
})