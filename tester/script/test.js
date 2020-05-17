$(document).ready(function(){
	// Slider
	var slider = $(".test").slick({
		infinite: false,
		variableWidth: true,
		centerMode: true,
		arrows: false,
		swipe: false,
		adaptiveHeight: true,
	});
	// Test
	var points = 0;
		$(".test__option").on("click",function(){
		if(+$(this).attr('val') === 1){
			$(this).addClass('activeTrue');
			points++;
		} else {
			$(this).addClass('activeFalse');
		} 
		if(+slider.slick('slickCurrentSlide') + 2 !== +$(slider).slick("getSlick").slideCount) {
			$(".test").slick('slickNext');
			console.log(slider.slick('slickCurrentSlide'));
			// alert( $(slider).slick("getSlick").slideCount);
		} else{
			$("#finally span").html(`${points} баллов`);
			$(".test").slick('slickNext');

		}
		
	}) 
});

