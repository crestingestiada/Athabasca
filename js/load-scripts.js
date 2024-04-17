/*
Owl Carousel for related programs on the program summary pages
=====================================================================*/
if ($("#related-carousel").length) {
	$.getScript(
		"https://www.athabascau.ca/framework/v2/theme/js/vendor/owl.carousel.min.js"
	).done(function () {
		var $carouselRelated = $(".owl-carousel");
		$carouselRelated.owlCarousel({
			loop: false,
			nav: true,
			dots: true,
			margin: 20,
			lazyLoad: true,
			responsive: {
				0: {
					items: 1,
					stagePadding: 0,
				},
				800: {
					items: 2,
				},
				1250: {
					items: 3,
				},
			},
			onInitialized: afterLoad,
		});
		function afterLoad() {
			$(".owl-dot span").each(function () {
				$(this).html(
					'<span class="screenreader">View more related programs</span>'
				);
			});
		}
	});
}

/*
Owl Carousel for content row
=====================================================================*/
if ($("#carousel").length) {
	$.getScript(
		"https://www.athabascau.ca/framework/v2/theme/js/vendor/owl.carousel.min.js"
	).done(function () {
		var $standardCarousel = $(".standard-carousel");
		$standardCarousel.owlCarousel({
			loop: false,
			nav: true,
			dots: true,
			lazyLoad: true,
		});
	});
}

/*
Fancybox 3 initialization and options
=====================================================================*/
if ($("[data-fancybox]").length) {
	$.getScript(
		"https://www.athabascau.ca/framework/v2/theme/js/vendor/jquery.fancybox.min.js"
	).done(function () {
		$("[data-fancybox]").fancybox({
			loop: true,
			buttons: ["fullScreen", "thumbs", "zoom", "close"],
			iframe: {
				preload: false,
			},
		});

		/* iframe options */
		$("[data-iframe-fancybox]").fancybox({
			toolbar: true,
			smallBtn: false,
			iframe: {
				preload: true,
			},
		});
	});
}

/*
Tooltips
=====================================================================*/
if ($(".tooltip").length) {
	$.getScript(
		"https://www.athabascau.ca/framework/v2/theme/js/vendor/tooltips.min.js"
	).done(function () {
		$(".tooltip").tooltipster({
			animation: "grow",
			delay: 200,
			theme: "tooltipster-shadow",
			maxWidth: 350,
			trigger: "click",
		});
	});
}
