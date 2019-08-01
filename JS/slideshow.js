$(document).ready(function() {

	//variables
	var prev_btn = $("#prev");
	var next_btn = $("#next");
	var thumbnails = $(".thumbnails");
	var slide_tiles = $(".slide_tiles");
	var current_tile = "current_tile";
	var slide_images = $(".large_icons");
	var slideshow_content = $("#slideshow_items");
	var slide_title = $("#slide_title");
	var slide_description = $("#slide_description");
	var slide_index = 1;
	var interval = setInterval(function() {
						slide_index+=1;
        				setSlide(slide_index);
    				}, 30000);

	slide_images.css({
						"background-color": "#333333",
						"background-image": "url(icons/web_design.png)",
						"background-size": "70% auto",
						"background-position": "center",
						"background-repeat": "no-repeat"
					});

	slide_title.text("WEBSITE DESIGN");
  slide_description.text("Your online presence is said to be the window to what you represent, \
	 therefore it is important to create a meaningful presence. Websites are therefore uniquely designed \
	 according to your needs with as little hassle as possible. This service is done in a manner that is  \
	 as worry-free to the customer as possible, with timely deadlines fulfilled and prompt feedback. Services also \
	 include demonstration of the website to clients, website hosting and monthly maintenance.");
	slide_tiles.eq(slide_index-1).addClass(current_tile);

	prev_btn.click(function() {
		slide_index-=1
		setSlide(slide_index);
	});

	next_btn.click(function() {
		slide_index+=1
		setSlide(slide_index);
	});

	function setSlide(num) {

		slide_tiles.removeClass(current_tile);

		if (num > thumbnails.length) {
			slide_index = 1;
		}

		if (slide_index < 1) {
			slide_index = thumbnails.length;
		}

		switch (slide_index) {
			case 1:
				slideshow_content.stop().animate({opacity: 0}, 250, function() {

        			slide_images.css({
        				"background-image": "url(icons/web_design.png)"
        			});

        			slide_title.text("WEBSITE DESIGN");
        			slide_description.text("Your online presence is said to be the window to what you represent, \
							 therefore it is important to create a meaningful presence. Websites are therefore uniquely designed \
							 according to your needs with as little hassle as possible. This service is done in a manner that is  \
							 as worry-free to the customer as possible, with timely deadlines fulfilled and prompt feedback. Services also \
							 include demonstration of the website to clients, website hosting and monthly maintenance.");
        			slideshow_content.animate({opacity: 1},{duration:500});

        		});

				slide_tiles.eq(0).addClass(current_tile);
				break;

			case 2:

				slideshow_content.stop().animate({opacity: 0}, 250, function() {

        			slide_images.css({
        				"background-image": "url(icons/graphic_design.png)",
        			});

        			slide_title.text("GRAPHIC DESIGN");
        			slide_description.text("A picture speaks a thousand words. \
							High quality graphics are designed in Photoshop and are edited to perfection. \
							Services include the designs of logos, animations, special effects and \
							manipulation of images. Eye-catching flyers, call cards, letterheads \
							and other branding methods are uniquely created and delivered to \
							suit the image you want to project.");
        			slideshow_content.animate({opacity: 1},{duration:500});

        		});

				slide_tiles.eq(1).addClass(current_tile);
				break;

			case 3:

				slideshow_content.stop().animate({opacity: 0}, 250, function() {

        			slide_images.css({
        				"background-image": "url(icons/responsive.png)",
        			});
        			slide_title.text("RESPONSIVE DESIGN");
        			slide_description.text("It's a known fact that the devices surfing through the internet \
							has changed over time. The device paradigm has shifted from desktops to include laptops, tablets \
							and mobile phones. It is therefore essential for your website to portray a beautiful aesthetic \
							despite the device it is displayed on. Websites designed here are built for most modern devices, \
							despite screen size or operating system so that you don't lose any consumer demographic.");
        			slideshow_content.animate({opacity: 1},{duration:500});

        		});

				slide_tiles.eq(2).addClass(current_tile);
				break;

			case 4:

				slideshow_content.stop().animate({opacity: 0}, 250, function() {

        			slide_images.css({
        				"background-image": "url(icons/mobile_apps.png)",
        			});
        			slide_title.text("ANDROID APP DESIGN");
        			slide_description.text("Approximately 3 out of 4 mobile users are using the android platform.\
							The mass overtaking of the android system therefore provides every reason to build and launch your \
							mobile app on the play store. Services also include updating, maintenance and deployment of apps \
							in order to give your mobile app the perfect look and feel. ");
        			slideshow_content.animate({opacity: 1},{duration:500});

        		});

				slide_tiles.eq(3).addClass(current_tile);
				break;

			default:
				alert("Something went wrong with the slideshow. Refresh page and try again.\n\nIf problem continues to occur, please contact me in the form at the end of the page.");
		}

		clearInterval(interval);
		 interval = setInterval(function() {
						slide_index+=1;
        				setSlide(slide_index);
    					}, 20000);
	};

});
