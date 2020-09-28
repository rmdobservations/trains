 // Function createBaseGroup 
/* File Name :
* Description/Purpose:
* Date :
* Revision Date :
	5 july 2019 added keyword to use local of on-line OSM tiles
		localtiles = "true"
*/
let createBaseGroup = function(baselayer,localtiles){
//	console.log("base: ",baselayer,localtiles);
/* local tiles */
if(localtiles){
	var source =  new ol.source.XYZ({
	   type: 'base',
      visible: true,
        url: 'http://localhost/OSM/Geo-OSM-Tiles/{z}/{x}/{y}.png',
        layer: baselayer
      })
      var basemapLayer = new ol.layer.Tile({
  		title: baselayer,
  		source: source,
  		name: baselayer,
	});
} else { /* cloud tiles */
    if(baselayer == "OSM"){
		var source = new ol.source.OSM({
   	 type: 'base',
    	visible: true,
		layer: baselayer
		});
		var basemapLayer = new ol.layer.Tile({
  			title: baselayer,
  			source: source,
  			name: baselayer,
		});
	} else {console.log("Not OSM")};
	 if(baselayer == "Bing"){
	 	//console.log("inside Bing");
		var	key_bing='AgzNB1-vRXFkOSLcldJKSIZLzjoouS_HdTUsW0LUzkXaPNXRaMtZuigJNTWAG8ZO';
		var source = new ol.source.BingMaps({
    	type: 'base',
     	key: key_bing,
	 	imagerySet: 'Aerial',
	 	visible: true,
	 	layer: baselayer
		});
	} else {console.log("Not Bing")};

	var basemapLayer = new ol.layer.Tile({
		preload: Infinity,
  		title: baselayer,
  		source: source,
  		name: baselayer,
	});
}
	// end define vector layers
	// define groups
	// not sure what visibility of group means.
	var basegroup = new ol.layer.Group({
	//    title: 'Background Maps',
    layers: [basemapLayer],
 	//   name: 'BaseGroup',
    visibility: true
	})
return basegroup;
}