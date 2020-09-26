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
 
 
});
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger').toggleClass('active');
      $('.burger').toggleClass('activ');
      $('.navburger').toggleClass('activpower');
      $('.header__wrap').toggleClass('na')
		
	});
});