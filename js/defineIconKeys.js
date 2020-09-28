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
 	var   homecolor = '#123456';
  	var   campcolor = '#00ff00';
  	  	var   stationcolor = '#000000';
  	var purple = '#800080';
 var northeast= '#800080';
 var blauwnet= '#1d99bb';
 var MerwedeLingelijn= '#f06400';
 var northwest= '#800080';
 
 	var locationLevels = {
 		
  		'Home': homecolor, 
  		'Camp': "icons/rmdtent.png",
  		'camp': "icons/rmdtent.png",
  		'hut': "icons/brownhut.png",
  		'poi': campcolor,
  		'market': "icons/supermarket.png",
  		'museum': campcolor,
  		'meal': "icons/picnic.png",
  		'train': stationcolor,
  		'northeast': northeast,
  		'blauwnet': blauwnet,
  		'MerwedeLingelijn': MerwedeLingelijn,
  		'northwest': northwest,
  		'nature': campcolor,
  		'city': homecolor,
  		'viewpoint': purple,
  		'90': '#ffa500',
  		'manual': '#ff4500',
  		'church': "icons/church.png",
  		'dam': 'icons/lock_gate.png',
  		'drawbridge':'icons/drawbridge.png',
  		'tree': 'icons/unknown.png',
  		'harbour': 'icons/harbour.png',
  		'moth': 'icons/unknown.png',
  		'info': 'icons/informationoffice.png',
  		'beach': 'icons/beach.png',
  		'05': 'icons/church.png',
  		'13': 'icons/church.png',
  		'15': 'icons/church.png'
  		 }
//'route' : {'stroke':purple,'width':4}
//  		 console.log('............Test object strings: ',locationLevels['route'])
  //		  console.log('............Test object route stroke: ',locationLevels['route']['stroke'])
  	//	   console.log('............Test object route width: ',locationLevels['route']['width'])
     return locationLevels;
   }