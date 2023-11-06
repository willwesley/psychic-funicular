(() => {
  let video = null;

  function startup() {
    video = document.getElementById("video");

    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      .then(stream => {
        video.srcObject = stream
        video.play()
      })
  }

  window.addEventListener("load", startup, false);
})();
