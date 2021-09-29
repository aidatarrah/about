

jQuery(function() {

	$("body").click(function() {
						 $("#overlay").animate({
								 width: "toggle"
						 })
						 $("h1").animate({
								 width: "toggle"
						 })
						 $("#yellowOverlay").animate({
								 width: "toggle"
						 })

			
							$(this).toggleClass("background-image-hover"), 
						    function(){
							$(this).toggleClass("background-image");
						  }

						});
});
 
