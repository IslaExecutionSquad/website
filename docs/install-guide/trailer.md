<!-- <style>
  h1 { text-align: center; }
  h2 { text-align: center; }
</style> -->
<script>
    function playVideo(videoId) {
    var video = document.getElementById(videoId);
    var thumbnail = video.nextElementSibling;

    thumbnail.style.display = "none";
    video.style.display = "block";
    video.play();
}
</script>
<div class="video-row">
  <div class="video-item">
    <h1>Teaser Trailer</h1>
    <div class="video-wrapper">
      <video id="video1" class="video-player" controls>
        <source src="/assets/videos/Plastic_Memories_Teaser.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <img src="/assets/images/thumbnail_teaser.webp" class="video-thumbnail" onclick="playVideo('video1')">
    </div>
  </div>

  <div class="video-item">
    <h1>Opening Movie</h1>
    <div class="video-wrapper">
      <video id="video2" class="video-player" controls>
        <source src="/assets/videos/op_1080_web.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <img src="/assets/images/thumbnail_opening.webp" class="video-thumbnail" onclick="playVideo('video2')">
    </div>
  </div>
</div>
