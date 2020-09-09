const btn = document.querySelector(".generate-btn");
const cytat = document.querySelector(".quote");
const autor = document.querySelector(".author");

const quotes = [
    "He is my neighbor Nursultan Tuliagby. He is pain in my assholes. I get a window from a glass, he must get a window from a glass. I get a step, he must get a step. I get a clock radio, he cannot afford. Great success!",

    "This C.J. was like no Kazakh woman I have ever seen. She had golden hairs, teeth as white as pearls, and the asshole of a seven-year-old. For the first time in my lifes, I was in love.",

    "Sometime my sister, she show her vazhïn to my brother Bilo and say: You will never get this you will never get it la la la la la la. He behind his cage. He cries, he cries and everybody laughs. She goes: You never get this. But one time he break cage and he get this and then we all laugh. High five!",

    "My country send me to United States to make movie-film. Please, come and see my film. If it not success, I will be execute."
];

const authors = ["Borat 1", "Borat 2", "Borat 3", "Borat 4"]


const generateQuote = () => {
    const quotesIndex = Math.floor(Math.random() * (quotes.length));
    cytat.innerHTML = quotes[quotesIndex];
    autor.innerHTML = authors[quotesIndex];
}


btn.addEventListener('click', generateQuote)