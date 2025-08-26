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
    const images = document.querySelectorAll(".carousel-image");
    const imageCount = images.length / 3.05;
    const imageWidth = images[1].clientWidth;

    track.style.width = `${imageWidth * imageCount * 1}px`;

    for (let i = 0; i < imageCount; i++) {
        const clone = images[i].cloneNode(true);
        track.appendChild(clone);
    }
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
  function dismissDMCA() {
    document.getElementById('dmcaNotice').style.display = 'none';
    localStorage.setItem('dmcaNoticeDismissed', 'true');
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('dmcaNoticeDismissed') === 'true') {
      const notice = document.getElementById('dmcaNotice');
      if (notice) notice.style.display = 'none';
    }
  });
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

<style>
  .dmca-notice {
    max-width: 1900px;
    margin: 60px auto;
    color: #eee;
    background: #222;
    padding: 10px 20px;
    border-radius: 8px;
    position: relative;
    font-family: sans-serif;
  }

  .dmca-notice h2,
  .dmca-notice h3 {
    text-align: center;
    color: #fff;
  }

  .dmca-notice .close-btn {
    position: absolute;
    top: 10px;
    right: 15px;
    background: #444;
    color: #fff;
    border: none;
    font-size: 20px;
    line-height: 1;
    padding: 2px 10px;
    cursor: pointer;
    border-radius: 4px;
  }

  .dmca-notice .close-btn:hover {
    background: #666;
  }

  .dmca-notice blockquote {
    border-left: 4px solid #888;
    padding-left: 15px;
    color: #ccc;
  }

  .dmca-notice ul {
    padding-left: 20px;
  }
</style>

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
</div>

<section class="dmca-notice" id="dmcaNotice">
  <button class="close-btn" onclick="dismissDMCA()">×</button>

  <h2>Regarding MangaDex Links</h2>

  <p><strong>On May 29th, 2025</strong>, <a href="https://novels.islaexecutionsquad.com/">IES Novels</a> received a <strong>DMCA notice</strong> from <em>'Remove Your Media LLC'</em> on behalf of <em>'WEBTOON Entertainment Inc.'</em>, filed February 9th, 2025.</p>

  <p>You might be thinking: <em>"Why did IES Novels receive a DMCA Notice from WEBTOON?"</em><br>
    We received the DMCA for having <strong>our MangaDex group page linked</strong> on IES Novels' front page.</p>

  <p>I am very disheartened that <em>'Remove Your Media LLC'</em> and <em>'WEBTOON Entertainment Inc.'</em> have decided to take this approach, as IES has <strong>not directly linked to nor worked on any WEBTOON content.</strong></p>

  <h3 style="text-align: left;">What happens now:</h3>
  <ul>
    <li>As of <strong>May 30th, 2025</strong>, all MangaDex links have been removed from IES Novels and the main IES website. This is to (hopefully) comply with and avoid any further action from the parties mentioned above.</li>
    <li>While the main IES site has <strong>not received a DMCA notice</strong>, it may still be targeted due to our group page being linked in the footer and our scanlations being featured on the homepage.</li>
    <li><strong>No counter claim will be filed</strong> due to the personal information required for the process.</li>
    <li>As a result, IES Novels has been delisted from Google and likely other search engines.</li>
  </ul>

  <p>IES and IES Novels will continue as usual. However, manga content will <strong>not be linked</strong> from our sites for the time being.</p>

  <h3 style="text-align: left;">Full Claim Received</h3>
  <blockquote>
    <li>Date of claim: Feb 9, 2025</li>
    <li>Rightsholder represented: Remove Your Media LLC</li>
    <li>Description of claim: Copyrighted webtoons published by WEBTOON Entertainment Inc. Sites are back linking illegal webtoon scanlation sites. This is contributory infringement. Pursuant to 17 USC 512(c)(3)(A)(ii) the official website for 'Licensed Webtoon Comics' includes a commulative episode list at the below url:</li>
  </blockquote>

  <p>The notice can also be found on the Lumen Database:<br>
    <a href="https://lumendatabase.org/notices/48914507" target="_blank" style="color: #66ccff;">https://lumendatabase.org/notices/48914507</a>
  </p>

<p>If you are a rights holder and wish to contact us regarding content hosted on this site, please review our DMCA policy at:<br>
<strong><a href="https://novels.islaexecutionsquad.com/copyright/" style="color: #66ccff;">www.islaexecutionsquad.com/copyright/</a></strong>
</p>
</section>