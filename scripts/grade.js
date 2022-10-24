
let star =  document.querySelectorAll(".star");
let shefaseba = document.querySelector(".shefaseba");



    star.forEach((item)=>{
        item.addEventListener("click", function(){
            item.classList.add("shefasebaFeri");
        })
    })