(function($) {


	/*start Shariful*/
	$( function() {
	    $( ".datepicker" ).datepicker();
	  } );
    

/*Start Noyon*/



/*Start Milon*/



/*Start Shariful*/



/*Start Rannojit*/

$('.popup-map-btn').on('click', function(e){
	e.preventDefault();
	$('.popup-solar-heat-map-cntlr').fadeIn(300);
});
$('.popup-close').on('click', function(){
	$('.popup-solar-heat-map-cntlr').fadeOut(300);
});


    
})(jQuery);