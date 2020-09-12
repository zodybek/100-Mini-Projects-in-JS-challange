let counter = document.querySelector('.counter');
const lower = document.querySelector('.lower');
const add = document.querySelector('.add');
let count = 0;


const subtractOne = () => {
    count--;
    counter.innerHTML = count;
    console.log("dupa");
    if (count < 0) {counter.style.color = "red"} else if (count === 0) {counter.style.color = "grey"};
}

const addOne = () => {
    count++;
    counter.innerHTML = count;
    console.log("dupa")
    if (count > 0) {counter.style.color = "green"} else if (count === 0) {counter.style.color = "grey"};
}



lower.addEventListener("click", subtractOne);
add.addEventListener("click", addOne);