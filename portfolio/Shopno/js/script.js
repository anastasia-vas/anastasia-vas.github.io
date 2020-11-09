   //бургер-меню//

   $('.intro_basis__header__burger').click(function (e) {
      e.preventDefault();
      $(".intro_basis__header__menu__links").toggleClass("show");
   });

   $('.intro_basis__header__menu__links li a').click(function(e){
      $(".intro_basis__header__menu__links").toggleClass("show");
   });

