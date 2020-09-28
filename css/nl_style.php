<?php
header("Content-type: text/css");

include_once("csscolor.php");

//$base = new CSS_Color('1F2E00');
$lightgreen='b1ed8b';
$darkgreen='1f3710';

$base = new CSS_Color($darkgreen);
$highlight = new CSS_Color($lightgreen); 

?>



h1 {
	background-color: transparent;
 color:#<?=$highlight->bg['+4']?>;
}

h2 {
	
 color:#<?=$highlight->bg['+4']?>;
}
h3 {
 color:#<?=$highlight->bg['-3']?>;
}
.navigation li {
background-color: #<?=$highlight->bg['+4']?>;
}

.navigation  li span:hover {
		background-color:#<?=$highlight->bg['+2']?>;
	}
li span.menuClass {
	color:   #<?=$highlight->bg['-2']?>;  ;
}
	
	.menutitle {
		
color: #<?=$highlight->bg['-2']?>;; 	
}	
/* Tables alternating shades */

tbody tr:nth-child(odd) {
	color: #<?=$highlight->bg['-5']?>;
   background-color: #<?=$highlight->bg['0']?>;
}
tbody tr:nth-child(even) {
		color: #<?=$highlight->bg['-5']?>;
   background-color: #<?=$highlight->bg['+3']?>;
}
th {
	color: #<?=$base->bg['-5']?>;
}
td.calendar-day {
	color: #<?=$highlight->bg['-2']?>;
}
.text { 
color:  #<?=$highlight->bg['+4']?>;

}
/* for scrollbar */
	.text {

opacity: 0.5;
 border-radius: 25px;
}

/*  try to style buttons     */
 .olButton  {
color: #<?=$base->bg['+2']?> ; 
}
#rmdmouselatitudeDegrees, #rmdmouselongitudeDegrees {
color: #<?=$base->bg['+2']?> ; 
}

#coordinates {
color: #<?=$base->bg['-4']?> ; 
}

.photo-container  {
background-color: #<?=$base->bg['+2']?> ; 
border-color : #<?=$base->bg['+2']?> ; 
}

a {
	color:#<?=$highlight->bg['-4']?>; ;
	font-weight:bold;
	}
a:hover {
	color: #<?=$highlight->bg['-4']?>; ; 
	background: #<?=$highlight->bg['+4']?>;;
	}
