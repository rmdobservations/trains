let mapinfo = function(map){
//console.log("THIS ADDED on 30 MAY 2019 ******************************************")
  map.on('pointermove', function(evt) {
        if (evt.dragging) {
          return;
        }
        var pixel = map.getEventPixel(evt.originalEvent);
       // console.log("calling display properties",pixel)
        displayFeatureInformation(pixel);
      });
      
/* Information in console.log for debugging only */
map.on('click', function(event) {
	console.log("zoom: ",map.getView().getZoom());
	var coord = event.coordinate;
	console.log("event object: ",event)
	var degrees = ol.proj.transform(coord, 'EPSG:3857', 'EPSG:4326')
	console.log("Decimal: ",degrees);
	 //lat="51.963137" lon="5.216453"
	console.log("GPX format: ",'lon= "',degrees[0],'"','lat= "',degrees[1],'"');
	var mouse = document.getElementById('mouse-position')

	$("#mouse-position").html("<p>Coordinates: "+ degrees+ '</p>');
	$("#zoom").html("<p>Zoom: "+ map.getView().getZoom()+ '</p>');
})
      }
