
// add hover	

let addhover = function(){
	$('.navigation li').hover(function(){
	//console.log("This in drop fade in: ",this);
		$("ul" ,this).fadeIn();
  		},function() {
		//console.log("This in drop fade out: ",this);
			$('ul', this).fadeOut();	
		}
		); 
	} 
 