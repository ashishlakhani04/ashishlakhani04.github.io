var countt=0;
function music() {
	var po = document.getElementById("budio").src;
	var s = document.getElementById("gggaudio");
	if(countt%2===0)
	{
		document.getElementById("budio").src = 'img/audioon.png';
		s.play();
	}
	else
	{
		document.getElementById("budio").src = 'img/audioff.png';
		s.pause();
	}
	countt+=1;
}
function music2() {
	var po = document.getElementById("budio").src;
	var s = document.getElementById("gggaudio");
	if(countt%2===0)
	{
		document.getElementById("budio").src = '../img/audioon.png';
		s.play();
	}
	else
	{
		document.getElementById("budio").src = '../img/audioff.png';
		s.pause();
	}
	countt+=1;
}
// This is the script for loader
var loader;
function myFunction(){
  // if(window.location.href == )
	loader = setTimeout(showpage,1000);
}
function showpage(){
  
	document.querySelector(".loader").style.display = "none";
	document.querySelector(".maindiv").style.display = "block";
	stoptyper();
}
// This script is for the explore button to scroll down
 $(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
      return false;
    });
  });

 var intervalID = window.setInterval(updateScreen, 200);
 var c = document.getElementById("console");

var txt = [
  "FORCE: XX0022. ENCYPT://000.222.2345",
  "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
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