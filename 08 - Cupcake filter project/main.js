// Filtrowanie przez search box

const allSweets = document.querySelector(".allSweets");
const sweetsCaption = document.querySelectorAll(".sweetsCaption");
const searchBox = document.querySelector("input");
const sweets = document.querySelectorAll(".sweets"); 


const searchSweets = (e) => {    
    let searchFilter = e.target.value.toLowerCase();
    let sweetsCaptionArray = [...sweetsCaption];
    sweetsCaptionArray = sweetsCaptionArray.filter(item => item.textContent.toLowerCase().includes(searchFilter));
    allSweets.textContent = "";
    sweetsCaptionArray.forEach(sweet => allSweets.appendChild(sweet.parentElement));
   }

searchBox.addEventListener('keyup', searchSweets)





// Filtrowanie po wciśnięciu przycisków

const buttons = document.querySelectorAll(".btn-sweets");
let buttonsArray = [...buttons];
let sweetsArray = [...sweets];

buttonsArray.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        allSweets.textContent = "";
        if (e.target.classList.contains("btn-sweets-sweets")) {
            sweetsArray.forEach(function(item){
                if (item.classList.contains("sweet")) {allSweets.appendChild(item)}
            })}
        else if (e.target.classList.contains("btn-sweets-cupcakes")) {
            sweetsArray.forEach(function(item){
                if (item.classList.contains("cupcake")) {allSweets.appendChild(item)}
            })}
        else if (e.target.classList.contains("btn-sweets-cakes")) {
            sweetsArray.forEach(function(item){
                if (item.classList.contains("cake")) {allSweets.appendChild(item)}
            })}
        else if (e.target.classList.contains("btn-sweets-donuts")) {
            sweetsArray.forEach(function(item){
                if (item.classList.contains("donut")) {allSweets.appendChild(item)}
            })}
        else (sweetsArray.forEach(function(item) {allSweets.appendChild(item)}))

        })})