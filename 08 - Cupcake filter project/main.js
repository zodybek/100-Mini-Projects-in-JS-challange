const allSweets = document.querySelector(".allSweets");
const sweetsCaption = document.querySelectorAll(".sweetsCaption");
const searchBox = document.querySelector("input");
const sweets = document.querySelectorAll(".sweets"); 


const dupa = (e) => {    
    let searchFilter = e.target.value.toLowerCase();
    console.log(searchFilter);
    let sweetsCaptionArray = [...sweetsCaption];
    sweetsCaptionArray = sweetsCaptionArray.filter(item => item.textContent.toLowerCase().includes(searchFilter));
    console.log(sweetsCaptionArray);
    allSweets.textContent = "";
    sweetsCaptionArray.forEach(sweet => allSweets.appendChild(sweet.parentElement));
   }

searchBox.addEventListener('keyup', dupa)



































// sweetsCaptionArray.forEach((item) => {
//     if (item.innerText.includes(searchFilter)){
//         console.log("WIN");
//         item.innerHTML = "klusia"
//     } else {
//         console.log("LOSE");
//         item.innerHTML = "zosia"
//     }
// })




// const searchSweet = (e) => {
//     const searchText = e.target.value.toLowerCase()
//     let sweetsCaptionArray = [...sweetsCaption];
//     sweetsCaptionArray = sweetsCaptionArray.filter(podpis => podpis.textContent.toLowerCase().includes(searchText));
//     console.log(sweetsCaptionArray);
//     console.log(searchText);


//     // sweetsCaptionArray.forEach(function(sweetItem) {
//     //     if (searchText === sweetsCaptionArray) {console.log("klusia")} else {console.log("dupa")}
       
//     // })
    
//     // sweetsCaptionArray.forEach(function(podpis) {
//     //     if (sweetsCaptionArray === searchText) {console.log("WIN")}
//     // })

   
//     // allSweets.textContent = "";
//     // sweetsCaptionArray.forEach(caption => console.log(searchText))
    
// }

// input.addEventListener('input', searchSweet)





