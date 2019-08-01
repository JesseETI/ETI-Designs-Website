$(document).ready(function() {

	var slide1 = $(".main");
	var slide2 = $(".services");
	var slide3 = $(".about");
	var slide4 = $(".portfolio");
	var slide5 = $(".form");

	slide1.addClass("latched"); //adds class to fix slide

	slide2.css("margin-top", slide1.height() + "px"); //make top margin the height of slide 1

	//Code for triangle div smooth scrolling
	$("#scroll_triangle").click(function() {
		$("html, body").animate({scrollTop: slide2.offset().top}, "slow");
	});
//------------------------------------------------------------------------

	$("nav a").click(function(event) {
		event.preventDefault();

		var id = $(this).attr("id");

		if (id == "service_link") {
			$('html,body').animate({scrollTop:slide2.offset().top}, "slow");
		}

		else {
			$('html,body').animate({scrollTop:$(this.hash).offset().top}, "slow");
		}

	});

});
