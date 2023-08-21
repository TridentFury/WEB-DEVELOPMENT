document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("myVideo");
  const playPauseBtn = document.getElementById("playPauseBtn");


  // Update Current Running Time and duration
  video.addEventListener("timeupdate", function () {
    const currentPos = video.currentTime;
    const maxDuration = video.duration;
    const percentage = (currentPos / maxDuration) * 100;
    seekSlider.value = percentage;
    currentTime.innerHTML = formatTime(currentPos);
    duration.innerHTML = formatTime(maxDuration);
  });

  // Show time in Minutes & Seconds.
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }
});



//   VIDEO FROM PC
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("myVideo");


  // Get the query parameter from the URL
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const videoSrc = urlParams.get("video");


  // Set the video source based on the query parameter
  if (videoSrc) {
    const source = document.createElement("source");
    source.src = videoSrc;
    source.type = "video/mp4"; 
    // This will update the type if your video is in a different format like mkv etc.

    video.appendChild(source);

    // Play the trailer automatically
    video.play();
  }


});
