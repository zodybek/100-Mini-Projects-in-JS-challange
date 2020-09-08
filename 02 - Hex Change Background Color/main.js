const btn = document.getElementsByTagName('button')[0];
const podpis = document.querySelector('.podpis');


changeColor = () => {

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    podpis.innerHTML = `Kolor to: #${randomColor}`;
}

btn.addEventListener("click", changeColor)
