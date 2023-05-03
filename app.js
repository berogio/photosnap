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

const cardsData = [{
        time: 'April 16th 2020',
        places: 'The Mountains',
        Author: 'John Appleseed',
        Link: './assets/stories/desktop/mountains.jpg',
    },
    {
        time: 'April 16th 2022',
        places: 'Sunset Cityscapes',
        Author: 'Benjamin Cruiz',
        Link: './assets/stories/desktop/cityscapes.jpg',
    },
    {
        time: 'April 16th 2021',
        places: '18 Days Voyage',
        Author: 'Alexei Borodin',
        Link: './assets/stories/desktop/18-days-voyage.jpg',
    },
    {
        time: 'April 16th 2023',
        places: 'Architcturals',
        Author: 'Samanta Booke',
        Link: './assets/stories/desktop/architecturals.jpg',
    },


]


const postContainer = () => {
    cardsData.map((postData) => {
        console.log(postData)
        const postElement = document.createElement('div')
        postElement.classList.add('card');
        postElement.innerHTML = `<img src="${postData.Link}">
        <div class="card-body">
            <span class="story-time">${postData.time}</span>
            <span class="story-places"><h2>${postData.places}</h2></span>
            <span class="story-author">${postData.Author}</span>
        </div>
        <div class="card-footer">
            <a href=" " class="story-link">READ STORY</a>
            <svg stroke="white" width="43" height="14">
              <path d="M0 7h41.864M35.428 1l6 6-6 6"></path>
        </svg>
        </div>`
        cardsContainer.appendChild(postElement)
    })

}


postContainer()