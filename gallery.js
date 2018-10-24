/*========*/
var slideIndex;

slideIndex = 1;

gallerySlider(slideIndex)

/*========*/
function sliderPlus(num){

  gallerySlider(slideIndex += num);

}
function sliderCurrent(num){

  gallerySlider(slideIndex = num);

}
/*========*/

function gallerySlider(num){

  var slides = document.getElementsByClassName("slide");

  var icon = document.getElementsByClassName("img-btn");

  if(num > slides.length){

    slideIndex = 1;
  }

  if(num < 1){
    slideIndex = slides.length;
  }

  for (var i = 0; i < slides.length; i++) {

    slides[i].classList = "slide";

  }

  for (var i = 0; i < icon.length; i++) {

    icon[i].classList = "img-btn";

  }
  icon[slideIndex-1].classList += " active";

  slides[slideIndex-1].classList += " active";
}
/*========*/
function  galleryScale(){
  var x = document.getElementById("article-img")
  if(x.className === "article-img"){
    x.classList += " active";
  }else{
    x.classList = "article-img";
  }
}
var imgSlide = document.getElementsByClassName("slide");

for (var i = 0; i < imgSlide.length; i++) {
  imgSlide[i].addEventListener("click",galleryScale,false);
}
