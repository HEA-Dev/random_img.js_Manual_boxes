// JavaScript Document

$(document).ready(function () {



// var of images
var images = ["1a", "2b", "3c"];



// $('.randomImg') set class randomImg, event .click() *should be changed?*     
$('.randomImg').click(function () {
 

// var image = random img       
var image = images[Math.floor(Math.random() * images.length)];
    
});


// var background 	
	
background = document.getElementById("background");


// background = image	
	
background.style.backgroundImage = ("image");

	

});
