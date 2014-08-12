var player3 = ani.soundNinja('player3', {
    shield: {
        letter: 'O',
        key: 79,
        action: function () {
            player3.play('shield');
        }
    }
});
player3.x = 300;