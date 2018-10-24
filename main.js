/*===events===*/
var menuBtn = document.getElementById("menu-btn");

function menuEvent(){
  toggleThis(this,'active');
  nextSiblingToggle(menuBtn,'active');
}

menuBtn.addEventListener("click",menuEvent,false);

/*====*/
// document.addEventListener("click",bodyToggle,false)
//
// function bodyToggle(e){
//
//   bodyTag = document.getElementsByTagName("body")[0];
//
//   if (e.target.className === " active"){
//
//     console.log("active",e.target.className,e.target);
//
//
//     var detailClass = document.getElementsByClassName("detail-view");
//
//     for (var i = 0; i < detailClass.length; i++) {
//
//       detailClass[i].className = "detail-view";
//
//     }
//
//     e.target.className = "";
//
//   }
// }
/*============*/
window.onscroll = function(){

  var logo = document.getElementById("logo")

  var el = document.getElementById("masthead");

  el.style.transition = "0.3s";

  logo.style.transition = "0.3s";

  if(window.pageYOffset > el.offsetHeight){

    el.style.background = "rgb(3, 79, 150)";

    logo.style.transform = "scale(1)";

  }else{

    el.style.background = "transparent";

    logo.style.transform = "scale(1.4)";
  }
}
