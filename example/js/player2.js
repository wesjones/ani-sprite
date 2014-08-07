var player2 = ani.jailBird('player2', {
    jump: {
        letter: 'UP',
        key: 38,
        action: function () {
            player2.play('jump');
        }
    },
    walkLeft: {
        letter: 'LEFT',
        key: 37,
        action: function () {
            player2.reverse = true;
            player2.play('walk');
        }
    },
    duck: {
        letter: 'DOWN',
        key: 40,
        action: function () {
            player2.play('duck');
        }
    },
    walkRight: {
        letter: 'RIGHT',
        key: 39,
        action: function () {
            player2.reverse = false;
            player2.play('walk');
        }
    },
    blockHigh: {
        letter: '.',
        key: 190,
        action: function () {
            player2.play('blockHigh');
        }
    },
    blockLow: {
        letter: '/',
        key: 191,
        action: function () {
            player2.play('blockLow');
        }
    }
});
player2.x = 150;
player2.reverse = true;

player2.on('weakSpots', function (event, name, spots) {
    var i = 0, spot, el = document.getElementsByClassName('player2weakSpot'), len = el.length;
    while (i < len) {
        spot = spots[i];
        if (spot) {
            posSpot(el[i], spot);
        } else {
            posSpot(el[i], {x:0, y:0, radius:0, name:''})
        }
        i += 1;
    }
});