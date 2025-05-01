// 4+ büyüklükteki depremleri göster
L.geoJSON(earthquakes, {
    filter: feature => feature.properties.mag >= 4
}).addTo(map);

const redIcon = L.icon({iconUrl: 'red-marker.png'});
if (city.risk > 7) marker.setIcon(redIcon);

