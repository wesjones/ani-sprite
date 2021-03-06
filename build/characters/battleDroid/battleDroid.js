/*
* AniSprite v.0.1.10
* Wes Jones. MIT 2014
*/
(function(exports, global){
exports.battleDroid = function(clsName, actions) {
    var plr, frames = {
        stance: {
            start: function() {
                if (!plr.friction) {
                    plr.speed = 0;
                }
            },
            frames: [ {
                x: -16,
                y: -75,
                width: 37,
                height: 54
            } ]
        },
        walk: {
            frames: [ {
                x: -16,
                y: -10,
                width: 36,
                height: 51,
                wait: 2
            }, {
                x: -56,
                y: -9,
                width: 36,
                height: 52,
                wait: 2
            }, {
                x: -98,
                y: -8,
                width: 36,
                height: 53,
                wait: 2
            }, {
                x: -139,
                y: -9,
                width: 36,
                height: 52,
                wait: 2
            }, {
                x: -178,
                y: -10,
                width: 36,
                height: 51,
                wait: 2
            }, {
                x: -220,
                y: -9,
                width: 36,
                height: 52,
                wait: 2
            }, {
                x: -261,
                y: -8,
                width: 36,
                height: 53,
                wait: 2
            }, {
                x: -299,
                y: -9,
                width: 36,
                height: 52,
                wait: 2
            }, {
                x: -338,
                y: -10,
                width: 36,
                height: 51,
                wait: 2
            } ]
        },
        getHit: {
            frames: [ {
                x: -27,
                y: -216,
                width: 38,
                height: 63,
                wait: 0
            }, {
                x: -73,
                y: -227,
                width: 42,
                height: 52,
                wait: 0
            }, {
                x: -131,
                y: -234,
                width: 42,
                height: 45,
                wait: 0
            }, {
                x: -131,
                y: -234,
                width: 42,
                height: 45,
                wait: 0
            }, {
                x: -238,
                y: -236,
                width: 55,
                height: 43,
                wait: 0
            }, {
                x: -301,
                y: -256,
                width: 61,
                height: 24,
                wait: 0
            }, {
                x: -367,
                y: -259,
                width: 62,
                height: 21,
                wait: 0
            }, {
                x: -433,
                y: -256,
                width: 61,
                height: 24,
                wait: 0
            }, {
                x: -27,
                y: -310,
                width: 50,
                height: 30,
                wait: 1
            }, {
                x: -84,
                y: -307,
                width: 43,
                height: 33,
                wait: 1
            }, {
                x: -134,
                y: -293,
                width: 48,
                height: 47,
                wait: 1
            }, {
                x: -134,
                y: -293,
                width: 48,
                height: 47,
                wait: 1
            }, {
                x: -249,
                y: -289,
                width: 43,
                height: 51,
                wait: 1
            } ]
        },
        die: {
            frames: [ {
                x: -14,
                y: -377,
                width: 36,
                height: 58
            }, {
                x: -58,
                y: -360,
                width: 87,
                height: 76
            }, {
                x: -151,
                y: -357,
                width: 96,
                height: 79
            }, {
                x: -259,
                y: -361,
                width: 106,
                height: 75
            }, {
                x: -378,
                y: -370,
                width: 111,
                height: 67
            }, {
                x: -502,
                y: -370,
                width: 115,
                height: 67
            }, {
                x: -16,
                y: -440,
                width: 121,
                height: 67
            }, {
                x: -169,
                y: -468,
                width: 126,
                height: 27
            }, {
                x: -319,
                y: -474,
                width: 126,
                height: 21
            }, {
                x: -480,
                y: -474,
                width: 126,
                height: 21,
                wait: 60
            } ]
        },
        hit: {
            frames: [ {
                x: -24,
                y: -156,
                width: 37,
                height: 53,
                wait: 2
            }, {
                x: -66,
                y: -156,
                width: 32,
                height: 53,
                wait: 2
            }, {
                x: -101,
                y: -156,
                width: 37,
                height: 53,
                wait: 2
            }, {
                x: -140,
                y: -156,
                width: 37,
                height: 53,
                wait: 2
            }, {
                x: -178,
                y: -148,
                width: 49,
                height: 61,
                wait: 2
            }, {
                x: -227,
                y: -148,
                width: 44,
                height: 61,
                wait: 2
            }, {
                x: -274,
                y: -147,
                width: 45,
                height: 62,
                wait: 2
            }, {
                x: -322,
                y: -147,
                width: 52,
                height: 62,
                wait: 2
            }, {
                x: -378,
                y: -157,
                width: 45,
                height: 52,
                wait: 2
            }, {
                x: -425,
                y: -156,
                width: 34,
                height: 53,
                wait: 2
            } ]
        },
        shoot: {
            frames: [ {
                x: -16,
                y: -75,
                width: 37,
                height: 54
            }, {
                x: -59,
                y: -76,
                width: 36,
                height: 53
            }, {
                x: -99,
                y: -76,
                width: 36,
                height: 53
            }, {
                x: -142,
                y: -76,
                width: 36,
                height: 53
            }, {
                x: -189,
                y: -76,
                width: 46,
                height: 53
            }, {
                x: -238,
                y: -76,
                width: 54,
                height: 53
            }, {
                x: -298,
                y: -75,
                width: 58,
                height: 53
            }, {
                x: -364,
                y: -75,
                width: 36,
                height: 53
            } ]
        },
        fire: {
            frames: [ {
                x: -413,
                y: -100,
                width: 14,
                height: 4
            }, {
                x: -434,
                y: -94,
                width: 20,
                height: 20
            }, {
                x: -458,
                y: -86,
                width: 28,
                height: 31
            }, {
                x: -488,
                y: -85,
                width: 32,
                height: 30
            } ]
        }
    };
    plr = new ani.AniSprite(clsName, {
        name: "battleDroid",
        frames: frames
    }, actions);
    return plr;
};
}(this.ani = this.ani || {}, function() {return this;}()));
