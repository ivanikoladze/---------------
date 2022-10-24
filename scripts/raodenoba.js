
const actChange = (element, moqmedeba, oldItem, className) => {
    let actItem = document.getElementById(element);
    actItem.addEventListener(moqmedeba, function(){
        document.getElementById(oldItem).classList.add(className)
    })
}

actChange("damateba", "click", "shedzena", "gamochena" );


const gamortva = () => {
    document.getElementById("shedzena").classList.remove("gamochena")
}


let a = document.querySelectorAll("#agwera");
a.forEach((element)=>{
    element.addEventListener("click", function(){
        document.querySelector(".chamoshla").classList.toggle("chamoshla2")
    })
});

const su = ()=>{
    let h = document.getElementById("chevron-down");
    if(h.innerHTML.includes("fa-solid fa-circle-chevron-down") == true){
        h.innerHTML = '<i class="fa-solid fa-circle-chevron-up"></i>';
    }else{
        h.innerHTML = '<i class="fa-solid fa-circle-chevron-down"></i>';
    }
}

