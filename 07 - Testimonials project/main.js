const photo = document.querySelector(".photo");
const name = document.querySelector(".name");
const stars = document.querySelector(".stars");
const testimonials = document.querySelector(".testimonials");
const buttons = document.querySelectorAll(".button");
let count = 0;

const people = [
    "img/person1.jpg",
    "img/person2.jpg",
    "img/person3.jpg"
]
const opinions = [
    "This C.J. was like no Kazakh woman I have ever seen. She had golden hairs, teeth as white as pearls, and the asshole of a seven-year-old. For the first time in my lifes, I was in love.",
    "Kazakhstan is the greatest country in the world. All other countries are run by little girls. Kazakhstan is number-one exporter of potassium. Other Central Asian countries have inferior potassium. Kazakhstan is the greatest country in the world. All other countries is the home of the gays",
    "He is my neighbor Nursultan Tuliagby. He is pain in my assholes. I get a window from a glass, he must get a window from a glass. I get a step, he must get a step. I get a clock radio, he cannot afford. Great success!"
]
const rate = [
    "*****",
    "****",
    "**"
]

buttons.forEach(function(btn) {
    btn.addEventListener("click", changeTestimonial = () => {
        if (btn.classList.contains("right")) {
            count++;
            if (count > people.length -1) {count=0}
            console.log(count);
            photo.style.backgroundImage = `url(${people[count]})`;
            testimonials.innerText = opinions[count];
            stars.innerText = rate[count];
        }
        else if (btn.classList.contains("left")){
            count--;
            if (count < 0) {count=people.length -1}
            console.log(count);
            photo.style.backgroundImage = `url(${people[count]})`;
            testimonials.innerText = opinions[count];
            stars.innerText = rate[count];
        }
    });
})



