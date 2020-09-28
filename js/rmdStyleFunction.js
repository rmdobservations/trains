/*
name: rmdStyleFunction

credits: based on Chapter 6 OL3 BeginnersGuide page 205 (See chapter6_1key.html)
function: Called from setupLayerProperties from within 
		ol.layer.Vector({...  style: rmdStyleFunction ...}
		rmdStyleFunction() is called a second time for a change event (created by ?)
			which will assign a new key to each feature. The icons are defined within this 
			new key. 
			
Related functions: 
		locationLevels = defineIconKeys();
		let gpxlocation= myfeature.get('desc')	;
		myfeature.set('mylocation',gpxlocation);
Created: 1 august 2019 RMD
Modification: 	8 august 2019	RMD added choice between color or png image. 
	If statement based on presence of hashtag in string (as defined in defineIconKeys)
					9 august 2019	RMD fix route info. In GPX file, tags are "trkpt"
					10 august 2019	RMD Need to clean  up these if's 

*/
			var defaultPointStyle = new ol.style.Style({
      
        image: new ol.style.Circle({
        fill: new ol.style.Fill({
              color: '#ff0000'
            }),
            radius: 5,
            stroke: new ol.style.Stroke({
              color: '#ff0000',
              width: 1
            })
          })    	
      })
var defaultLineStyle = new ol.style.Style({
	 stroke: new ol.style.Stroke({color: '#ff0000','width': 5})
	       })			


 /* allow for previously created styles */
var styleCache = {};
  
function rmdStyleFunction(myfeature) {
	/* warning: in KML, track name and desc are same for google map kml translated to gpx. 
Fietsrouteplanner has only name in the trkpt tag. 	
	 */
//	console.log("..............My feature: ",myfeature);
var gpxtagdescription="any error is due to contents of gpx file not this code";	
	let featuregeom = myfeature.getGeometry();
							let featuretype = featuregeom.getType();
						//console.group("%cRoute from GPX: ",
							//'font-weight:bold; color:red;');
							//console.log("route feature name: ",myfeature.get('name'))
 		 gpxtagdescription = myfeature.get('mydescription');
 		 //console.log(" Route feature  description: ",gpxtagdescription);
 		//var rmdroute = myfeature.get('myroute');*/
 		if (gpxtagdescription == "defaultwalk") 
 		{
	console.log("************************ need to set this ");
			return [defaultPointStyle];
		}
		
 			if(featuretype === 'MultiLineString'){
 			console.log(" Multilinestring route: ");
 				
 				/* make sure key has been defined */
				
				console.log("Number of letters in desciption tag: ",gpxtagdescription.length);
				if (gpxtagdescription.length > 0) {
					//console.log(" Route levels: ",routeLevels);
					//	console.log(" style cache: ",styleCache);
 					let stroke = new ol.style.Stroke({
									color: routeLevels[gpxtagdescription]['stroke'],
									width: routeLevels[gpxtagdescription]['width']
									})
									
  				 	styleCache[gpxtagdescription]= new ol.style.Style({
				          stroke: stroke
				        		})
				        			//console.log("returned value: ",styleCache[gpxtagdescription]);
					return [styleCache[gpxtagdescription]];
				} else {
		  	 		 return [defaultLineStyle];
				}
			//	console.groupEnd();
 		 } else {
	/* make sure key has been defined */
//console.group("%cFeature from GPX: ",'font-weight:bold; color:green;');
	//console.log("In rmdstyleFunction feature and type: ",featuretype)
	//	console.log(" gpx tag description: ",gpxtagdescription);
		//	console.log(" Number of Locations: ",gpxtagdescription.length);
			
//				var a = locationLevels[gpxtagdescription];
				if (gpxtagdescription.length > 0) {
	//			console.log("Label for gpxtagdescription ",gpxtagdescription);
					/* is point a color or a an image */
					var color = locationLevels[gpxtagdescription].indexOf("#");
					if (color >= 0) {
				styleCache[gpxtagdescription] = new ol.style.Style({
    			image: new ol.style.Circle({
      	  fill: new ol.style.Fill({
              color: locationLevels[gpxtagdescription]
            }),
            radius: 5,
            stroke: new ol.style.Stroke({
              color: locationLevels[gpxtagdescription],
              width: 1
            })
          })    	
    			}); 
    		} else {
    			 styleCache[gpxtagdescription] = new ol.style.Style({
    	image:  new ol.style.Icon({
    		src: locationLevels[gpxtagdescription]
           })
          })   
       }
    			 return [styleCache[gpxtagdescription]];
  } else {
 		 	return [defaultPointStyle];
 		 }
 		//console.groupEnd();
 		}
	 }