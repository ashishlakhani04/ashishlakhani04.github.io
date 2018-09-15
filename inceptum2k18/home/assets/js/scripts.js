//add this
var countt=0;
function music() {
	var po = document.getElementById("budio").src;
	var s = document.getElementById("gggaudio");
	if(countt%2===0)
	{
		document.getElementById("budio").src = 'assets/images/audiooff.png';
		s.pause();
	}
	else
	{
		document.getElementById("budio").src = 'assets/images/audioon.png';
		s.play();
	}
	countt+=1;
}

// till this

$(function() {
  AOS.init();
});

// This is the script for loader
// This script is for the navbar to get black background as it is scrolled
// $(function() {
//   $(document).scroll(function() {
//       var $nav = $(".navbar-fixed-top");
//       $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//     });
// });

// This is the script for loader
var loader;
function myFunction(){
document.body.style.background = "black";
loader = setTimeout(showpage,2000);
}

// var loader;
// function myFunction(){
//   console.log("SHOW PAGE IS CALLED");
//   loader = setTimeout(showpage,2000);
// }
function showpage(){
  document.querySelector(".loader").style.display = "none";
  document.querySelector(".animsition").style.display = "block";
  document.querySelector("footer").style.display = "block";
  document.body.style.background = "#010033";
  document.getElementById('intro').style.backgroundImage = "url('../images/myimages/mainvideo.gif')";
  document.getElementById('intro').style.backgroundRepeat = "no-repeat";
  document.getElementById('intro').style.backgroundSize = "cover";
  stoptyper();
}
// This script is for the explore button to scroll down
 // $(function() {
 //    $('.scroll-down').click (function() {
 //      $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
 //      return false;
 //    });
 //  });


 var intervalID = window.setInterval(updateScreen, 200);
 var c = document.getElementById("console");

var txt = [
  "FORCE: XX0022. ENCYPT://000.222.2345",
  "TRYPASS: *** AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
  "RETRY: REINDEER FLOTILLA",
  "Z:> /FALKEN/GAMES/TICTACTOE/ EXECUTE -PLAYERS 0",
  "================================================",
  "Priority 1 // local / scanning...",
  "scanning ports...",
  "BACKDOOR FOUND (23.45.23.12.00000000)",
  "BACKDOOR FOUND (13.66.23.12.00110000)",
  "BACKDOOR FOUND (13.66.23.12.00110044)",
  "...",
  "...",
  "BRUTE.EXE -r -z",
  "...locating vulnerabilities...",
  "...vulnerabilities found...",
  "MCP/> DEPLOY CLU",
  "SCAN: __ 0100.0000.0554.0080",
  "SCAN: __ 0020.0000.0553.0080",
  "SCAN: __ 0001.0000.0554.0550",
  "SCAN: __ 0012.0000.0553.0030",
  "SCAN: __ 0100.0000.0554.0080",
  "SCAN: __ 0020.0000.0553.0080",
]

var docfrag = document.createDocumentFragment();

function updateScreen() {
  //Shuffle the "txt" array
  txt.push(txt.shift());
  //Rebuild document fragment
  txt.forEach(function(e) {
    var p = document.createElement("p");
    p.textContent = e;
    docfrag.appendChild(p);
  });
  //Clear DOM body
  while (c.firstChild) {
    c.removeChild(c.firstChild);
  }
  c.appendChild(docfrag);
}
function stoptyper(){
  clearInterval(intervalID);
}

'use strict';

$(document).ready(function(){

  // ----------- Animsition -----------
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });


  // ----------- Smooth scroll -----------
  $('html').smoothScroll();


  // ----------- Slider -----------
  $('.slider').slick({
    infinite: true,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: true
  });

});


// ----------- ScrollReveal -----------
window.sr = ScrollReveal({ duration: 400 });
sr.reveal('.scroll-reveal');


// ----------- Parallax -----------
jQuery(window).trigger('resize').trigger('scroll');

window.setTimeout(function(){
    $(window).resize();
},500);


// ----------- Collapse expanded bootstrap nav -----------
$(document).on('click','.navbar-collapse.in',function(e) {
  if( $(e.target).is('a') ) {
    $(this).collapse('hide');
  }
});


// ----------- Scroll Spy -----------
$('body').scrollspy({
  target: '#nav-1', offset:80
});

// ------------ Mouse Parallax --------
$('#intro').mousemove(function(event){
//    console.log(event.pageX);
    $('#mouse-parallax').css('transform','translate('+-event.pageX/40+'px,'+-event.pageY/60+'px)');
    $('.parallax-mirror').css('transform','translate('+(-$(window).width()/2+event.pageX)/20+'px,'+(-$(window).height()/2+event.pageY)/20+'px) scale(1.2)');
//    $('.parallax-mirror').css('',(-$(window).width()/2+event.pageX)/40+'px');
})

