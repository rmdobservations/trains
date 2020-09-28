/* File Name : defineIconKeys.js
* Description/Purpose: Supply predefined definitions of icons
* 
* Usage: Called by setupLayerProperties
* Returns: locationLevels[rmdlocation]) where rmdlocation is from 'desc' in GPX file
* Notes: 
* Date : 5 august  2019
* Revision Date : 
*/ 
 var defineRouteKeys = function () {
 	var   homecolor = '#123456';
  	var   campcolor = '#00ff00';
  	var purple = '#800080';
 	var routeLevels = {
  		'route': {'stroke': '#abcdef','width':4},
  		'train':  {'stroke':'#000000','width':2},
  		'bike':  {'stroke': '#982000','width':4},
  		'walk':  {'stroke': '#ff0000','width':4},
  		} 
  		 
//'route' : {'stroke':purple,'width':4}
 	//	 console.log('............Test object strings: ',routeLevels)
  		//  console.log('............Test object route stroke: ',routeLevels['route']['stroke'])
  	   //console.log('............Test object route width: ',routeLevels['route']['width'])
     return routeLevels;
   }