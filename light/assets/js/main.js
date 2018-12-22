(function($) {
    "use strict"
    jQuery(document).ready(function() {
        // Smooth Scrolling
        $('a.single-menu').on('click', function(event) {
           var linkHref = $(this).attr('href');
           $('html, body').animate({
                scrollTop: $(linkHref).offset().top
            }, 1200, 'easeInOutExpo');
           event.preventDefault();
       });
        // Profiles Slider
        $('.profiles-slider').owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 3000,
            nav: false,
            dots: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
        // Portfolio Masonry
        var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
			columnWidth: '.grid-item'
			}
		});
        // Portfolio Tab
		$('.portfolio-tab li').on( 'click', function() {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});
        // Portfolio Tab Link Switching
		$('.portfolio-tab li').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
        // Portfolio Image PopUp
        $('.hover-state .popup').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true
            }
        });
        // Fun Facts Counter
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
        // Skills Circle Progressbar
        $('.photoshop-bar').circleProgress({
			value: .8,
			size: 100,
			fill: '#F54EA2',
			thickness: 5,
			emptyFill: '#F6F6F6'
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('.circle-percentage').html(Math.round(80 * progress) + '<i>%</i>');
		});
		$('.html-css-bar').circleProgress({
			value: .9,
			size: 100,
			fill: '#F54EA2',
			thickness: 5,
			emptyFill: '#F6F6F6'
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('.circle-percentage').html(Math.round(90 * progress) + '<i>%</i>');
		});
		$('.javascript-bar').circleProgress({
			value: .7,
			size: 100,
			fill: '#F54EA2',
			thickness: 5,
			emptyFill: '#F6F6F6'
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('.circle-percentage').html(Math.round(70 * progress) + '<i>%</i>');
		});
        $('.wordpress-bar').circleProgress({
			value: .6,
			size: 100,
			fill: '#F54EA2',
			thickness: 5,
			emptyFill: '#F6F6F6'
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('.circle-percentage').html(Math.round(60 * progress) + '<i>%</i>');
		});
        // Clients Slider
        $('.clients-slider').owlCarousel({
            loop: true,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 3000,
            nav: false,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2
                },
                576: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5
                }
            }
        });
    });

    jQuery(window).on('load', function() {
        // WOW JS
        new WOW().init();
        // Preloader
		$('.preloader').fadeOut(500);
    });
})(jQuery);
