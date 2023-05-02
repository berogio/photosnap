const menuBtn = document.querySelector('.burger-menu-icon')
const nav = document.querySelector('nav')
const menuIcon = document.querySelector('.burger-menu-icon').children
const featuresBox = document.querySelector('.features-box')
menuBtn.addEventListener('click', () => {
    menuIcon[0].classList.toggle('rotateX')
    menuIcon[1].classList.toggle('rotateY')
    nav.classList.toggle('is-active')
})

const cardsData = [{
    card1: {
        time: 'April 16th 2020',
        places: 'The Mountains',
        Author: 'John Appleseed',
        Link: 'www.google.ge',
    },
    card2: {
        time: 'April 16th 2020',
        places: 'The Mountains',
        Author: 'John Appleseed',
        Link: 'www.google.ge',
    },
    card3: {
        time: 'April 16th 2020',
        places: 'The Mountains',
        Author: 'John Appleseed',
        Link: 'www.google.ge',
    },
    card4: {
        time: 'April 16th 2020',
        places: 'The Mountains',
        Author: 'John Appleseed',
        Link: 'www.google.ge',
    }
}]