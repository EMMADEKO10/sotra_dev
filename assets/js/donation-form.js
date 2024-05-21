
(function($) {
    "use strict";

    $(document).on('ready', function() {


        $('.form-btn').click(function(){
		    $('.form-btn').removeclass('active').addclass('inactive');
		    $(this).removeclass('inactive').addclass('active');
	    });
      

    }); // end document ready function
})(jQuery); // End jQuery