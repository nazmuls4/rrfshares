/* ---------------------------------------------
 common scripts
 --------------------------------------------- */
(function($) {
    'use strict'; // use strict to start

    jQuery(document).ready(function($) {
	           
        
			$(".main-meu").sticky();

    });

	

    jQuery(window).load(function() {
		
			jQuery('.project-list').isotope();
    });




}(jQuery));