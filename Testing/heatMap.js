var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
    credentials: 'Your Bing Maps Key',
    center: new Microsoft.Maps.Location(39.393486, -98.100769),
    zoom: 3
});
Microsoft.Maps.loadModule('Microsoft.Maps.HeatMap', function () {
    // Creating sample Pushpin data within map view
    var mapDiv = map.getRootElement();
    var locations = [];
    for (var i = 0; i < 1000; i++) {
        locations.push(map.tryPixelToLocation(new Microsoft.Maps.Point(mapDiv.clientWidth * Math.random(), mapDiv.clientHeight * Math.random()), Microsoft.Maps.PixelReference.control));
    }
    var heatMap = new Microsoft.Maps.HeatMapLayer(locations, {
        intensity: 0.65,
        radius: 10,
        colorGradient: {
            '0': 'Black',
            '0.4': 'Purple',
            '0.6': 'Red',
            '0.8': 'Yellow',
            '1': 'White'
        }
    });
    map.layers.insert(heatMap);
});
undefined;

