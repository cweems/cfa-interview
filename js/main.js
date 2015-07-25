var runMagic = function(){

	//Make list of cities to pick from
	for(var city in weatherData){
		var dataScroll = "";
		if(city === "San Francisco"){
			dataScroll = "#sf"
		}
		if(city === "Oakland"){
			dataScroll = "#oak"
		}
		if(city === "San Jose"){
			dataScroll = "#sj"
		}
		$('#city-picker').append("<li data-scroll='" + dataScroll + "'>" + city + "</li>");
	}

	//Fade out splash modal
	$('#city-picker li').click(function(e){
		e.preventDefault();
		var city = $(this).text();
		$('#welcome-modal').fadeOut();
	});

	//Navigate to section when user clicks
	$("#city-picker li").click(function() {
		var scrollLocation = $(this).data('scroll');
	    $('html, body').animate({
	        scrollTop: ($(scrollLocation).offset().top -75)
	    }, 1000);
	});

	//Navigate to section when user clicks
	$("nav button").click(function() {
		var scrollLocation = $(this).data('scroll');
	    $('html, body').animate({
	        scrollTop: ($(scrollLocation).offset().top -75)
	    }, 1000);
	});

	//Add some extra height to the body to that we can scroll down all the way.

	var totalHeight = $('body').height();
	console.log(totalHeight);
	var panelHeight = $('.panel-default').height();
	console.log(panelHeight);
	var heightToAdd = totalHeight + panelHeight;
	$('body').height(heightToAdd);
}