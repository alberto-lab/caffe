

// if you add some links at menu you must  modify this "open.style.paddingTop = "10px";"



/*-------------fx parallaxr ----------------*/


function parallax(){
  var txtpassion = document.querySelector('.container_vertical_line');
  var obj = document.querySelector('.text_capsule');
  var txtquality = document.querySelector('.second_container_vertical_line');
  var moveit = window.pageYOffset;

  if( moveit > 64){
      txtpassion.style.bottom = + (window.pageYOffset / 1)+ "px";
      obj.style.bottom = + (window.pageYOffset / 2)+ "px";
      txtquality.style.bottom = - (window.pageYOffset / 3)+ "px";
  }else{
      txtpassion.style.bottom = + (window.pageYOffset / 1)+ "px";
      obj.style.bottom = + (window.pageYOffset / 2)+ "px";
      txtquality.style.bottom = - (window.pageYOffset / 3)+ "px";
  }
}

window.addEventListener('scroll',parallax,false);

//--------------end navigation bar

var slideIndex = 1;

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
 
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}
























