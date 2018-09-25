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