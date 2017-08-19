$(document).ready(function(){
  $('.single-item').slick({
    autoplay:true,
    dots: true,
    arrows:true
  });
  owlCrouselFeatureSlide();
	sliderMain();
	fullHeight();
	var url = window.location.pathname;
	var filename = url.substring(url.lastIndexOf('/'+1));
	if (filename == "index") {
		hidemyassbeach();
	}
});

$(function() {
    $('#ajaxform').on('submit', function(e) {
        $.ajax({
            type: "POST",
            url: "email.php",
            data: $(this).serialize(),
			success : function( data ) {
                         return alert('Message has been successfully sent');       
                      },
            error   : function(){
                         return alert('Something wrong');
                      }
        }).done(function(response) {
		});
		e.preventDefault();
    	});
	});

	$(function() {
    $('#main-contact-form').on('submit', function(e) {
        $.ajax({
            type: "POST",
            url: "email.php",
            data: $(this).serialize(),
			success : function( data ) {
                         return alert('Message has been successfully sent');       
                      },
            error   : function(){
                         return alert('Something wrong');
                      }
        }).done(function(response) {
		});
		e.preventDefault();
    	});
	});


$(window).on("load", function(){ 
    $("#twenty1").twentytwenty();
    $("#twenty2").twentytwenty();
    $("#twenty3").twentytwenty();
    $("#twenty4").twentytwenty();
    $("#twenty5").twentytwenty();
    $('#my-tab-content').addClass("tab-content");
  });

  var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}

	};

	var sliderMain = function() {
		
	  	$('#nyrst-hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	  	$('#nyrst-hero .flexslider .slides > li').css('height', $(window).height());	
	  	$(window).resize(function(){
	  		$('#nyrst-hero .flexslider .slides > li').css('height', $(window).height());	
	  	});

	};

$(window).resize(function() {
  $('#my-tab-content').hide().show(0);
});

var owlCrouselFeatureSlide = function() {
		
		var owl = $('.owl-carousel');

		owl.on('initialized.owl.carousel change.owl.carousel',function(elem){
			var current = elem.item.index;
			$(elem.target).find(".owl-item").eq(current).find(".to-animate").removeClass('fadeInUp animated');
		});
		owl.on('initialized.owl.carousel changed.owl.carousel',function(elem){
			window.setTimeout(function(){
				var current = elem.item.index;
				$(elem.target).find(".owl-item").eq(current).find(".to-animate").addClass('fadeInUp animated');
			}, 400);
     	});

		owl.owlCarousel({
			items: 1,
		    margin: 0,
		    responsiveClass: true,
		    nav: true,
		    dots: true,
		    smartSpeed: 500,
		    autoplay: true,
        loop:true,
			autoplayTimeout: 5000,
			autoplayHoverPause: false,
		    navText: [	
		      "<i class='icon-arrow-left2 owl-direction'></i>",
		      "<i class='icon-arrow-right2 owl-direction'></i>"
	     	],

		});
		
	};


	function hidemyassbeach() {
    var x = document.getElementById('hidemyassbitch');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
	
}



(function () {
    'use strict';

    if (!('addEventListener' in window)) {
        return;
    }

    var htmlElement = document.querySelector('html');

    function touchStart () {
        document.querySelector('html').classList.remove('threed');

        htmlElement.removeEventListener('touchstart', touchStart);
    }

    htmlElement.addEventListener('touchstart', touchStart);
}());




$(function(){
    $('.repeat').click(function(){
        var classes =  $(this).parent().attr('class');
        $(this).parent().attr('class', 'animate');
        var indicator = $(this);
        setTimeout(function(){ 
            $(indicator).parent().addClass(classes);
        }, 20);
    });
});