const buttons = document.querySelectorAll(".button");
const image = document.querySelector(".image");
const duckies = ["img/ducks1.jpg", "img/ducks2.jpg", "img/ducks3.jpg", "img/ducks4.jpg"];
let count = 0;





buttons.forEach(function(btn) {
    btn.addEventListener("click", changePic = () => {
        if (btn.classList.contains('left')) {
            count--;
            if (count < 0) {count = duckies.length -1};
            image.src = duckies[count];
            console.log(count);
        }
        else if (btn.classList.contains('right')) {
            count++;
            if (count > duckies.length -1) {count = 0};
            image.src = duckies[count];
            console.log(count);
        }
        
    }
    
    
    
    
    )
});



