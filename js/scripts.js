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
})
