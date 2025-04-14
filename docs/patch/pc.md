---
hide:
  - navigation
  - toc
---
<style>
  h1 { font-weight: bold; font-family: "PirulenRegular", sans-serif; letter-spacing: 1px; text-align: center; }
  /* h2 { text-align: center; } */
</style>
<script>
fetch("https://api.github.com/repos/islaexecutionsquad/website/releases")
  .then(res => res.json())
  .then(data => {
    const asset = data[0].assets.find(asset => asset.name === "PC.7z");
    const total = asset ? asset.download_count : "Not found";
    document.getElementById("pc").innerText = total + " times";
  });

fetch("https://api.github.com/repos/shaggythecat/PlaMemo-Manual-Files/releases") 
  .then(res => res.json())
  .then(data => {
    const asset = data[0].assets.find(asset => asset.name === "PC.7z");
    const total = asset ? asset.download_count : "Not found";
    document.getElementById("lutris").innerText = total + " times";
  });
</script>
# PC Patch
<div class="project-row-manga">
    <div class="project-description">
        <h2>Plastic Memories - PC English Patch</h2>
        <h3>Windows (PC)</h3>
        <ul>
            <a href="https://github.com/IslaExecutionSquad/website/releases/download/v1/PC.7z" class="md-button md-button--primary">Download PC Patch</a>
            <p></p>
            <li>Installation instructions can be found <a href=/install-guide/PC>here</a>.</li>
            <li>This patch has been downloaded <span id="pc">00 times</span> since April 1st 2025.</li>
        </ul>
        <h3>Linux/Steam Deck</h3>
        <ul>
            <!-- <li><a href="https://lutris.net/games/plastic-memories/">Install using Lutris.</a></li> -->
            <a href="https://lutris.net/games/plastic-memories/" class="md-button md-button--primary">Install using Lutris.</a>
            <p></p>
            <!-- <li>Removed files that will not be seen by the user as the game (download seprately) and patch are automaticly installed by Lutris.</li> -->
            <li>Installation instructions can be found <a href=/install-guide/linux>here</a>.</li>
            <li>This patch has been installed using Lutris <span id="lutris">00 times</span> since January 6th 2024.</li>
        </ul>
        <h2>Notice</h2>
        <ul>
            <li>This download is for the patch only. No downloads for the game are hosted on this website.</li>
            <li>Questions? Check our <a href=/install-guide/faq>FAQ section</a>, or ask in our <a href=https://discord.gg/Cpshet4QYH>Discord</a>!</li>
            <li>Do not download pre-patched versions of the game, there are several sites that distribute the game pre-patched. We cannot confirm if the content distributed by those sites are safe.</li>
        </ul>
    </div>
    <div class="project-item2">
        <!-- <p><h2>Download the latest version of the Plastic Memories English Patch by clicking the image below!<h2></p> -->
        <a href="https://github.com/IslaExecutionSquad/website/releases/download/v1/PC.7z">
            <img src="/assets/images/steam_library_english.webp" alt="PlaMemo PC" class="project-img">
        </a>
    </div>
</div>