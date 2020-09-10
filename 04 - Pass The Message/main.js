const input = document.querySelector(".input");
const submitBtn = document.querySelector(".submitBtn");
const msg = document.querySelector(".msg");
const notice = document.querySelector(".notice");


const addMsg = () => {
    if (input.value === "") {
        notice.style.display = "block";
    } else {
        notice.style.display = "none";
        msg.innerHTML = input.value;
    }
    input.value = "";
}

submitBtn.addEventListener('click', addMsg)
