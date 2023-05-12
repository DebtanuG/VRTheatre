AFRAME.registerComponent('play-pause', {
    init: function () {
        var myVideo = document.querySelector('#main_video');
        var videoControls = document.querySelector('#videoControls');
        var lightControls = document.querySelector('#HeadLights');
        this.el.addEventListener('click', function () {
            if (myVideo.paused) {
                myVideo.play();
                videoControls.setAttribute('src', '#pause');
                lightControls.setAttribute('visible',false);
            } else {
                myVideo.pause();
                lightControls.setAttribute('visible',true);
                videoControls.setAttribute('src', '#play');
            }
        });
    }
});
/*
AFRAME.registerComponent('up-light',{
    init: function () {
        var myVideo = document.querySelector('#main_video');
        var lightControls = document.querySelector('#HeadLights');
        this.el.addEventListener('click', function () {
            if(myVideo.paused) {
                lightControls.setAttribute(visible,'true');
            }
        })
    }
})
*/