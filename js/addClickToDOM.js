
/* 
* File Name : addClickToDom.js
* Description/Purpose: Add click functionality to the DOM drop down menus. 
* Toggle visibility of layers.
* rmd_mapLayerArray contains ALL layers. They are not separated by horizontal menu. 
* Date : 24 april 2018
* Revision Date : 11 june 2019
*                 renamed addclick to addClickToDom. 
			This associates map layer name with menu name 
*/

let addclicktodom = function(mapLayerGroup){

rmd_mapLayerObjArray = [];
collectionObject = mapLayerGroup.getLayers();


collectionObject.forEach(function(groupA,indexA){ 
		var layerObject = groupA.getLayers()
		layerObject.forEach(function(groupB,indexB)
			{				
				rmd_mapLayerObjArray.push(groupB)
			})
		})
			// add events to elements
	$("li span.menuClass").click(function(event){
console.log("menu click event");
		var domevent = $(this)
		var domname = $(this).text();
		var totalLayers =rmd_mapLayerObjArray.length;
	
// loop over each layer and compare with event element

	 for(var  i= 0 ;i < totalLayers;i++){
 			var layername = rmd_mapLayerObjArray[i].get("name");
			if(domname === layername){
				console.group("OK: matching dom element found   ");
				console.log("Index: ",i);
			console.log("domname: ",domname);
			console.log("Layer name: ",layername);
			console.groupEnd();
				layer = rmd_mapLayerObjArray[i];
				var visible = layer.get('visible')
				if(visible != true){
				$(this).css('opacity',"1.0");
				layer.set('visible',true);	
					} else {
				$(this).css('opacity',"0.6");
				layer.set('visible',false)
				}
			} else {
				/*console.group("Warning: No matching dom element   ");
				console.log("Index: ",i);
			console.log("domname: ",domname);
			console.log("Layer name: ",layername);
			console.groupEnd();*/
			}			
		}	
	});	/* click event */
	} // end add click
	