const videos = document.getElementsByTagName("video");
const windowHeight = window.innerHeight || document.documentElement.clientHeight;

window.addEventListener("scroll", function(event) {
	for (let i = 0; i < videos.length; i++) {
        
		const video = videos[i];
		const videoRect = video.getBoundingClientRect();
		if (videoRect.bottom <= 0 || videoRect.top >= windowHeight) {
            if (video.paused) { return; }
			video.pause();
		} else if (video.paused){
			video.play();
		}
	}
});