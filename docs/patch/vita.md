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
    const asset = data[0].assets.find(asset => asset.name === "Vita.7z");
    const total = asset ? asset.download_count : "Not found";
    document.getElementById("vita").innerText = total + " times";
  });
</script>
# PlayStation Vita Patch
<div class="project-row-manga">
    <div class="project-description">
        <h2>Plastic Memories - PlayStation Vita English Patch</h2>
        <h3>V1.0.1 - April 1st 2025</h3>
        <ul>
            <a href="https://github.com/IslaExecutionSquad/website/releases/download/v1/Vita.7z" class="md-button md-button--primary">Download v1.0.1</a>
            <p></p>
            <li>Unlocked previously unavailable DLC content.</li>
            <li>Changed how the patch archive is loaded.</li>
            <li>This patch has been downloaded <span id="vita">00 times</span> since April 1st 2025.</li>
        </ul>
        <h3>V1.0.0 - December 23rd 2022</h3>
        <ul>
            <!-- <li><a href="https://drive.google.com/file/d/1PLPNwsTo-y_bxWUZx62l8e0xzMi2gVR0/view?usp=drive_link">Download v1.0.0 here.</a></li> -->
            <a href="https://drive.google.com/file/d/1PLPNwsTo-y_bxWUZx62l8e0xzMi2gVR0/view?usp=drive_link" class="md-button md-button--primary">Download v1.0.0</a>
            <p></p>
            <li>Inital Release</li>
        </ul>
        <h2>Notice</h2>
        <ul>
            <li>This download is for the patch only. No downloads for the game are hosted on this website.</li>
            <li>Instructions to install the patch can be found <a href=/install-guide/vita>here</a>.</li>
            <!-- <li>Plastic Memories has been delisted the PlayStaton Store.</li> -->
            <li>Questions? Check our <a href=/install-guide/faq>FAQ section</a>, or ask in our <a href=https://discord.gg/Cpshet4QYH>Discord</a>!</li>
        </ul>
    </div>
    <div class="project-item2">
        <!-- <p><h2>Download the latest version of the Plastic Memories English Patch by clicking the image below!<h2></p> -->
        <a href="https://github.com/IslaExecutionSquad/website/releases/download/v1/Vita.7z">
            <img src="/assets/images/vitadl.webp" alt="PlaMemo Vita" class="project-img">
        </a>
    </div>
</div>
