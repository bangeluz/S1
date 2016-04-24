var map;
var marker;
function init() {
	var place = new google.maps.LatLng(10.4963276,-66.8488941);
	var mapOptions = {
		center: place,
		zoom: 18,
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	map = new google.maps.Map(document.getElementById("map"),mapOptions);
	marker = new google.maps.Marker ({
		position: place,
		title: "Plaza Altamira",
		map: map
	})
}
