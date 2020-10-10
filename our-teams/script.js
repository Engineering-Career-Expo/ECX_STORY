mybutton = document.getElementById("myBtn");

window.onscroll = function () {
    scrollFunction () 
};

function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let drop1 = document.querySelector("#cancel");
let drop = document.querySelector(".navbarlist1 ul");

document.querySelector("#burger").addEventListener("click", function () {
  document.querySelector("#burger").style.display="none";
    drop1.style.display = "flex";
   drop.style.display = "block";
});
document.querySelector(".arrow2").addEventListener("click", function () { 
  document.querySelectorAll(".arrowdwn")[0].style.display = "block";
   document.querySelectorAll(".arrowdwn")[1].style.display = "block";
});
document.querySelector("#cancel").addEventListener("click", function () {
  document.querySelector("#burger").style.display = "block";
  drop1.style.display = "none";
  drop.style.display = "none";
});