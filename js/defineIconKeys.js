/* File Name : defineIconKeys.js FOR TRAIN STATIONS
* Description/Purpose: Supply predefined definitions of icons
* 
* Usage: Called by setupLayerProperties
* Returns: locationLevels[rmdlocation]) where rmdlocation is from 'desc' in GPX file
* Notes: 
* Date : 14 september 2020 
* Revision Date : 
* each trip should have own version. icon dirctory has to move
*/ 
 var defineIconKeys = function (imagepath) {
  	var   poicolor = '#00ffff';
  
  	var purple = '#800080';
 var northeast= '#800080';
 var blauwnet= '#1d99bb';
 var MerwedeLingelijn= '#f06400';
 var northwest= '#800080';
 
 	var locationLevels = {
 		
  		'camp': "icons/rmdtent.png",
  		'hut': "icons/brownhut.png",
  		 'blauwnet': blauwnet,
  		   		'MerwedeLingelijn': MerwedeLingelijn,
  		   			'northeast': northeast,
  		   			'northwest': northwest,
  		'poi': poicolor,
  		 }
//'route' : {'stroke':purple,'width':4}
//  		 console.log('............Test object strings: ',locationLevels['route'])
  //		  console.log('............Test object route stroke: ',locationLevels['route']['stroke'])
  	//	   console.log('............Test object route width: ',locationLevels['route']['width'])
     return locationLevels;
   }