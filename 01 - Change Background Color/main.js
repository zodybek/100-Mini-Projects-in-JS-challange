const btn = document.getElementsByTagName("button")[0];
// const body = document.getElementsByTagName("body")[0];

const klikej = () => {
    console.log("KLIKŁĘ");
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}

btn.addEventListener("click", klikej);