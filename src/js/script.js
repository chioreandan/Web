
document.addEventListener("DOMContentLoaded", function(event) { 

$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});
  });