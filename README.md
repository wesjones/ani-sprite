ani-sprite
==========

character animation of sprite sheets [example](https://rawgit.com/wesjones/ani-sprite/master/index.html)

#How to get started.
First you need to copy the files you want into your project. There are multiple characters so only copy the characters that you want. You also need the AniSprite.js file.

So if you were going to use JailBird. Then you need to take the AniSprite.js from the build directory as well as the characters/jailBird folder.

Then you could seetup your project like this.

    <link rel="stylesheet" type="text/css" href="build/characters/jailBird/jailBird.css">
    <script src="build/AniSprite.js"></script>
    <script src="build/characters/jailBird/jailBird.js"></script>

Then you need to start the engine.

    <script>
        var fps = 30; // frames per second
        ani.engine.start(fps);
    </script>

Then you need to create a character. To create a character you need to create a div and assign a class to it that you can reference.

    <div class="player1"></div>

Then you need to reference that name to create your character.

    <script>
        var fps = 30; // frames per second
        ani.engine.start(fps);
        var player1 = ani.jailBird('player1');// assign JailBird character.
    </script>

Notice that you call the name of the character you are going to use.

Now all you need to do manipulate the character. The character api is setup with a few properties.

    player1.x = 100; // move the character to 100px from the left.
    player1.y = 500; // move the feet of the character to 500px from the top. This is the same as setting the ground level for the character.
    player1.play('turn'); // this is how you run the turn animation.
    // NOTE: each player may have different animations. So check each character for it's own frames.

Here is an [example](https://rawgit.com/wesjones/ani-sprite/master/index.html). View the source and have fun.
