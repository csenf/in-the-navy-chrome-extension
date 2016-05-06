var audioEl = document.querySelector('.in-the-navy .in-the-navy--container audio');
if (audioEl === null) {
	var div = document.createElement('div');
	document.body.appendChild(div);
	div.className = 'in-the-navy';
	div.innerHTML = '<div class="in-the-navy--container"><audio  name="media"><source type="audio/mp3"></audio></div>';
	var audio = document.querySelector('.in-the-navy .in-the-navy--container audio');
	audio.style.visibility = "hidden";
	audio.src = chrome.extension.getURL("/media/In the navy.mp3");
	audio.load();
	audio.addEventListener('loadeddata', function() {
	   audio.play();
	}, false);
	audio.onerror = function() {
    	alert("Couldnt load In The Navy :( Try another page.");
	};
} else {
	audioEl.play();
}
