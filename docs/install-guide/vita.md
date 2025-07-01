---
title: 
description: Plastic Memories Vita Install Guide
image: https://www.islaexecutionsquad.com/assets/images/steam_library_no_logo.webp
keywords:
  - Isla Execution Squad
  - Plastic Memories
---
<style>
  h1 { text-align: center; }
  h2 { text-align: center; }
</style>
Prerequisites:  
Modded Vita (If your Vita hasn't been modded yet, follow [this](https://vita.hacks.guide/) guide.)  
Physical or digital copy of the game

1. Connect your Vita through [FTP](https://filezilla-project.org/download.php?show_all=1) or USB (FTP is preferred as you can access the ur0: partition and the ux0: partition at the same time).  
2. Install the RePatch Plugin.

    a.  Download repatch.skprx from the [release](https://github.com/dots-tb/rePatch-reDux0/releases) page.  
    b.  Move repatch.skprx into the ur0:tai/ folder of your Vita.  
    c.  In the config.txt file which is located in the same folder, write “ur0:tai/repatch.skprx” under \*KERNEL. Save the file and reboot.
    ‎ 
    <div class="image-container">
    <img src="/assets/images/image32.webp" style="width: 800px;" alt="Controls">
    </div>
    <span class="c27">
    Your config.txt file should look something like this once you have installed the RePatch plugin (ignore all the other plugins in the image).
    </span>
    !!! tip ""
        If your Vita doesn’t boot after you’ve edited config.txt, hold the L trigger while booting the Vita to skip loading plugins and reconnect your Vita to your pc to check to make sure you have everything written correctly.

    d. Create a folder called “RePatch” in the ux0: directory of your Vita.

3. Copy over the RePatch folder from the patch you downloaded into the ux0: directory of your Vita. Replace any files if necessary. 

    <div class="image-container">
    <img src="/assets/images/image64.webp" style="width: 300px;" alt="Controls">
    </div>

    <span class="c27">
    The structure of your RePatch folder should look something like this.
    </span>

4. Run the game, and voilà\! You've installed the patch. If everything was done correctly, your game should now be in English.

A video tutorial for this installation method is available here:

<div style="display: flex; justify-content: center;">
  <iframe width="1120" height="630" src="https://www.youtube.com/embed/EobvErOhF88" frameborder="0" allowfullscreen></iframe>
</div>