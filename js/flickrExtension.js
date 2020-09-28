function flickrExtension(extension)
{
//console.info("In extension ",extension)
if( extension == "_b"){
			var imagesize= 1024;
		console.info("In extension ",imagesize)
}
if( extension == "_none"){ var imagesize = 10;
console.info("In extension Default for no image ",imagesize,x,y)
}
if( extension == "_t"){	var imagesize= 100;}
if( extension == "_n"){	var imagesize= 320;}
if( extension == "_z"){	var x= 640; var y=480;}
if( extension == "_c"){	var imagesize= 800;}
if( extension == "_s"){	var imagesize= 75;}
if( extension == "_m"){	var imagesize= 240;}
	return {"x":x,"y":y};
}