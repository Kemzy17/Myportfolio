window.onscroll = function () {
  scrollFunction();
};

var topnav = document.getElementById("topnav");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topnav.style.background = "rgb(0,0,0,0.9)";
    topnav.style.transition = ".4s";
  } else {
    topnav.style.background = "none";
    topnav.style.transition = ".4s";
  }
}

var sidenav = document.getElementById("sidenav");
var open = document.getElementById("open");
var close = document.getElementById("close");

function opennav() {
  sidenav.style.position = "fixed";
  sidenav.style.right = "0px";
  open.style.display = "none";
  close.style.display = "flex";
  close.style.transition = "3s";
}
function closenav() {
  sidenav.style.position = "fixed";
  sidenav.style.right = "-250px";
  open.style.display = "flex";
  close.style.display = "none";
  open.style.transition = "3s";
}
