
window.onscroll = function() {sideNav()};

function sideNav() {
	if ((document.body.scrollTop > 760) || (document.documentElement.scrollTop > 760)) {
		document.getElementById("side-nav").className = "active-side-nav"
	}
	else {
		document.getElementById("side-nav").className = "inactive-side-nav"
	}
}

