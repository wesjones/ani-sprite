/*
* AniSprite v.0.1.10
* Wes Jones. MIT 2014
*/
(function(exports, global){
exports.soundNinja = function(clsName, actions) {
    var plr, frames = {
        stance: {
            start: function() {
                if (!plr.friction) {
                    plr.speed = 0;
                }
            },
            frames: [ {
                x: -13,
                y: -14,
                width: 41,
                height: 54,
                wait: 2,
                oy: 2
            }, {
                x: -62,
                y: -15,
                width: 41,
                height: 53,
                wait: 2,
                ox: 1,
                oy: 2
            }, {
                x: -112,
                y: -17,
                width: 40,
                height: 51,
                wait: 2,
                ox: 3,
                oy: 2
            }, {
                x: -161,
                y: -18,
                width: 41,
                height: 49,
                wait: 2,
                ox: 3,
                oy: 1
            }, {
                x: -112,
                y: -17,
                width: 40,
                height: 51,
                wait: 2,
                ox: 3,
                oy: 2
            }, {
                x: -62,
                y: -15,
                width: 41,
                height: 53,
                wait: 2,
                ox: 1,
                oy: 2
            } ]
        },
        shield: {
            start: function() {
                if (plr.friction) {
                    plr.speed = 0;
                }
            },
            frames: [ {
                x: -5,
                y: -78,
                width: 44,
                height: 52
            }, {
                x: -59,
                y: -79,
                width: 42,
                height: 51
            }, {
                x: -111,
                y: -78,
                width: 42,
                height: 52
            }, {
                x: -165,
                y: -82,
                width: 43,
                height: 48
            }, {
                x: -220,
                y: -86,
                width: 39,
                height: 44
            }, {
                x: -268,
                y: -83,
                width: 59,
                height: 47
            }, {
                x: -336,
                y: -81,
                width: 69,
                height: 49
            }, {
                x: -413,
                y: -81,
                width: 69,
                height: 49
            }, {
                x: -488,
                y: -86,
                width: 62,
                height: 44
            }, {
                x: -558,
                y: -85,
                width: 57,
                height: 45
            }, {
                x: -12,
                y: -139,
                width: 59,
                height: 48
            }, {
                x: -80,
                y: -138,
                width: 63,
                height: 49
            }, {
                x: -153,
                y: -138,
                width: 63,
                height: 49
            }, {
                x: -228,
                y: -138,
                width: 59,
                height: 49
            }, {
                x: -303,
                y: -139,
                width: 57,
                height: 48
            }, {
                x: -368,
                y: -139,
                width: 59,
                height: 48
            }, {
                x: -438,
                y: -140,
                width: 72,
                height: 47
            }, {
                x: -520,
                y: -138,
                width: 69,
                height: 49
            }, {
                x: -10,
                y: -194,
                width: 67,
                height: 48
            }, {
                x: -88,
                y: -194,
                width: 70,
                height: 48
            }, {
                x: -171,
                y: -194,
                width: 69,
                height: 48
            }, {
                x: -251,
                y: -198,
                width: 53,
                height: 44
            }, {
                x: -313,
                y: -194,
                width: 43,
                height: 48
            } ]
        }
    };
    plr = new ani.AniSprite(clsName, {
        name: "soundNinja",
        frames: frames
    }, actions);
    return plr;
};
}(this.ani = this.ani || {}, function() {return this;}()));
