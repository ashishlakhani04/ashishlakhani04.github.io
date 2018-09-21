var countt=0;
function music() {
	var po = document.getElementById("budio").src;
	var s = document.getElementById("gggaudio");
	if(countt%2===0)
	{
		document.getElementById("budio").src = '../inceptum/img/audioon.png';
		s.play();
	}
	else
	{
		document.getElementById("budio").src = '../inceptum/img/audioff.png';
		s.pause();
	}
	countt+=1;
}

var countt2=0;
function music() {
	var po = document.getElementById("budio").src;
	var s = document.getElementById("gggaudio");
	if(countt2%2===0)
	{
		document.getElementById("budio").src = '../../inceptum/img/audioon.png';
		s.play();
	}
	else
	{
		document.getElementById("budio").src = '../../inceptum/img/audioff.png';
		s.pause();
	}
	countt2+=1;
}