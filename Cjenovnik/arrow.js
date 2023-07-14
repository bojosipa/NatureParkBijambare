window.onload = function() {
    document.getElementById("return_top").style.display = "none";
  }

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    return_top.style.display = "block";
  } else {
    return_top.style.display = "none";
  }
}



function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

