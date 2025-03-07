---
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
    const imageCount = images.length / 2;
    const imageWidth = images[0].clientWidth;

    track.style.width = `${imageWidth * imageCount * 1}px`;

    for (let i = 0; i < imageCount; i++) {
        const clone = images[i].cloneNode(true);
        track.appendChild(clone);
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const links = [
        "https://mangadex.org/title/bfe71e5b-b403-42aa-8745-f83c8e5a5ab9/plastic-memories-mini-comic-anthology", //Banner 1
        "https://mangadex.org/title/ca98fe66-7b88-49a8-83b0-511fca029237/love-lab", // Banner 2
        "https://novels.islaexecutionsquad.com/sakurada-reset/", // Banner 3
        "https://mangadex.org/title/64897926-3836-4307-a89d-86fb4d4ae4af/steins-gate-hiyoku-renri-no-sweets-honey", // Banner 4
        "/patch", // Banner 5
        "https://mangadex.org/title/b65df83a-afc3-43c9-8bc5-0ba45ea55ed7/tari-tari", // Banner 6
        "https://mangadex.org/title/bfe71e5b-b403-42aa-8745-f83c8e5a5ab9/plastic-memories-mini-comic-anthology", // Banner 7
        "https://mangadex.org/title/ca98fe66-7b88-49a8-83b0-511fca029237/love-lab", // Banner 8
        "/patch", // Banner 9
        "https://example.com/link10", // Banner 10
        "https://novels.islaexecutionsquad.com/sakurada-reset/", // Banner 11
        "https://mangadex.org/title/bfe71e5b-b403-42aa-8745-f83c8e5a5ab9/plastic-memories-mini-comic-anthology", // Banner 12
        "https://novels.islaexecutionsquad.com/sakurada-reset/", // Banner 13
        "https://mangadex.org/title/ca98fe66-7b88-49a8-83b0-511fca029237/love-lab", // Banner 14
        "https://www.youtube.com/watch?v=Kob0G2hE8IY" // Banner 15 - HE-MAN HEYEAYEA SONG FOR 10 HOURS
    ];

    document.querySelectorAll(".carousel-image").forEach((img, index) => {
        const actualIndex = index % links.length;
        img.addEventListener("click", function () {
            window.open(links[actualIndex], "_blank");
        });

        img.style.cursor = "pointer";
    });
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
    <img src="assets/images/banner10.webp" class="carousel-image" alt="Banner 10">
    <img src="assets/images/banner11.webp" class="carousel-image" alt="Banner 9">
    <img src="assets/images/banner12.webp" class="carousel-image" alt="Banner 9">
    <img src="assets/images/banner13.webp" class="carousel-image" alt="Banner 9">
    <img src="assets/images/banner14.webp" class="carousel-image" alt="Banner 9">
    <img src="assets/images/banner15.webp" class="carousel-image" alt="Banner 9">
    <img src="assets/images/banner1.webp" class="carousel-image" alt="Banner 1">
    <img src="assets/images/banner2.webp" class="carousel-image" alt="Banner 2">
    <img src="assets/images/banner3.webp" class="carousel-image" alt="Banner 3">
    <img src="assets/images/banner4.webp" class="carousel-image" alt="Banner 4">
    <img src="assets/images/banner5.webp" class="carousel-image" alt="Banner 5">
    <img src="assets/images/banner6.webp" class="carousel-image" alt="Banner 6">
    <img src="assets/images/banner7.webp" class="carousel-image" alt="Banner 6">
    <img src="assets/images/banner8.webp" class="carousel-image" alt="Banner 6">
    <img src="assets/images/banner9.webp" class="carousel-image" alt="Banner 6">
    <img src="assets/images/banner10.webp" class="carousel-image" alt="Banner 9">
    <img src="assets/images/banner11.webp" class="carousel-image" alt="Banner 9">
    <img src="assets/images/banner12.webp" class="carousel-image" alt="Banner 9">
    <img src="assets/images/banner13.webp" class="carousel-image" alt="Banner 9">
    <img src="assets/images/banner14.webp" class="carousel-image" alt="Banner 9">
    <img src="assets/images/banner15.webp" class="carousel-image" alt="Banner 9">
    <img src="assets/images/banner1.webp" class="carousel-image" alt="Banner 1">
    <img src="assets/images/banner2.webp" class="carousel-image" alt="Banner 2">
    <img src="assets/images/banner3.webp" class="carousel-image" alt="Banner 3">
    <img src="assets/images/banner4.webp" class="carousel-image" alt="Banner 4">
    <img src="assets/images/banner5.webp" class="carousel-image" alt="Banner 5">
    <img src="assets/images/banner6.webp" class="carousel-image" alt="Banner 6">
    <img src="assets/images/banner7.webp" class="carousel-image" alt="Banner 6">
    <img src="assets/images/banner8.webp" class="carousel-image" alt="Banner 6">
    <img src="assets/images/banner9.webp" class="carousel-image" alt="Banner 6">
    <img src="assets/images/banner10.webp" class="carousel-image" alt="Banner 9">
    <img src="assets/images/banner11.webp" class="carousel-image" alt="Banner 9">
    <img src="assets/images/banner12.webp" class="carousel-image" alt="Banner 9">
    <img src="assets/images/banner13.webp" class="carousel-image" alt="Banner 9">
    <img src="assets/images/banner14.webp" class="carousel-image" alt="Banner 9">
    <img src="assets/images/banner15.webp" class="carousel-image" alt="Banner 9">
    <img src="assets/images/banner1.webp" class="carousel-image" alt="Banner 1">
    <img src="assets/images/banner2.webp" class="carousel-image" alt="Banner 2">
    <img src="assets/images/banner3.webp" class="carousel-image" alt="Banner 3">
    <img src="assets/images/banner4.webp" class="carousel-image" alt="Banner 4">
    <img src="assets/images/banner5.webp" class="carousel-image" alt="Banner 5">
    <img src="assets/images/banner6.webp" class="carousel-image" alt="Banner 6">
    <img src="assets/images/banner7.webp" class="carousel-image" alt="Banner 6">
    <img src="assets/images/banner8.webp" class="carousel-image" alt="Banner 6">
    <img src="assets/images/banner9.webp" class="carousel-image" alt="Banner 6">
    <img src="assets/images/banner10.webp" class="carousel-image" alt="Banner 9">
    <img src="assets/images/banner11.webp" class="carousel-image" alt="Banner 9">
    <img src="assets/images/banner12.webp" class="carousel-image" alt="Banner 9">
    <img src="assets/images/banner13.webp" class="carousel-image" alt="Banner 9">
    <img src="assets/images/banner14.webp" class="carousel-image" alt="Banner 9">
    <img src="assets/images/banner15.webp" class="carousel-image" alt="Banner 9">
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
    <a href="https://mangadex.org/title/7673f29d-9a4c-43aa-86f8-6136c181cc31/plastic-memories-say-to-good-bye">
      <img src="assets/images/pmstgb.webp" alt="Plastic Memories: Say to Good-bye" class="project-img">
    </a>
  </div>
  <div class="project-item">
    <p>Steins;Gate - Theory-filled Heart of the Sweet Honey</p>
    <a href="https://mangadex.org/title/64897926-3836-4307-a89d-86fb4d4ae4af/steins-gate-hiyoku-renri-no-sweets-honey">
      <img src="assets/images/sg.webp" alt="Steins;Gate" class="project-img">
    </a>
  </div>
    <div class="project-item">
    <p>Tari Tari</p>
    <a href="https://mangadex.org/title/b65df83a-afc3-43c9-8bc5-0ba45ea55ed7/tari-tari">
      <img src="assets/images/tt.webp" alt="Tari Tari" class="project-img">
    </a>
  </div>
  <div class="project-item">
    <p>Plastic Memories Mini Anthology Comics</p>
    <a href="https://mangadex.org/title/bfe71e5b-b403-42aa-8745-f83c8e5a5ab9/plastic-memories-mini-comic-anthology">
      <img src="assets/images/pmmca.webp" alt="Plastic Memories Mini Comic Anthology" class="project-img">
    </a>
  </div>
  <div class="project-item">
    <p>Love Lab</p>
    <a href="https://mangadex.org/title/ca98fe66-7b88-49a8-83b0-511fca029237/love-lab">
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
</div>
