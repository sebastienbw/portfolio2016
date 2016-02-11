if (shouldOpen($("#portfolio-row-1-title"))) {
	console.log("open");
}

function shouldOpen(element) {
	var $elem = $(element);
	var $window = $(window);

	var docViewTop = $window.scrollTop();

	var elemTop = $elem.offset().top;

	return (elemTop >= docViewTop); 
}