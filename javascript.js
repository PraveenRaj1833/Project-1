function sayHello(){
    let input=document.getElementById("inputName");
    alert(`hello ${input.value}`) ;
}

function mouseIn(){
    let img = document.getElementById("logo");
    img.setAttribute("height","250px");
    img.setAttribute("width","200px");
}

function mouseOut(){
    let img = document.getElementById("logo");
    img.setAttribute("height","200px");
    img.setAttribute("width","150px");
}