/* 
* File Name : tripMap
* Description/Purpose: Main program calls several functions. Reads tripmenu.json in directory of trip.
*                      The name stays constant.
* 
* Date : 24 april 2018
* Revision Date : 24 april 2018
*                 Fixed promise catch error
*						4 may 2918 did some cleaning up
*                11 june 2019 -more cleaning up. Substitute var for let. map is only defined with the 
*                             mydata call function.
*										- moved all functions to their own file. These have to be added to header 
*										  of tripmenu.html
*/
$(document).ready(function() {
 " use strict "; 
var rmdgetData = async function() {
    try {
    		let jsonfile='./json/tripmenu.json';
    		 console.log("In tripMap ...try...jsonfile: " + jsonfile);
        return await $.getJSON(jsonfile).promise();
    }
    catch (error) {
       console.log("2 In tripMap ...catch error..." + error);
    }
    finally {
        console.log('2 In tripMap ...finally..., finished reading json file');
    }
}

rmdgetData().then(mydata => {
	/*
	This has 2 groups,
	1) basegroup with  only one layer, OSM
	2) VectorGroup with layers for each gpx file.

	rmd_mapLayerArray is a collection of all layer objects. When layer in checkbox is clicked,
	the name will be compared with the name in rmd_mapLayerArray.
	rmd_mapLayerArray removes the embededness of the group and collections. I do not know what this means 
	anymore (11 june 2019)

	Some more work will need to be done if there are groups of groups, for example.
*/
	let map;
	let rmd_mapLayerArray;
	console.log("3 In tripMap, Call setup code: ",mydata);
	 	//defineEvents();
	 	
		domMenu(mydata);

		addhover();
		
		setupMap(mydata);
		//cyclewithjson();
	})
//console.log("In tripMap, outside Promise. is this called? Yes but map not defined: ",map);
}) ; // end file
