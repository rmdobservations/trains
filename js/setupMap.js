/* File Name : setupMap,js
* Description/Purpose: 
* Date : 
* Revision Date : 11 june 2019 Removed function definitions
                   5 july 2019 added localtiles option for baselayer
*/
let setupMap = function(mydata) {
	/* Information from tripmenu.json */
	let baseMap = mydata["basemap"];
	if (baseMap == "OSM" || baseMap == 'Bing') {
	localtiles = false;
} else 
{localtiles = true;}

let baseGroup = createBaseGroup(baseMap,localtiles);
let groupLayers = setupLayerProperties(mydata);

	/* each horizontal menu item contains a group of gpx or kml files */
	console.log("this group array ",groupLayers)
	// Array of objects but baseGroup has to be first. javascript term unshift does this. 
	// What a stupid word to use for this function.
	//
	groupLayers.unshift(baseGroup)
 
// [baseGroup,groupArr[0],groupArr[1]...],
/* OpenLayers Map Construction */

let mapCenterLonLat = mydata["mapCenterLonLat"];
let nlcenter = ol.proj.transform(mapCenterLonLat, 'EPSG:4326', 'EPSG:3857');
let mapZoom = mydata["mapZoom"];

/* define view */
let view = new ol.View({
  	center: nlcenter,
  	zoom: mapZoom
	});

/* Put everything together to produce map */

map = new ol.Map({
    target: 'map',
    layers: groupLayers,
    view: view
});

//console.log("THIS ADDED on 5 july 2019 ******************************************")
  map.on('pointermove', function(evt) {
        if (evt.dragging) {
          return;
        }
        var pixel = map.getEventPixel(evt.originalEvent);
        displayFeatureInformation(pixel);
      });
   // [baseGroup,groupArr[0],groupArr[1]...],
	//		for (var k=0;k < 1;++k)	{
//map.addLayer(groupArr);
//}
// function to write some stuff to console when map is clicked
mapinfo(map)
// function to associate menu DOM items with map layers
	let mapLayerGroup = map.getLayerGroup();
	addclicktodom(mapLayerGroup);
	}
	
     