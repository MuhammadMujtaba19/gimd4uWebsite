var slideIndex = 0;
var x = document.getElementsByClassName("mySlides");
carousel();
var time;
//x[0].addEventListener("mouseover",stop);
//x[1].addEventListener("mouseover",stop);
//x[2].addEventListener("mouseover",stop);
//
//x[0].addEventListener("mouseout",carousel);
//x[1].addEventListener("mouseout",carousel);
//x[2].addEventListener("mouseout",carousel);

function carousel() {
	
	setTimeout(3000);
    var i;
	var y = document.getElementById("mybtn");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
	if (slideIndex==1|| slideIndex==2){
		 y.style.visibility = 'hidden';
	}else {
		 y.style.visibility = 'visible'
		}
    x[slideIndex-1].style.display = "block"; 
 time =  setTimeout(carousel, 3000); // Change image every 2 seconds
}
function stop(){
	clearInterval(time);
	setTimeout(3000);
}
// Mobile nav touch hover script
$(document).ready(function(){
  $('.dropdown-submenu a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});s