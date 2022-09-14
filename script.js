const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt user to select media stream, pass to video element, play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    } catch (error) {
        // catch errors
        console.log('there was an error ', error);
    }
}

button.addEventListener('click', async () => {
    // button disabled
    button.disabled = true;

    // start pic in pic
    await videoElement.requestPictureInPicture();

    // reset button
    button.disabled = false;

});

selectMediaStream();