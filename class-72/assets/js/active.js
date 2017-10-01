/* ---------------------------------------------
 common scripts
 --------------------------------------------- */
(function($) {
    'use strict'; // use strict to start

    jQuery(document).ready(function($) {
	   
        
        
        //portfolio
        $(".cat-sider").owlCarousel({
            items: 3, // Default is 3
            loop: true,
            autoplay: false,
            autoplayTimeout: 3000, // Default is 5000
            smartSpeed: 1000, // Default is 250
            dots: true,
            nav: false,
            margin:30,
        });
        
        $('.counter-conter span').counterUp({
            delay: 10,
            time: 1000
        });
        
        
        
        
    });

	

    jQuery(window).load(function() {
		

    });




}(jQuery));