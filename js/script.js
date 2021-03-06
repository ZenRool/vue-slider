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
        time: Object
        
    }) ,
    methods: {
        timer() {
            clearInterval(this.time);
            this.time = setInterval(this.next,3000);
        },
        playStop: bool => bool ? clearInterval(app.time) : app.time = setInterval(app.next, 3000),
        next(){
            // Cerco in che posizione stava il true
            let truePos = 0;
            this.elements.forEach((element , index) => {
                if(element.active) {
                    truePos = index;
                    // riporto a false lo stato della posizione che aveva true 
                    element.active = false;
                }
                
            });
            
            // se sono all'ultima, mi posiziono sulla prima altrimenti sommo 1
            if (truePos == this.elements.length - 1) {
                this.elements[0].active = true; // prima
            } else {
                this.elements[truePos + 1].active = true; // successiva
            }
            this.timer();

        },
        prev(){
            // Cerco in che posizione stava il true
            let truePos = 0;
            this.elements.forEach((element , index) => {
                if(element.active) {
                    truePos = index;
                    // riporto a false lo stato della posizione che aveva true 
                    element.active = false;
                }
            });
            
            // se sono alla prima posizione , mi posiziono sul'ultima altrimenti sottraggo 1
            if (truePos == 0) {
                this.elements[this.elements.length - 1].active = true; // prima
            } else {
                this.elements[truePos - 1].active = true; // precedente
            }
            this.timer();

        },
        clickThumb(index) {
            this.elements.forEach((element) => {
                if(element.active) {
                    // riporto a false lo stato della posizione che aveva true
                    //in questo caso non ho bisogno della posizione precedente 
                    element.active = false;
                }
                
            });

            this.elements[index].active = true;
            this.timer();
        },

    }
});
app.timer();





