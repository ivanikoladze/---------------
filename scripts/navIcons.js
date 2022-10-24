let glass =  document.querySelectorAll(".magnifying-glass");
let sign = document.querySelector(".signIn")

sign.addEventListener("mouseover", function(){
    document.querySelector(".signIn").style.backgroundColor = " rgb(255, 148, 132)";
    sign.addEventListener("mouseout", function(){
        document.querySelector(".signIn").style.backgroundColor = "rgba(242, 233, 191, 0.7)";
    })
})

let resp = ()=>{
    document.querySelector(".nav").classList.toggle("navResponsive") 
    document.querySelector(".respback").classList.toggle("navResponsive") 
};
