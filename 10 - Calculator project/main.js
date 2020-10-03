const input = document.querySelector('input')
const cancel = document.querySelector('.cancel')
const buttons = document.querySelectorAll('.number')
const buttonsArray = [...buttons]
const enter = document.querySelector('.enter') 

const beng = () => {
    console.log(input.value)
}

input.addEventListener('input', beng)


cancel.addEventListener('click', function() {
    input.value = "";
})

buttonsArray.forEach(function(btn, index) {
    btn.addEventListener('click', function() {
        input.value += btn.innerHTML;
        console.log(btn.innerHTML)
})
    })

enter.addEventListener('click', function() {
    if (input.value === "") {alert("Musisz najpierw wprowadzić dane")}
    else {
        let result = eval(input.value);
        input.value = result;
    } 
})