let nav = ["სიახლე", "ჩვენ შესახებ", "მაღაზია", "გალერია",]
let navLinks = ["index.html", "Aboutus.html", "products.html", "gallery.html",]
let navtext = "<ul class= 'flex' >"
console.log(navtext);

let navlength = nav.length;

for (let i = 0; i < navlength; i++) {
    navtext += '<li><a href=' + '"' + navLinks[i] + '"' + ">" + nav[i] + "</a>" + "</li>";
    console.log(navtext); 
}

navtext += "</ul>";
console.log(navtext);
document.getElementById("nav").innerHTML = navtext;

