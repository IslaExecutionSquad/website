---
title: Frequently Asked Questions - Isla Execution Squad
description: You have a question. This page has the answer. Maybe.
image: https://www.islaexecutionsquad.com/assets/images/steam_library_no_logo.webp
keywords:
  - Isla Execution Squad
  - Plastic Memories
---
<script>
    document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".md-ellipsis").forEach(el => {
        if (el.textContent.trim() === "Plastic Memories Visual Novel") {
            el.style.display = "none";
        }
    });
});
</script>
<style>
  h1 { text-align: center; }
</style>
# Frequently Asked Questions
## Can I run Plastic Memories in Vita3k?  
As of 11/2023 the game now functions with minor issues in Vita3k for PC and Android with the Vulkan renderer.   
If running on PC, please use the PC conversion of Plastic Memories.

!!! warning ""
    Issues reported with Vita3k and other PlayStation Vita emulators will **not** be supported.

## Can my PC run Plastic Memories?  
Most likely yes. The PC conversion can run on Windows 11/10/8.1/7/Vista and on Linux via Lutris.  
PCs from 2013 or newer should be able to run the game without issue.

## Can I run Plastic Memories on MacOS?  
It should be possible with WINE or CrossOver by installing dependencies mentioned in step 13 of [Installing with Steam Play](/install-guide/linux/#installing-with-steam-play), but this has not been tested.

Vita3k can be used to play the game on Mac. 

!!! note "Help Wanted"
    Looking for help testing Plastic Memories with CrossOver or a WINE equivalent for MAC OS. Intrested? Reach out to Shaggy in our Discord!

## When I launch Plastic Memories I get a System Error. How do I fix it?  
There are four known errors that can pop up when launching Plastic Memories for the first time.

* Error: “d3dx9_43.dll was not found.” “XINPUT1_3.dll was not found”  
  Fix: Your system is missing DirectX 9.0c or a component of it, install the legacy DirectX SDK from [here](https://www.microsoft.com/en-us/download/details.aspx?id=35).  
* Error: “msvcp140.dll is missing”  
  Fix: Install Microsoft Visual C++ x86 and x64 Redistributables from [here](https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170).  
* Error: “0xc000007b” or “The application was unable to start correctly.”  
  Fix: This is a dependency issue, likely one or more dependencies is corrupt or non-functional.  
  If reinstalling DirectX or Visual C++ fails to fix the issue, try putting [d3dx9_43.dll](https://github.com/Shaggythecat/PlaMemo-Manual-Files/raw/main/DLL/D3DX9_43.dll) in your PlaMemo folder.

## Why are cutscenes not playing?  
You need to install the K-Lite codec basic pack from [here](https://codecguide.com/download_k-lite_codec_pack_basic.htm).

!!! warning ""
    Make sure not to install the bundled software with the installer.

## How do I exit Interaction Mode?
On PlayStation Vita press and hold the Cross(X) button.  

On PC press and hold Circle, B on Xbox controllers, or Z on your keyborad.

## How do I mod my PlayStation Vita?  
Follow the excellent written guide at [Vita.Hacks.Guide](https://vita.hacks.guide/) to mod your Playstation Vita. 

## After installing the patch I get a black screen when launching Plastic Memories.  
Most likely you’ve only downloaded the PC patch, and are trying to launch the updated game executable without patching the base game.

Or you’ve installed the wrong version of the patch. Verify that you downloaded and installed the correct patch, **PC.7z** is intended for the PC conversion and **Vita.7z** is intended for use on the physical or digital Playstation Vita release.

!!! warning ""
    [Cyrillic](https://en.wikipedia.org/wiki/Cyrillic_script) characters in the file path will also cause this issue.

## Where can I buy Plastic Memories?  
Unfortunately you can no longer easily buy Plastic Memories, because it has been delisted from the [PSN Store](https://www.jp.playstation.com/software/title/jp0745pcsg00931_00plasticmemoriesv.html).

At the time of writing, you can buy a physical copy of Plastic Memories on Ebay for about $120-$200 USD.

## Where can I download the game?
While the PC Port of the game is an unoffical port it will not be linked on this site. You can find it in the Plastic Memories Discord communities, or that site that is a Japanese onomatopoeia for a cat's meow.

As mentioned [above](#where-can-i-buy-plastic-memories), the PS Vita game cannot be purchaced anymore due to MAGES delisting the game in 2022. Though it can still be downloaded from the PSN serves, or found in the Plastic Memories Discord communities.

Please support MAGES by purchasing their visual novels on PlayStation, Nintendo Switch, [Steam](https://store.steampowered.com/curator/34514991-Science-Adventure-Series/), DMM, or [GOG](https://www.gog.com/en/game/chaos_head_noah).

### VirusTotal says the game is a virus.
We can guarantee that the patch execuatable included with the patch download linked on this website, or on our Discord, is not a virus. While some security vendors my flag PlaMemo's execuatable as a virus it is marked as safe by major security vendors like Google and Microsoft. You can view the executable's report of VirusTotal [here](https://www.virustotal.com/gui/file/955fcad95b0c5f2f253a1a3a7483d5be7935684df822079a49f5ba4ac52e628e).

!!! danger
    Do not download pre-patched versions of the game, there are several sites that distribute the game pre-patched. We cannot confirm if the content distributed by those sites are safe.

!!! tip ""
    Still unsure? Have your oun antivirus like Windows Defender check your file before running it.

## Are the improvements made for the English patch available for the Japanese version?
For the PC a minor improvement patch was made using Bloody's fix for the conversion's broken controls, Shaggy's fix for a broken texture, and adds in DoubleEyepach's Prologue Skip. The minor improvement patch can be downloaded [here](/assets/Keyboard_Fix.zip).

There is no improvement patch available for PS Vita.

## Is Plastic Memories translated into [insert language here]?
Check [PlaMemo's VNDB page](https://vndb.org/v19441) to see if there is an active or completed translation in the language you're interested in.
<!-- If not head on over to [Project Resources](/resources.md) to start your several month to multi-year journey to translate the visual novel of all time. -->

!!! tip "Spanish"
    Stop by the #spanish-general in the IES Discord if you're intested in a Spanish trasnlation. Por qué!

## Known Issues

* At a certain point in the game a menu may appear blurry and have some text fringing.  
* In rare cases, on PC, choices may appear washed out and transparent when skipping. To fix it, open and close the system menu.  
* A quick save created from the added choice in the prologue will return you to the title screen when attempting to load that save.  
* Screen tearing is noticeable on older systems. Open “Plastic Memories.txt” and set VSYNC to 0 to fix it.  
* Steam Deck users will experience stuttering in cutscenes if SteamOS’s frame limiter is enabled. 

!!! question ""
    Need more help? [Join our Discord!](https://discord.gg/A65RE2CMFn)