function activity(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
}



window.onload = function() {
	var scrollUp = document.getElementById('scrollup');
	scrollUp.onmouseover = function() {
	scrollUp.style.opacity=0.8;
	scrollUp.style.filter  = 'alpha(opacity=80)';
	};
	scrollUp.onmouseout = function() {
	scrollUp.style.opacity = 1;
	scrollUp.style.filter  = 'alpha(opacity=100)';
	};
	scrollUp.onclick = function() {
	window.scrollTo(0,0);
	};
	window.onscroll = function () {
		if ( window.pageYOffset > 0 ) {
		scrollUp.style.display = 'block';
		} else {
		scrollUp.style.display = 'none';
		}
	};
};

