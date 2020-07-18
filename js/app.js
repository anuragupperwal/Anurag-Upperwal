
window.onscroll = function() {sideNav()};

var navbar = document.getElementById("side-nav");
var sticky = navbar.offsetTop;

function sideNav() {
	console.log(window.scrollY)
	if ((window.scrollY > 730) ) {
		console.log(window.scrollY)
		document.getElementById("side-nav").classList.add("active-side-nav")
		document.getElementById("side-nav").classList.remove("inactive-side-nav")
	}
	else {
		document.getElementById("side-nav").classList.add("inactive-side-nav")
		document.getElementById("side-nav").classList.remove("active-side-nav")
	}


}

