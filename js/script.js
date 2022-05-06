Vue.config.devtools = true;

const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque providendt totam omnis, magnam dolores dolorum corporis.',
    'Lorem t consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut venidsam inventore eligendi ex ad ullam, cumque provident totam omnis magnam do',
    'Lorem ipsum, dolor sit amet adconsectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet dconsectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum sdasuscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];
let currentSlide = [
    true,
    false,
    false,
    false,
    false]; // ci posizioniamo sulla prima slide
// 1. Uniamo i 3 array di sopra in un array di oggetti
const dates = [];

for (let i = 0; i < images.length; i++) {
    dates.push({
        image: images[i],
        title: title[i],
        text : text[i],
        active: currentSlide[i]
    });
}
const app = new Vue( {
    el: "#root",
    data: ( {
        elements: dates,
        prova: 1
        
    }) ,
    methods: {

    }
});


const itemsContainer  = document.querySelector('#root');
const thumbsContainer = document.getElementsByClassName('thumbs')[0]; // document.querySelector('.thumbs')


// app.createItems();
createThumbnails();
// const interval = setInterval(next,3000);

// Slide precedente
// document.querySelector('.prev').addEventListener('click', function() {

//     // se sono alla prima, mi posiziono sull'ultima
//     if (currentSlide == 0) {
//         currentSlide = data.length - 1; // ultima
//     } else {
//         currentSlide--; // precedente
//     }

//     console.log('Prev', currentSlide);
//     changeActive(currentSlide);
// });

// Slide successiva
// document.querySelector('.next').addEventListener('click', next);
// function next(){
//     // se sono all'ultima, mi posiziono sulla prima
//     if (currentSlide == dates.length - 1) {
//         currentSlide = 0; // prima
//     } else {
//         currentSlide++; // successiva
//     }

//     console.log('Next', currentSlide);
//     changeActive(currentSlide);
// }

// function changeActive(index) {

//     // togliamo la classe active dall'item
//     document.querySelector('.item.active').classList.remove('active');
//     document.querySelector('.thumb.active').classList.remove('active');

//     // aggiungiamo la classe active all'item corrente
//     document.querySelectorAll('.item')[index].classList.add('active');
//     document.querySelectorAll('.thumb')[index].classList.add('active');
// }



// creiamo le thumbnails
function createThumbnails() {

    for (let i = 0; i < dates.length; i++) {
        let elem = dates[i];

        // aggiungiamo la classe active alla prima thumbnail (currentSlide = 0)
        let firstActive = '';
        if (i == currentSlide) {
            firstActive = 'active';
        }

        thumbsContainer.innerHTML +=
            `<div class="thumb ${firstActive}">
                <img src="${elem.image}" alt="${elem.title}">
            </div>`;
    }
}

