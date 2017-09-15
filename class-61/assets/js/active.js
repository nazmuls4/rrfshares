/* ---------------------------------------------
 common scripts
 --------------------------------------------- */
(function($) {
    'use strict'; // use strict to start

    jQuery(document).ready(function($) {
	           
        var center = [37.772323, -122.214897];
	    $('#map')
	      .gmap3({
	        center: center,
	        zoom: 13,
	        mapTypeId : google.maps.MapTypeId.ROADMAP,
	        scrollwheel:false,
	      })
	      .marker({
	        position: center,
	        icon: 'http://maps.google.com/mapfiles/marker_green.png'
	      });
        
    });

	

    jQuery(window).load(function() {
		

    });




}(jQuery));