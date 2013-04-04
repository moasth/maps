$(document).ready(function(){

	mapbox.auto('map', 'examples.map-vyofok3q');

	$('.nav-pills a').on("click", function(e) {
	  var $this = $(this),
	      id = $this.attr('id'),
	      contentId = '#' + id + '-content',
	      $data = $(contentId).html();

	  $('.content').html($data);

	});
});


