$(document).ready(function() {

	var button = $(".expand_button");
	var modal_window = $("#modal_window")[0];
	var close_btn = $("#close_button");
	var website_img = $("#large_website_img");
	var title = $("#client_title");
	var desc = $("#client_desc");
	var hyperlink_button = $("#website_link");
	var client_id;
	var flipper = $(".flipper");

	button.click(function() {
		//make modal window visible by changing display to block
		modal_window.style.display = "block";
		$("body").css("overflow", "hidden");

		client_id = $(this).attr("id");

		switch (client_id) {

		case "one":
			title.text("JJIM Trading Company");
			desc.text("Trinidad and Tobago's first online store catered to everyday items.  \
								An e-commerce website was designed, which allows users to view, order \
								and purchase products sold. The website is a responsive design, \
								which enables tailored experiences to computers, tablets and phones. \
								The logo was custom-designed in Photoshop as requested by the customer. \
								Website contains an easy-to-use interface where the customer can manage \
								the platform without previous web design experience. An SSL certificate \
								was added to ensure that the login, ordering, payment and navigation process of \
								the website is safe to use. ");
			website_img.css({
				"background-image": "url(icons/jjim_ss.png)",
				"background-size": "100% 80%",
				"background-position": "center",
				"background-repeat": "no-repeat"
			});
			hyperlink_button.attr("href", "https://www.jjimtrading.com/");
			break;

		case "two":
			title.text("Silicon Valley Fan Site");
			desc.text("This website is a website built for the fanbase of the HBO hit series, Silicon Valley \
								This website is an one-page, sandwich layout which uses parallax scrolling. This project includes\
								features such as images, social media icons a contact form which sends to an e-mail. Animations \
								such as smooth scrolling, highlighted hovers and a resizing contact form sumbit button were implemented. \
								This website was also built responsively, with tailored layouts for the computer, tablet and mobile phones.\
								Website also contains metadata implemented to allow search engines to find and list the website when searched \
								for on any search engine.");
						website_img.css({
							"background-image": "url(icons/sv_ss.png)",
							"background-size": "100% 80%",
							"background-position": "center",
							"background-repeat": "no-repeat"
						});
			hyperlink_button.attr("href", "http://www.svfansite.com/");
			break;

		case "three":
			title.text("Weight Tracker Web Application");
			desc.text("Weight Tracker is a custom-made web application built off the Django platform. \
			This platform was used to build a tailored application rather than website, using bootstrap, \
			python and core building technologies for websites: HTML, CSS & javascript. Features include \
			a custom login, signup, user profiles, adding, deleting, editing and viewing items based \
			off the CRUD storage protocol. This application was made responsive so that consumers on \
			all devices were able to operate the application.");
						website_img.css({
							"background-image": "url(icons/django_ss.png)",
							"background-size": "100% 80%",
							"background-position": "center",
							"background-repeat": "no-repeat"
						});
			hyperlink_button.attr("href", "http://etidesigns.pythonanywhere.com");
			break;

		case "four":
			title.text(client_id);
			desc.text("lorem ipsum is simply dummy text of the \
						printing and typesetting industry. lorem ipsum has been the industrys standard dummy \
						text ever since the 1500s, when an unknown printer took a galley of type and scrambled it \
						to make a type specimen book. it has survived not only five centuries, but also the leap into \
						electronic typesetting, remaining essentially unchanged. it was popularised in the 1960s with \
						the release of letraset sheets containing lorem ipsum passages, and more recently with desktop \
						publishing software like aldus pagemaker including versions of lorem ipsum. ");
			hyperlink_button.attr("href", "https://www.facebook.com/");
			break;

		case "five":
			title.text(client_id);
			desc.text("lorem ipsum is simply dummy text of the \
						printing and typesetting industry. lorem ipsum has been the industrys standard dummy \
						text ever since the 1500s, when an unknown printer took a galley of type and scrambled it \
						to make a type specimen book. it has survived not only five centuries, but also the leap into \
						electronic typesetting, remaining essentially unchanged. it was popularised in the 1960s with \
						the release of letraset sheets containing lorem ipsum passages, and more recently with desktop \
						publishing software like aldus pagemaker including versions of lorem ipsum. ");
			hyperlink_button.attr("href", "https://www.instagram.com/");
			break;

		case "six":
			title.text(client_id);
			desc.text("lorem ipsum is simply dummy text of the \
						printing and typesetting industry. lorem ipsum has been the industrys standard dummy \
						text ever since the 1500s, when an unknown printer took a galley of type and scrambled it \
						to make a type specimen book. it has survived not only five centuries, but also the leap into \
						electronic typesetting, remaining essentially unchanged. it was popularised in the 1960s with \
						the release of letraset sheets containing lorem ipsum passages, and more recently with desktop \
						publishing software like aldus pagemaker including versions of lorem ipsum. ");
			hyperlink_button.attr("href", "https://www.twitter.com/");
			break;

		default:
			title.text(client_id);
			desc.text("lorem ipsum is simply dummy text of the \
						printing and typesetting industry. lorem ipsum has been the industrys standard dummy \
						text ever since the 1500s, when an unknown printer took a galley of type and scrambled it \
						to make a type specimen book. it has survived not only five centuries, but also the leap into \
						electronic typesetting, remaining essentially unchanged. it was popularised in the 1960s with \
						the release of letraset sheets containing lorem ipsum passages, and more recently with desktop \
						publishing software like aldus pagemaker including versions of lorem ipsum. ");
			hyperlink_button.removeAttr("href");
			break;
		}
	});

	close_btn.click(function() {
		//close modal window by changing display to none
		modal_window.style.display = "none";
		$("body").css("overflow", "auto");
		title.text("CLIENT");
		desc.text("lorem ipsum is simply dummy text of the \
						printing and typesetting industry. lorem ipsum has been the industrys standard dummy \
						text ever since the 1500s, when an unknown printer took a galley of type and scrambled it \
						to make a type specimen book. it has survived not only five centuries, but also the leap into \
						electronic typesetting, remaining essentially unchanged. it was popularised in the 1960s with \
						the release of letraset sheets containing lorem ipsum passages, and more recently with desktop \
						publishing software like aldus pagemaker including versions of lorem ipsum. ");
		launch_button.removeAttr("href");
	});

	//close modal window if user clicks outside of modal window
	$(window).click(function(event) {
		if (event.target == modal_window) {
			modal_window.style.display = "none";
			$("body").css("overflow", "auto");

			title.text("CLIENT");
			desc.text("lorem ipsum is simply dummy text of the \
						printing and typesetting industry. lorem ipsum has been the industrys standard dummy \
						text ever since the 1500s, when an unknown printer took a galley of type and scrambled it \
						to make a type specimen book. it has survived not only five centuries, but also the leap into \
						electronic typesetting, remaining essentially unchanged. it was popularised in the 1960s with \
						the release of letraset sheets containing lorem ipsum passages, and more recently with desktop \
						publishing software like aldus pagemaker including versions of lorem ipsum. ");
		launch_button.removeAttr("href");
		}
	});

	if ($(window).width() <= 768) {
			$("#one").wrap($('<a>',{
   		href: "https://www.jjimtrading.com/"
			}));
			$("#two").wrap($('<a>',{
   		href: "https://www.svfansite.com/"
			}));
			$("#three").wrap($('<a>',{
   		href: "https://etidesigns.pythonanywhere.com"
			}));
			/*
			$(".client_card #four").attr("href", );
			$(".client_card #five").attr("href", );
			$(".client_card #six").attr("href", );
			*/
	}

});
