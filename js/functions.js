$(document).ready(function() {
	// search box
	$('.popup').css({ opacity: 0 });

	var searchField = $('.form-container .search-field');
	$('.form-container').submit(function() {
		if(!searchField.val() || searchField.val() == "Type search text here...") {
			$('.popup').css({ opacity: 0, display: 'block' });
			$('.popup').animate(
				{ opacity: 1 },
				{
					duration: 'slow',
					easing: 'easeOutBounce'
				});
			return false;
		}
	});

	searchField.focus(function() {
		if($(this).val() == "Type search text here...") {
			this.value = "";
		}
	});

	searchField.keydown(function() {
		$('.popup').css({ opacity: 0 });
	});


	// banner
	$("#banner1 .rotate").textrotator({
		animation: "fade",
		speed: 2000
	});
	$("#banner2 .rotate").textrotator({
		animation: "spin",
		speed: 2150
	});
	$("#banner3 .rotate").textrotator({
		animation: "flipUp",
		speed: 2300
	});
});

