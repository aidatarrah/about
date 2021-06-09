


jQuery(function() {

	$("body").hover(function(){
						 $("#overlay").animate({
								 width: "toggle"
						 })
						 $("h1").animate({
								 width: "toggle"
						 })
						 $("#yellowOverlay").animate({
								 width: "toggle"
						 });
				 });
});

/*
jQuery(function() {

	$("body").hover(function(){
						 $("h1").animate({
								 width: "toggle"
						 });
				 });
});
*/

  $(document).ready(function(){
    $("body").hover(function(){
      $(this).css("background-image", "url(img/landing_page_main_hover.jpg)");
      /*document.getElementById("yellowOverlay").style.display = "block";*/
    }, function(){
      $(this).css("background-image", "url(img/landing_page_main.jpg)");
			/*document.getElementById("yellowOverlay").style.display = "none";*/
    });


	/*	$("body").hover(function(){
							 $("#yellowOverlay").animate({
									 width: "toggle"
							 });
					 });
*/

  });
