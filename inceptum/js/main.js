var countt=0;
function music() {
	var po = document.getElementById("budio").src;
	var s = document.getElementById("gggaudio");
	if(countt%2===0)
	{
		document.getElementById("budio").src = 'file:///Users/jasbir/Downloads/ashishlakhani04.github.io-master%202/inceptum/img/audioon.png';
		s.play();
	}
	else
	{
		document.getElementById("budio").src = 'file:///Users/jasbir/Downloads/ashishlakhani04.github.io-master%202/inceptum/img/audioff.png';
		s.pause();
	}
	countt+=1;
}
