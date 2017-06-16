
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: 43.24, lng: 76.93},
	  zoom: 10
	});

	var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var markers = locations.map(function(location, i) {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
      });
    });

    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}
var locations = [
    {lat: 43.281900, lng: 76.815038},
    {lat: 43.326871, lng: 76.828771},
    {lat: 43.274901, lng: 76.871343},
    {lat: 43.306888, lng: 76.922155},
    {lat: 43.356834, lng: 76.982579},
    {lat: 43.300892, lng: 76.992192},
    {lat: 43.210877, lng: 76.994939},
    {lat: 43.317685, lng: 76.956487},
    {lat: 43.185849, lng: 76.924901},
    {lat: 43.147787, lng: 76.869969},
    {lat: 43.175835, lng: 76.824651},
    {lat: 43.241897, lng: 76.805425}
]



