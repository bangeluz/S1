$(document).ready (function() {
	var menu = document.getElementById('menu');
	var logo = document.getElementById('menu-logo');
	var altura = 200;
	window.addEventListener('scroll', function(){
		if (window.pageYOffset > altura) {
			menu.classList.add('menu-js');
			logo.classList.add('menu-logo-v');
		} else {
			menu.classList.remove('menu-js');
			logo.classList.remove('menu-logo-v');
		}
	})
	$(".slides").slidesjs({
	  play: {
	    active: true,
	      // [boolean] Generate the play and stop buttons.
	      // You cannot use your own buttons. Sorry.
	    effect: "slide",
	      // [string] Can be either "slide" or "fade".
	    interval: 10000,
	      // [number] Time spent on each slide in milliseconds.
	    auto: true,
	      // [boolean] Start playing the slideshow on load.
	    swap: true,
	      // [boolean] show/hide stop and play buttons
	    pauseOnHover: false,
	      // [boolean] pause a playing slideshow on hover
	    restartDelay: 2500
	      // [number] restart delay on inactive slideshow
	  }
	})
})
