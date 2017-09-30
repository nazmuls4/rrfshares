/* ---------------------------------------------
 common scripts
 --------------------------------------------- */
(function($) {
    'use strict'; // use strict to start

    jQuery(document).ready(function($) {
	           
        
			
  		$('[data-toggle="tooltip"]').tooltip()
  		$('[data-toggle="popover"]').popover()

    });

	

    jQuery(window).load(function() {
		
			jQuery('.project-list').isotope();
    });




}(jQuery));