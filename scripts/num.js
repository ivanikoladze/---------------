

// const damateba = () =>{
//     document.querySelector(".buyQuan").innerHTML="რაოდენობა: " + quanValue;
// }


const gadaxda = () =>{
    let value = document.querySelector("#quantity").value;
    document.querySelector(".cartNum").innerHTML = value;
    let nameValue = document.querySelector("#axali").textContent;
    let quanValue = document.querySelector("#quantity").value;
    let priceValue = document.querySelector(".price").textContent;
    
    document.querySelector(".buyName").innerHTML=nameValue;
    document.querySelector(".buyQuan").innerHTML="რაოდენობა: " + quanValue;
    document.querySelector(".buyPrice").innerHTML = "&#8382;" + priceValue;
    document.getElementById("jami").innerHTML = "ჯამში: " + "&#8382;" + priceValue * quanValue + ".00";
}



