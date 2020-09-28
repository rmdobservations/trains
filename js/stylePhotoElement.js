/*!
 * Dynamic styling of Journal element.
 * changes in text 19 july 2016 RMD
 *

function stylePhotoElement(suffix,calculatedTextHeight) { */
function stylePhotoElement(suffix) {


console.info("Browser properties: ",wBrowser,hBrowser);


var wphotoContainer = 0.4*wBrowser;
var hphotoContainer = 0.8*hBrowser;
var pointerSize = parseInt($("#next").css("width"));

console.info(" photoContainer width and height based on browser: ",wphotoContainer,hphotoContainer)



var border= parseInt($('.photo-container').css("border-bottom-width"));

var fromRight = pointerSize+border;
console.info("Icon and border : ",pointerSize,typeof(pointerSize),fromRight,border);

var photoContainerstyle = {
	"width" :wphotoContainer,
	"height":hphotoContainer 
};

$(".photo-container").css(photoContainerstyle);

textHeight = hphotoContainer - 480;



var slideStyle = {
	"right" :fromRight,
	"width" :wphotoContainer,
	"height":hphotoContainer };

$("#slide-container").css(slideStyle);

//var textHeight = getText();
console.info("Text Height of largest element: ",textHeight);
console.info("Width of text container: ",wphotoContainer);
$(".text").css("width",.4*wBrowser);
$(".text").css("height",textHeight-10);
/* scale photo to fit inside container */
$( ".photo" ).css( "width", function( index ) {
	a=$(".photo-container").css("width");
	
	b=parseFloat(a);
  return b;
});
$( ".photo" ).css( "height", function( index ) {
	a=$(".photo-container").css("height");

	b=parseFloat(a) -textHeight ;
  return b;
})
$( ".photo" ).css( "border-radius",function (){
b= "25%";
return b; 
})
/* I do not know why the prev button is in the right place */

	buttonTop=parseInt(hphotoContainer)/2.
	console.info("Button height: ",buttonTop);
$("#next").css("top",buttonTop);
$("#prev").css("top",buttonTop);
var buttonLeft = $("#slide-container").outerWidth() + parseInt(pointerSize);
$("#prev").css("right",buttonLeft);
var buttonRight = 0;
$("#next").css("right",buttonRight);

$("#next").click(function(){
    $(".text").scrollTop(0);
}); 
$("#prev").click(function(){
    $(".text").scrollTop(0);
}); 

};
