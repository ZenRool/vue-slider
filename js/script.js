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
        elements: dates
        
    }) ,
    methods: {
        next(){
            
            // console.log('Next', currentSlide);
            // changeActive(currentSlide);
            // provo con il for
            let truePos = 0;
            this.elements.forEach((element , index) => {
                if(element.active) {
                    truePos = index;
                    element.active = false;
                }
                
            });
            
            // se sono all'ultima, mi posiziono sulla prima
            if (truePos == this.elements.length - 1) {
                this.elements[0].active = true; // prima
            } else {
                this.elements[truePos + 1].active = true; // successiva
            }
        },
        prev(){
            
            // console.log('Next', currentSlide);
            // changeActive(currentSlide);
            // provo con il for
            let truePos = 0;
            this.elements.forEach((element , index) => {
                if(element.active) {
                    truePos = index;
                    element.active = false;
                }
                
            });
            
            // se sono all'ultima, mi posiziono sulla prima
            if (truePos == 0) {
                this.elements[this.elements.length - 1].active = true; // prima
            } else {
                this.elements[truePos - 1].active = true; // successiva
            }
        },
        clickThumb(index) {
            this.elements.forEach((element) => {
                if(element.active) {
                    element.active = false;
                }
                
            });
            // console.log(index);
            this.elements[index].active = true;

        },
        //funzione di debug
        ciao() {
            alert("ciao");
        }
        

    }
});


const itemsContainer  = document.querySelector('#root');
const thumbsContainer = document.getElementsByClassName('thumbs')[0]; // document.querySelector('.thumbs')



// const interval = setInterval(next,3000);


