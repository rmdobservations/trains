// The number of DOM elements with tag .journalText needs to 
// match the number of elements in the json file. This number will in turn
// match the number of photos during the Flickr Search.
// Big Modification: 28 maart 2016
// Search tag elements removed 
// global variable​
var allUserData = {};
var count = 0; /*-----------------------*/
var countTextEntry=0;
var countJsonUrlEntry=0;
var countJsonOrientationEntry=0;
var countJsonGeometryEntry=0;
var textHeightArr=[];
var FLICKR_EXTENSION = "_none";
var JSON_MAPFILE='json/slideshow.json';
var hBrowser,wBrowser;
let cyclewithjson = function() {
console.log("Inside cyclewithjson");
wBrowser=$( window ).width();
hBrowser=$( window ).height();
//var spinner="<div class=\"spinner\"></div>";
//	$(spinner).appendTo("#container")
	
		getText();
		getUrl();		
		getOrientation();		
		getGeometry();
}


function checkForDone()
{
	count++;
	console.info("Check For Done number of entries: ",count)
	console.info("Text: ",countTextEntry)
	console.info("Url: ",countJsonUrlEntry)
	console.info("Orientation: ",countJsonOrientationEntry)
	if (count == 4)
	{
		
		callWhenReady() ;
	} else {
		console.info("not done yet, where do we go from here?")
	}
}

function callWhenReady() 
{ 
 //    $(".spinner").hide();	
		photoUrl =allUserData["url"]
		photoText=allUserData["text"]
		orientationArr= allUserData["orientation"];
		geometryArr= allUserData["geometry"];
		maximumTextHeight=0;
		console.info("Number of elements: ",orientationArr.length);
	$.each(orientationArr,function(i){
		
	var imgCont = '<div class="photo-container">';
		
			imgCont+= '<div class="photo" style="background-image: url(' + photoUrl[i] + ')"></div>';
			/*imgCont+= '<div style="clear:both;overflow:auto;"></div>';*/
			imgCont+= '<div class="text">' + photoText[i] + "</div>";
			
	
	imgCont+= '</div>'
	
	$(imgCont).appendTo('#slide-container'); 
	console.log(" Image element: " + photoUrl[i]);	});
	
	 $('#slide-container').on("click",function(event){
	 	console.log("check click on photo events in slide container: ",event);
	 


	 });
	 
stylePhotoElement(FLICKR_EXTENSION);
	/*	cycleSize=640;	*/
	/* now make slide show */

	$('#slide-container').cycle({
    fx:     'fade',
    speed:    'fast',
    timeout:  0,
    next:   '#next',
    prev:   '#prev',
    debug: true
	 });  /* image container */
	
};
function getText() 
{
	console.info("Inside getText");	
	maximumTextHeight=0;
	
	$('p').each(function(index) 
		{
				
		var pHeight = $(this).innerHeight();
	
		})
		var textObj = {}
		
		/*$(".text").css("width",.4*wBrowser);*/
		$('.text').each(function(index) 
		{
		textObj[index.toString()]=$(this).html(); //rmd changed 18 july so html elements can be copied.
		textHeightArr[index]=$(this).innerHeight();
		$(this).hide(); /*.clone(); */
			countTextEntry++;
		})
		allUserData["text"]=textObj;
		var nparagraphs=Object.keys(textObj).length;
		console.info("NUmber of paragraphs found is: ",nparagraphs)
		checkForDone();
}
function getOrientation() 
{
		console.info("Inside getOrientation");	
		$.getJSON(JSON_MAPFILE, callbackOrientation);
}
function callbackOrientation(data)
{
	var orientationArr = [];
	
	var jsonEntries = Object.keys(data);
	jsonEntries.forEach(function(entryIndex) 
	{
		orientationArr[entryIndex]=data[entryIndex]["orientation"];
							countJsonOrientationEntry++;
				
	})
			allUserData["orientation"] = orientationArr;
			checkForDone();
		
};
function getUrl() 
{
	console.info("Inside getUrl");
		$.getJSON(JSON_MAPFILE, callbackUrl);
}
function callbackUrl(data)
{
	var urlArr = [];
	
	var jsonEntries = Object.keys(data);
	jsonEntries.forEach(function(entryIndex) 
	{
		console.info("Inside getphotojson nEntry: ",data[entryIndex]["url"]);
		urlArr[entryIndex]= data[entryIndex]["url"];
		countJsonUrlEntry++;
			
	})
		var nJSON=Object.keys(jsonEntries).length;
		console.info("NUmber of json entries found is: ",nJSON);
			allUserData["url"] = urlArr;
			checkForDone();
		
};
function getGeometry() 
{
	console.info("Inside getOrientation");	
		$.getJSON(JSON_MAPFILE, callbackGeometry);
}
function callbackGeometry(data)
{
	var geometryArr = [];
	
	var jsonEntries = Object.keys(data);
	jsonEntries.forEach(function(entryIndex) 
	{
		console.info("Inside getphotojson nEntry: ",data[entryIndex]["geometry"]["coordinates"]);
		//geometryArr[entryIndex]= data[entryIndex]["geometry"]["coordinates"]);
		countJsonGeometryEntry++;
			
	})
			allUserData["geometry"] = geometryArr;
			checkForDone();
		
};