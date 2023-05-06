// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){

	/*-------------------------------------------    
		Equal Height Columns
	-------------------------------------------*/

	function equalHeight(group) {
		tallest = 0;
		group.each(function() {
		thisHeight = $(this).height();
			if(thisHeight > tallest) {
			tallest = thisHeight;
			}
		});
		group.height(tallest);
	}
	 
	equalHeight($(""));						   

});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/