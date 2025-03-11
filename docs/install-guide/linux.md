<style>
  h1 { text-align: center; }
  h2 { text-align: center; }
</style>
## Installing with Lutris (recommended)
Prerequisites:  
PC Conversion of the Game (For legal reasons a download link is not included in this manual.)  
Lutris (installation instructions can be found [here](https://lutris.net/downloads))

1. Open Lutris, press the "\+" in the upper right corner and click "Search the Lutris website for installers".

    !!! note ""
        The installer can also be selected from the [Lutris website](https://lutris.net/games/plastic-memories/).

2. Then search for “Plastic Memories” and select it.  
3. Click Install for “PC ENG Patch” and choose what directory to install the game in. If installing on Steam Deck click "Create Steam shortcut” in the bottom right corner. Then click Install to continue.

    !!! tip ""
        Steam must be restarted for the shortcut to appear.

4. There will be a prompt to select the PC Conversion, navigate to where “**PC Port.7z**” was downloaded and select it. This file must remain compressed, Lutris will handle decompression and installation. The English Patch will automatically be downloaded by Lutris.

    !!! tip ""
        The version of the patch downloaded through the installer differs slightly from the patch on Google Drive, as it doesn’t include this manual, a teaser, and steam assets.

5. Lutris will then download the required fixes, the appropriate Wine version, and install everything. This process will take several minutes.  
6. Once Lutris finishes installing, click “Launch”.  
7. The four indications that you’ve correctly installed the patch are the window title being Plastic Memories English Patch, the game booting to the MAGES logo, sound effects working properly, and English text after selecting “New Game”. For non-Steam installs this is the end of the guide.  
8. Follow the “[Playing Through Steam](steam.md)” section of this manual to set the provided custom artwork and community controller layout.  
9. Steam Deck users will need to return to gaming mode by clicking “Return to Gaming Mode” on the desktop.   
10. Once in gaming mode navigate to the non-Steam tab in your library and launch Plastic Memories.

    !!! warning ""
        In rare instances controls may not function properly and require the game to be closed and relaunched.

11. Once in-game, open the quick settings menu by pressing the “...” button, scroll down to the performance tab (battery icon), click “Advanced View”, enable “Use Per-Game Profile”, and set the “Framerate Limit” to “OFF”. This will prevent the game from having performance problems in gaming mode. 

**(Outdated)** A video tutorial for this installation method is available here:

<div style="display: flex; justify-content: center;">
  <iframe width="1120" height="630" src="https://www.youtube.com/embed/_UaOaO5bS7I" frameborder="0" allowfullscreen></iframe>
</div>

!!! note "General Video Notes"
    !!! warning ""
        In this video the PC port is incorrectly shown and referred to as “Plamemo.7z”, the name of the file currently is “PC Port.7z”.

    !!! warning ""
        Some steps also differ slightly due to updates to the Lutris script. DirectX no longer needs to be installed, and PC.7z no longer needs to be downloaded before installation

    !!! note ""
        The prewritten install script has been removed in favor of an approved Lutris script. However if you prefer to use the script it can be downloaded [here](https://github.com/Shaggythecat/PlaMemo-Manual-Files/releases/download/1/Plastic_Memories_Lutris_Install_Script.yaml).

## Installing with Steam Play
Prerequisites:
PC Conversion of the Game (For legal reasons a download link is not included in this manual.)  
ProtonTricks, found [here](https://flathub.org/apps/details/com.github.Matoking.protontricks).

1. Extract the PC conversion “**PC Port.7z**” to your desired install location.   
2. Follow steps 1 and 2 from [PC Patch Installation](PC.md) to install the patch.  
3. Open Steam, click “Add A Game” in the bottom left corner, and select “Add a Non-Steam Game”

    !!! note ""
        Alternatively Steam Deck/SteamOS users can right click “Plastic Memories.exe” in Dolphin file explorer and click “add to Steam”.

4. Then click “Browse” to open a file explorer. By default the file explorer will only show .desktop files. There is a drop-down menu at the bottom of the explorer window. Click it and select “All Files”.
5. Navigate to where Plastic Memories is installed, select “Plastic Memories.exe”, and hit okay.  
6. This will create a shortcut on Steam called “Plastic Memories.exe” find it in your Steam Library, right- click on it and click properties.
7. Under “SHORTCUT”, rename “Plastic Memories.exe” to “Plastic Memories”.
8. Hit “PLAY”. This creates a prefix for the shortcut and launches the game. Close the game after it launches.  
9. Next launch Protontricks.  
10. This will open a window showing all of the Steam games on your system using Proton. Look for "Non-Steam shortcut: Plastic Memories" and select it.

    !!! warning ""
        If Plastic Memories was not launched in step 8 it will not show up on the list.

11. In the next prompt choose “Select the default wineprefix” and press okay.  
12. Then select “Install a Windows DLL or component” and press okay.  
13. When prompted to install packages select “**MF** \- Microsoft Media Foundation” and “**xact** \- MS XACT Engine (32-bit only)”. This may take some time to install, please be patient.   
14. Once complete, open Steam and click “PLAY” again to launch Plastic Memories.  
15. The four indications that you’ve correctly installed the patch are the window title being Plastic Memories English Patch, the game booting to the MAGES logo, sound effects working properly, and English text after selecting “New Game”.   
16. Follow the “[Playing Through Steam](steam.md)” section of this manual to set the provided custom artwork and community controller layout.   
17. Steam Deck users will need to return to gaming mode by clicking “Return to Gaming Mode” on the desktop.   
18. Once in gaming mode navigate to the Non-Steam tab in your library and launch Plastic Memories.  
19. Once in-game, open the quick settings menu by pressing the “...” button, scroll down to the performance tab (battery icon), click “Advanced View”, enable “Use Per-Game Profile”, and set the “Framerate Limit” to “OFF”. This will prevent the game from having performance problems in gaming mode. 

A video tutorial for this installation method is available here.

<div style="display: flex; justify-content: center;">
  <iframe width="1720" height="630" src="https://www.youtube.com/embed/iiK42BEfnRQ" frameborder="0" allowfullscreen></iframe>
</div>

!!! warning ""
    This video uses an older installation method that requires installing Proton-GE and DirectX for videos and audio.