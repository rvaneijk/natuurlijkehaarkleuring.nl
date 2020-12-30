// Routekaart

var windowwidth = $(window).width();

L.mapbox.accessToken = 'pk.eyJ1IjoicnZhbmVpamsiLCJhIjoiY2l3ZW9rYm5uMDBhMzJ5bnhteHplNnBoOCJ9.6dxMQeajIZRQSF2GGUhRgQ';

if(windowwidth > 767) {
var map = L.mapbox.map('map', 'eidenbenz-zuercher-ag.jhpof82m', {
center: [52.0777994, 4.2850],
zoom: 17,
scrollWheelZoom: false
});
} else {
var map = L.mapbox.map('map', 'eidenbenz-zuercher-ag.jhpof82m', {
center: [52.0777994, 4.2850],
zoom: 16,
scrollWheelZoom: false
});
}

var myLayer = L.mapbox.featureLayer().addTo(map);

var geoJson = [{
"type": "Feature",
"geometry": {
"type": "Point",
"coordinates": [4.2850, 52.0777994]
},
"properties": {
"title": "Delia Natuurlijke Haarkleuring",
"icon": {
"iconUrl": "./build/themes/delia/_img/icon_marker.png",
"iconSize": [53, 53], // size of the icon
"iconAnchor": [26, 53], // point of the icon which will correspond to marker's location
"popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
"className": "dot"
}
}
}];

// Set a custom icon on each marker based on feature properties.
myLayer.on('layeradd', function(e) {
var marker = e.layer,
feature = marker.feature;

marker.setIcon(L.icon(feature.properties.icon));
});

// Add features to the map.
myLayer.setGeoJSON(geoJson);
