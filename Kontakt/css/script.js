
close.addEventListener('click', function(){
    menu.classList.remove('open');
    icon.classList.remove('hide');
});


document.getElementById("gumb").addEventListener("click", function(){
    var menu = document.querySelector("nav ul");
    menu.classList.toggle("shown");
    var icon = document.querySelector("#gumb #ikona");
    if(icon.classList.contains("fa-bars")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times-circle");
    } else {
        icon.classList.remove("fa-times-circle");
        icon.classList.add("fa-bars");
    }
});

document.getElementById("iks").addEventListener("click", function(){
    var menu = document.querySelector("nav ul");
    menu.classList.toggle("shown");
    var icon = document.querySelector("#gumb i");
    if(icon.classList.contains("fa-bars")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times-circle");
    } else {
        icon.classList.remove("fa-times-circle");
        icon.classList.add("fa-bars");
    }
});
