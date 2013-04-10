$(document).ready(function(){

	//mapbox.auto('map', 'examples.map-vyofok3q');

	mapbox.auto('map', ['http://a.tiles.mapbox.com/v3/moasth.map-pzgtnf9m,moasth.map-czvq0pvt,moasth.chateaux.jsonp', 'http://a.tiles.mapbox.com/v3/moasth.map-pzgtnf9m,moasth.map-czvq0pvt.jsonp'], function(map, details){
		//var layers = document.getElementById('map-ui');
		map.disableLayerAt(1);
		//map.ui.hash.add();

		map.setZoomRange(6, 15);
		map.setPanLimits([{
			lat: 35.3073,
			lon: -19.6518
		}, {
			lat: 59.5726,
			lon: 34.0933
		}]);
	});

	$('.nav-pills a').on("click", function(e) {

		var  $this = $(this);

		$("div.navbar ul.nav-pills li.active").removeClass("active")
		$this.parent("li").addClass("active");

		var     id = $this.attr('id'),
		contentId = '#' + id + '-content',
		$data = $(contentId).html();

		$('.content').html($data);

	});
});


