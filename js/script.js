$(document).ready(function() {
 
 
   $("a").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + -20+ "px"
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
   });
 
 $(".burger__menu").click(function(){


   $(".burger__menu").toggleClass("active");
 })
});
