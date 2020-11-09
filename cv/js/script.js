const menu = document.querySelector('.menu');


function openMenu() {
   document.body.style.overflow = "hidden";
   menu.classList.remove('hide');
}

function closeMenu() {
   document.body.style.overflow = "";
   menu.classList.add('hide');
}

function openLink() {
   document.body.style.overflow = "";
   menu.classList.add('hide');
}