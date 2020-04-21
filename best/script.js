
CheakQin();
$(window).resize(function(){
	CheakQin()
})
function CheakQin(){
	if($(window).width() <= 964){
		if( !($(".menu__list").hasClass('done') )){
		$(".menu__list").clone().appendTo(".header-menu");
		$(".menu .menu__list").remove();
		$(".menu__list").addClass("done")
		}
	} else{
		if(($(".menu__list").hasClass('done') )){
			$(".menu__list").clone().appendTo(".menu");
			$(".header-menu .menu__list").remove();
			$(".menu__list").removeClass("done");
		}
	}
}
$(".header-menu-btn").on("click", function(){
	if($(".header-menu").hasClass("active")){
		$(".header-menu").removeClass("active")
	} else{
		$(".header-menu").addClass("active")
	}
})