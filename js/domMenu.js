
/*
*
 Function name : domMenu.js
*
*
 Description Reads json file and creates a dropdown menu.
*
*
 Inputs and Ouputs: Writes to the DOM
*
*
 Date: 4 may 2018
		15 september 2020 removed nlclick function
*
*
 Author: RMD
 */

var domMenu = function(mydata) {
		 

	//console.log("insode dom menu ",typeof mydata);
	var mytext = '';
	mytext += '<div class="dropdown">';
	mytext += '<ul class="navigation">';
 var 	mapLabel = mydata["mapLabel"];
	console.info("Menu3:mapLabel: ",mapLabel)
	var 	menu = mydata["menuheading"];
	console.info("domMenu: ",menu)
	$.each(menu,function(i,entry){ 
	mytext += '<li class="menuHeading">' + entry["heading"] ;
	var index = i+1;
	/* not sure of purpose of menu items plus index */
		var ulClass='<ul class = ' + "menuItems"+ index + '>';
		mytext += ulClass; 
  		var a = entry["labels"];
  		console.log("Reading labels: ",a.length)
  		if(typeof a !== "undefined" && a !== null)
  		{
  			console.log("Reading labels: ",a.length)
  		$.each(a,function(j,item){
			mytext += "<li><span  class='menuClass'>"+ item + "</span></li>"
		}) /* inner each */
		} else {
			console.log("Not reading labels: ");
		}
	mytext += '</ul>'
  	mytext += '</li>'
	}) /* outer each */
	
  	mytext += '</ul>';
	mytext += '</div>';
	$('#menu').html(mytext);
	//console.log("Mytext: ",mytext)
	//return mydata;
	}
	