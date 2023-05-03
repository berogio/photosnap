//TODO DELETE
const menuBtn = document.querySelector('.burger-menu-icon')
const nav = document.querySelector('nav')
const menuIcon = document.querySelector('.burger-menu-icon').children
const featuresBox = document.querySelector('.features-box')
const cardsContainer = document.querySelector('.container')
console.log(cardsContainer)
menuBtn.addEventListener('click', () => {
    menuIcon[0].classList.toggle('rotateX')
    menuIcon[1].classList.toggle('rotateY')
    nav.classList.toggle('is-active')
    nav.classList.toggle('open-animation')
})