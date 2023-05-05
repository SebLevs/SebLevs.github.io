const videos = document.getElementsByTagName("video");
const windowHeight = window.innerHeight || document.documentElement.clientHeight;

addEventListener('load', init);

function init()
{
    loadVideosMetaData();
    setVideoStatus();
}

function loadVideosMetaData()
{
    for (let i = 0; i < videos.length; i++) {
        videos[i].load;
    }
}

/*setInterval(setVideoStatus, 5000);*/

window.addEventListener("scroll", function(event) {
	setVideoStatus();
});

function setVideoStatus(){
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
}