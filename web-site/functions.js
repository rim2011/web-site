let mainNav = document.getElementById('navbar-example2');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});



var heading = document.querySelector('h1');
var btn = document.querySelector('.fas');
 
btn.addEventListener('click', function () {
  heading.style.color = '#ffd320';
});