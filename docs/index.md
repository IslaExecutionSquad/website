---
title: 
description: The front page for IES projects.
image: https://www.islaexecutionsquad.com/assets/images/steam_library_no_logo.webp
keywords:
  - manga
  - IES Novels
  - Isla Execution Squad
  - Plastic Memories
  - Say to Good-bye
  - scanlation
  - Love Lab
  - Steins;Gate - Theory-filled Heart of the Sweet Honey
  - Tari Tari
  - Mini Anthology Comics
  - Sakurada Reset
  - Imperfect Girl

hide:
  - navigation
  - toc
---
<style>
    h1 { text-align: center; font-weight: bold; font-family: "PirulenRegular", sans-serif; letter-spacing: 1px }
    h2 { text-align: center; font-family: "PirulenRegular", sans-serif; letter-spacing: 1px; }
</style>
<script>
    document.addEventListener("DOMContentLoaded", function () {
    let sakuradaCovers = [
        "assets/images/sr1.webp",
        "assets/images/sr2.webp",
        "assets/images/sr3.webp",
        "assets/images/sr4.webp",
        "assets/images/sr5.webp",
        "assets/images/sr6.webp",
        "assets/images/sr7.webp"
    ];
    let index = 0;
    let imgElement = document.querySelector(".sakurada-reset");
    if (imgElement) {
        setInterval(() => {
            index = (index + 1) % sakuradaCovers.length;
            imgElement.src = sakuradaCovers[index];
        }, 5000);
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const originalImages = Array.from(track.querySelectorAll(".carousel-image"));

    // Duplicate the full set once so the track is exactly 2x wide: animating
    // from 0 to -50% then loops seamlessly back to an identical starting point.
    originalImages.forEach((img) => {
        track.appendChild(img.cloneNode(true));
    });
});
// document.addEventListener("DOMContentLoaded", function () {
//     const links = [
//         "", //Banner 1
//         "", // Banner 2
//         "https://novels.islaexecutionsquad.com/sakurada-reset/", // Banner 3
//         "", // Banner 4
//         "/patch", // Banner 5
//         "", // Banner 6
//         "", // Banner 7
//         "", // Banner 8
//         "/patch", // Banner 9
//         "https://novels.islaexecutionsquad.com/imperfect-girl/", // Banner 17 - Yeah weird placement
//         "", // Banner 10
//         "https://novels.islaexecutionsquad.com/sakurada-reset/", // Banner 11
//         "", // Banner 12
//         "https://novels.islaexecutionsquad.com/sakurada-reset/", // Banner 13
//         "", // Banner 14
//         // "https://www.youtube.com/watch?v=Kob0G2hE8IY" // Banner 15 - HE-MAN HEYEAYEA SONG FOR 10 HOURS
//         "https://novels.islaexecutionsquad.com/imperfect-girl/", // Banner 16
//     ];

//     document.querySelectorAll(".carousel-image").forEach((img, index) => {
//         const actualIndex = index % links.length;
//         img.addEventListener("click", function () {
//             window.open(links[actualIndex], "_blank");
//         });

//         img.style.cursor = "pointer";
//     });
// });
</script>
# Our Translation Projects
<div class="carousel">
  <div class="carousel-track">
    <img src="assets/images/banner1.webp" class="carousel-image" alt="Banner 1">
    <img src="assets/images/banner2.webp" class="carousel-image" alt="Banner 2">
    <img src="assets/images/banner3.webp" class="carousel-image" alt="Banner 3">
    <img src="assets/images/banner4.webp" class="carousel-image" alt="Banner 4">
    <img src="assets/images/banner5.webp" class="carousel-image" alt="Banner 5">
    <img src="assets/images/banner6.webp" class="carousel-image" alt="Banner 6">
    <img src="assets/images/banner7.webp" class="carousel-image" alt="Banner 7">
    <img src="assets/images/banner8.webp" class="carousel-image" alt="Banner 8">
    <img src="assets/images/banner9.webp" class="carousel-image" alt="Banner 9">
    <img src="assets/images/banner17.webp" class="carousel-image" alt="Banner 17">
    <img src="assets/images/banner10.webp" class="carousel-image" alt="Banner 10">
    <img src="assets/images/banner11.webp" class="carousel-image" alt="Banner 11">
    <img src="assets/images/banner12.webp" class="carousel-image" alt="Banner 12">
    <img src="assets/images/banner13.webp" class="carousel-image" alt="Banner 13">
    <img src="assets/images/banner14.webp" class="carousel-image" alt="Banner 14">
    <!-- <img src="assets/images/banner15.webp" class="carousel-image" alt="Banner 15"> -->
    <img src="assets/images/banner16.webp" class="carousel-image" alt="Banner 16">
  </div>
</div>

## Visual Novel
<div class="project-row">
  <div class="project-item">
    <p>Plastic Memories</p>
    <a href="/patch">
      <img src="assets/images/steam_library_english.webp" alt="Plastic Memories" class="project-img">
    </a>
  </div>
</div>

## Manga
<div class="project-row">
  <div class="project-item">
    <p>Plastic Memories: Say to Good-bye</p>
    <!-- <a href=""> -->
      <img src="assets/images/pmstgb.webp" alt="Plastic Memories: Say to Good-bye" class="project-img">
    </a>
  </div>
  <div class="project-item">
    <p>Steins;Gate - Theory-filled Heart of the Sweet Honey</p>
    <!-- <a href=""> -->
      <img src="assets/images/sg.webp" alt="Steins;Gate" class="project-img">
    </a>
  </div>
    <div class="project-item">
    <p>Tari Tari</p>
    <!-- <a href=""> -->
      <img src="assets/images/tt.webp" alt="Tari Tari" class="project-img">
    </a>
  </div>
  <div class="project-item">
    <p>Plastic Memories Mini Anthology Comics</p>
    <!-- <a href=""> -->
      <img src="assets/images/pmmca.webp" alt="Plastic Memories Mini Comic Anthology" class="project-img">
    </a>
  </div>
  <div class="project-item">
    <p>Love Lab</p>
    <!-- <a href=""> -->
      <img src="assets/images/ll.webp" alt="Love Lab" class="project-img">
    </a>
  </div>
</div>

## Novels
<div class="project-row">
  <div class="project-item">
    <p>Sakurada Reset</p>
    <a href="https://novels.islaexecutionsquad.com/sakurada-reset/">
      <img class="project-img sakurada-reset" src="assets/images/sr1.webp" alt="Sakurada Reset">
    </a>
  </div>
  <div class="project-item">
    <p>Imperfect Girl</p>
    <a href="https://novels.islaexecutionsquad.com/imperfect-girl/">
      <img class="project-img" src="assets/images/Imperfect_girl.webp" alt="Imperfect Girl">
    </a>
  </div>
  <div class="project-item">
    <p>Just Because!</p>
    <a href="https://novels.islaexecutionsquad.com/just-because/">
      <img class="project-img" src="assets/images/justbecause.webp" alt="Just Because!">
    </a>
  </div>
  <div class="project-item">
    <p>Puella Magi Madoka Magica</p>
    <a href="https://novels.islaexecutionsquad.com/puella-magi-madoka-magica/">
      <div class="project-img project-img-placeholder">Cover Coming Soon</div>
    </a>
  </div>
  <div class="project-item">
    <p>A Silent Voice</p>
    <a href="https://novels.islaexecutionsquad.com/a-silent-voice/">
      <div class="project-img project-img-placeholder">Cover Coming Soon</div>
    </a>
  </div>
</div>
