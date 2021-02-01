$(document).ready(function(){
	
	const swiper = new Swiper('.swiper-container', {
	  // Optional parameters
	  loop: true,

	  // If we need pagination
	  pagination: {
		el: '.swiper-pagination',
		clickable: true,
	  },

	  // Navigation arrows
	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
	   autoplay: {
		delay: 3000,
		disableOnInteraction: false,
		 },
	});
});