let shetyobineba = document.querySelector(".shetyobineba");
let chatClose = document.querySelector(".chatClose");
let chatBox = document.querySelector(".chatBox");
let send = document.querySelector("#gagzavna");

shetyobineba.addEventListener("click", function(){
    chatBox.style.display = "block";
})

chatClose.addEventListener("click", function(){
    chatBox.style.display = "none";
})

send.addEventListener("click", function(){
    chatBox.style.display = "none";
})