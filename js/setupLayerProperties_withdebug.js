/*
 Name: setupLayerProperties
 Description- collect and create properties for vector layer.
 Every element listed under a menu heading will have its own vector 
 layer properties.
*
* 
*
 Inputs and Ouputs:
*
*
 SubFunctions:

* Function defineIconKeys();defineRouteKeys();
* Function rmdStyleFunction(feature)
* Date :
* Revision Date : 21 August 2018 Separated from setupMap 
* Revision Date : 11 June 2011 removing unnecessary stuff 
*/



// function setupLayerProperties
//var setupLayerProperties = function(mydata) {
function setupLayerProperties(mydata) {
	console.info("In setupLayerProperties mydata : ",mydata);
	let rootDataDirectory= mydata["rootDataDirectory"];
		let rootImageDirectory= mydata["rootImageDirectory"];
	let groupLayers =[]; /* one group for each menu column */
	let menu = mydata["menuheading"];

	console.log("Number of menu Headings: ",menu.length)
	locationLevels = defineIconKeys(rootImageDirectory);
	routeLevels = defineRouteKeys();
/*	let geomtype = ['Point', 'LineString', 'LinearRing', 'Polygon', 'MultiPoint', 'MultiLineString', 'MultiPolygon', 'GeometryCollection', 'Circle']
*/	/*              0             1          2             3           4              5                6                 7                   8 */
	/*=====Begin Loop over each menu heading==========*/
	$.each(menu,function(i,entry){ 

		let numlayers = entry.filenames.length
 		let filenameArr = entry.filenames;
		let sourceArr = Array(numlayers);
		let vectorArr = Array(numlayers);
		let labelsArr = entry.labels;
	
		let defaultvisibility = (entry.defaultvisibility === 'true');
	

		for (let k=0;k < numlayers;++k)	{
		 		let url = rootDataDirectory +filenameArr[k];
	
 	console.log("In setup vector levels: ",labelsArr[k]);
 
				sourceArr[k] = new ol.source.Vector({
		 							url: url,  
          						format: new ol.format.GPX()
					        		});

				vectorArr[k] = new ol.layer.Vector({
 			    	source: sourceArr[k] ,
	  				name: labelsArr[k] ,
	  				visible: defaultvisibility,
      			style: rmdStyleFunction
      			});
				/* get 'desc' from feature defined in gpx file */
				/* set 'mylocation' key to hold this value */
			
				let key = sourceArr[k].on('change',function (event) {
					//		console.log(".................................feature and type url: ",event);
					if(event.target.getState() == 'ready'){
						
						ol.Observable.unByKey(key);
					
						sourceArr[k].forEachFeature(function (myfeature) {
							let featuregeom = myfeature.getGeometry();
							let featuretype = featuregeom.getType();
							console.log("feature and type url: ",featuretype,sourceArr[k].getUrl())
							/* get whatever keyword is written between tags <desc></desc> */
								let gpxdescription= myfeature.get('desc')	;
							if(gpxdescription){
									//console.log("******************Set gpx description icon: ",gpxdescription.length)
									/* in case of using someone else's gpx file need to give a default keyword */
								if (gpxdescription.length > 10) {
									console.log("Set description flag to default");
										myfeature.set('mydescription',"defaultwalk");
										} else {										
										myfeature.set('mydescription',gpxdescription);	
										}
								}	else {
										console.log("description desc not found: ",sourceArr[k].getUrl())
										}
									
							}) /* for each feature */	
						}		/* target */	setupLayerProperties 
					}) /* on change event */
			
}  /* defines a layer for each increment in loop */

   	
//	console.log(".....................vectorLayer.........",vectorArr.length);
// Done with defining vector layers		
			var 	group = new ol.layer.Group({
    		layers: vectorArr
    		//visibility: true
			})
		
		console.log("........Group....."+i+" groups")
			groupLayers.push(group)
		})
/*=====EndLoop over each menu heading==========*/
	
console.log("end of outer loop",groupLayers.length);
	return groupLayers;


}	
