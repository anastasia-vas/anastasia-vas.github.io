// button menu - burger
const burger = document.querySelector(".intro-basis__header__burger");
const menu = document.querySelector(".intro-basis__header__burger__menu");

burger.addEventListener('click', function () {
   menu.classList.toggle('hide');
});

// button Showmore/Show less
const hiddenLogos = document.querySelectorAll(".logotype");
const works = document.querySelectorAll(".work");
const team = document.querySelectorAll(".worker")
const showMoreButtons = document.querySelectorAll(".show-more");
const showMoreIn = document.querySelectorAll(".show-more p.text");
const showMoreIcon = document.querySelectorAll(".icon-d-a");

function activeButton() {
   for (let text = 0; text < showMoreIn.length; text++) {
      console.log(showMoreIn[text])
   }
   for (let icon = 0; icon < showMoreIcon.length; icon++) {
      console.log(showMoreIcon[icon])
   }
   for (let i = 0; i < showMoreButtons.length; i++) {
      console.log(showMoreButtons[i]);
      showMoreButtons[0].addEventListener('click', function () {
         works.forEach(function (event) {
            event.classList.toggle('hidden');
            if (event.classList.contains('hidden')) {
               showMoreIn[0].innerHTML = "Show more"
               showMoreIcon[0].style.transform = "rotate(0)"
            } else {
               showMoreIn[0].innerHTML = "Show less"
               showMoreIcon[0].style.transform = "rotate(180deg)"
            }
         });
      })
      showMoreButtons[1].addEventListener('click', function () {
         team.forEach(function (event) {
            event.classList.toggle('hidden');
            if (event.classList.contains('hidden')) {
               showMoreIn[1].innerHTML = "Show more"
               showMoreIcon[1].style.transform = "rotate(0)"
            } else {
               showMoreIn[1].innerHTML = "Show less"
               showMoreIcon[1].style.transform = "rotate(180deg)"
            }
         });
      })
      showMoreButtons[2].addEventListener('click', function () {
         hiddenLogos.forEach(function (event) {
            event.classList.toggle('hidden');
            if (event.classList.contains('hidden')) {
               showMoreIn[2].innerHTML = "Show more"
               showMoreIcon[2].style.transform = "rotate(0)"
            } else {
               showMoreIn[2].innerHTML = "Show less"
               showMoreIcon[2].style.transform = "rotate(180deg)"
            }
         });
      })
   }
}

activeButton()
