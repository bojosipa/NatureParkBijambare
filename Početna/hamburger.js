
$(document).ready(function(){
    $("#gumb").click(function(){
        $("nav ul").toggleClass("open");
        $("#ikona").toggleClass("open");
    });

    $("#iks").click(function(){
        $("nav ul").removeClass("open");
        $("#ikona").removeClass("open");
    });
});

document.getElementById("gumb").addEventListener("click", function(){
  document.getElementById("logo").classList.toggle("hide-logo");
});

document.getElementById("iks").addEventListener("click", function(){
  document.getElementById("logo").classList.toggle("hide-logo");
});





