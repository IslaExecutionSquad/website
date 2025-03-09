<style>
  h1 { text-align: center; }
  h2 { text-align: center; }

        .content {
            padding: 20px;
        }
        .game-container {
            width: 100%;
            max-width: 1920px;
            margin: 0 auto;
            position: relative;
        }
        canvas {
            width: 100%;
            border-radius: 8px;
            height: auto;
        }
        .fullscreen-btn {
            position: absolute;
            bottom: 15x;
            right: 10px;
            cursor: pointer;
            border-radius: 8px;
        }
        .top-left-image {
            position: absolute;
            top: 10px;
            left: 0px;
            width: 200px;
            height: auto;
         }
</style>

# Interaction Mode
<body>
    <div class="content">
        <div class="game-container">
            <canvas class="emscripten" id="canvas" oncontextmenu="event.preventDefault()"></canvas>
            <div class="fullscreen-btn"><img src="TemplateData/fullscreen.png" width="38" height="38" alt="Fullscreen" title="Fullscreen" onclick="SetFullscreen(1);" /></div>
            <img src="monday.webp" alt="Monday Image" class="top-left-image">
        </div>
    </div>
    <script type='text/javascript'>
        var Module = {
            TOTAL_MEMORY: 268435456,
            errorhandler: null,
            compatibilitycheck: null,
            dataUrl: "Release/webgl.data",
            codeUrl: "Release/webgl.js",
            memUrl: "Release/webgl.mem"
        };
    </script>
    <script src="Release/UnityLoader.js"></script>
</body>
??? tip "Interaction Mode Demo"
    Cool huh? This is unplayable on the offical website for the Plastic Memories Visual Novel. If you found this you get a cookie. Let us know in our Discord what you think!

- Interaction Mode is accessed following each event.  
- Interaction Mode can be exited by holding the Circle (B) button, Z key, or Cross om PS Vita.
- Interaction Mode allows the player to utilize various elements to get different reactions out of Isla.  
- Using the D-pad’s up or down buttons moves the camera focus in the desired direction, while the Square and Triangle buttons zoom in and out respectively.  
- Pressing the Right Bumper or clicking the shirt icon takes the player to a menu that outlines currently unlocked costumes, and allows them to select from whichever one they please.  
- Interaction Mode has three main elements: Emotion, Touching, and Costumes.  
- Each of these elements combine to generate Isla’s reactions.  
  

### Emotion

- Isla has three emotions she can express:  
    - Cold: Stone-faced. Isla wears this expression when the player has gained 7 points or less.  
    - Happy: A gentle smile. Isla wears this expression when the player has gained between 8 and 20 points.  
    - Overjoyed: Blushing cheeks, usually with her arms held up excitedly. Isla wears this expression when the player has gained 21 or more points.  
- These expressions are soft point counters, and the only indication the game gives the player for what ending they will currently get.

<div class="steam-container">
    <div class="game-content2">
        <div class="game-item2">
            <img src="/assets/images/image13.webp" style="width: 213px;" class="game-image">
        </div>
        <div class="game-item2">
            <img src="/assets/images/image6.webp" style="width: 200px;" class="game-image">
        </div>
        <div class="game-item2">
            <img src="/assets/images/image14.webp" style="width: 200px;" class="game-image">
        </div>
    </div>
</div>
<br>

<!-- ![Cold](/assets/images/image13.webp)
![Happy](/assets/images/image6.webp)
![Overjoyed](/assets/images/image14.webp) -->

### Touching

- By using the touchscreen or clicking the mouse, the player can touch Isla. Touches include taps and holds.

<div class="steam-container">
    <div class="game-content2">
        <div class="game-item2">
            <img src="/assets/images/image7.webp" style="width: 200px;" class="game-image">
        </div>
        <div class="game-item2">
            <img src="/assets/images/image11.webp" style="width: 380px;" class="game-image">
        </div>
    </div>
</div>
<br>

- Isla has five areas that react uniquely to being touched: head, body, legs,   
  left arm, and right arm.  
- Some reactions are universal, and will occur regardless of emotion, area, or touch type. These include:

    - “Hmph.”  
    - “Ehehe.”  
    - “Uwah, you surprised me!”  
    - “Do you… want to hold hands?”  
    - “Geez, don’t tease me like that.”  
    - “Mhm!”  
    - “Wooh!”  
    - “Sure, I’ll pour some tea.”  
    - “Hm?”  
    - “What is it?”


- Isla’s emotion combines with the area touched to create unique reactions.  
    - Cold: Four unique reactions per area, 20 total.  
    - Happy: Five unique reactions per area, 25 total.  
    - Overjoyed: Six unique reactions per area, 30 total.  
- Unique reactions are generally split between tap and hold reactions.  
- Reactions are randomized with each touch, so it may take several tap/hold cycles in each given area to generate all unique responses.

### Costumes

- Accessed with the Right Bumper or clicking on the shirt icon.  
- There are 15 total costumes, with 13 acting as rewards for specific event completions.  
- Some are simply cosmetic, but there are several costumes that can elicit unique reactions.  
- The costumes with unique lines are:  

    - Yukata  
    - Bikini  
    - Nurse Costume  
    - Bunny Costume  
    - Waitress Costume  
    - Cheongsam  
    - Tennis Outfit

- Each of these costumes provide two unique reactions with either touch type, in any area, as long as Isla’s emotion is Happy or Overjoyed.  
- As with other unique reactions, they are entirely random, so it may take several touches to find them.