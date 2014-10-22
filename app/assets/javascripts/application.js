// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .

//sanity check that js is working
//
var slides, slides_total, slide_current;
// means to execute the code only once the document has finished loading
document.addEventListener('DOMContentLoaded', function(){
	// get the pictures!
	document.getElementsByClassName('prev')[0].addEventListener('click', function () {
      // the idea is to decrease slide_current by one, to show the previous image
      if(slide_current > 0){
        slide_current--;
      }else{
        // if the slide_current is less than 0 we want to move to the last image
        slide_current = (slides_total - 1);
      }
      // then we call the function that changes the current image we had previously coded
      changePicture(slide_current);
    });
document.getElementsByClassName('reset')[0].addEventListener('click', function () {
      // the idea is to decrease slide_current by one, to show the previous image
      if(slide_current = 0){
        slide_current--;
      }else{
        // if the slide_current is less than 0 we want to move to the last image
        slide_current = (slides_total - 1);
      }
      // then we call the function that changes the current image we had previously coded
      changePicture(slide_current);
    });
	slides = document.getElementsByClassName('col-sm-12');
	// how many pictures are there?
	slides_total = slides.length;
	// let's start with the first picture
	slide_current = 0;
	changePicture(1);
	// function to set time interval (this will loop)
	window.setInterval(function(){	
		// change the picture to the current time
		
		//if we get to the last slide, go back to the first one
		if(slide_current >= (slides_total-1)){
			slide_current = 0;
		// otherwise, just go to the next slide
		}else{
			slide_current++; //this is an abbreviation for slide_current = slide_current + 1
		}
		//log the slide to the console so for confirmation
		changePicture(slide_current);
		//do this every 3s
		}, 3000);
});



// helper functino takes a slide as input
function changePicture(slide){
	// iterate though all slides
	for(var i = 0; i < slides_total; i++){
		//change their display to none
		slides[i].style.display = 'none';
	};
	// change the display for the current slide back on!
	slides[slide].style.display = 'block';

};

 