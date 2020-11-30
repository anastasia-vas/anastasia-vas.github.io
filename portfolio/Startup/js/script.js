$(document).ready(function () {

   $("button").click(function () {
      var value = $(this).attr('data-filter');

      if (value == "all") {
         $('.filter').show('1000');
      }
      else {
         $(".filter").not('.' + value).hide('3000');
         $('.filter').filter('.' + value).show('3000');

      }
   });

   $(".burger").click(function () {
      $(".menu").removeClass("hide");
      $("body").addClass("hidden");
   });

   $(".close").click(function () {
      $(".menu").addClass("hide");
      $("body").removeClass("hidden");
   });

   $(".links li a").click(function () {
      $(".menu").addClass("hide");
      $("body").removeClass("hidden");
   });

});

