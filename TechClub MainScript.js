
// this is the smooth scroll down with jquery
$(document).ready(function(){
  $("a").on('click', function(event) {
	if (this.hash !== "") {
	  event.preventDefault();
	  var hash = this.hash;
	  $('html, body').animate({
		scrollTop: $(hash).offset().top
	  }, 900, function(){
		window.location.hash = hash;
	  });
	} 
  });
});


//this is the mobilenavbar uncollapse and collapse
function MobileNavBarCollapse() {
  var x = document.getElementById("myMobileTopnav");
  if (x.className === "mobiletopnav") {
    x.className += " responsive";
  } else {
    x.className = "mobiletopnav";
  }
}
