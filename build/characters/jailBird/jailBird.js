/*
* AniSprite v.0.1.10
* Wes Jones. MIT 2014
*/
(function(exports, global){
exports.jailBird = function(clsName) {
    var plr, defaultWidth = 79, defaultHeight = 106, frames = {
        stance: {
            frames: [ {
                x: -20,
                y: -10,
                width: defaultWidth,
                height: defaultHeight,
                wait: 2
            }, {
                x: -20 - defaultWidth,
                y: -10,
                width: defaultWidth,
                height: defaultHeight,
                wait: 2
            }, {
                x: -20 - defaultWidth * 2,
                y: -10,
                width: defaultWidth,
                height: defaultHeight,
                wait: 2
            }, {
                x: -20 - defaultWidth * 3,
                y: -10,
                width: defaultWidth,
                height: defaultHeight,
                wait: 2
            }, {
                x: -20 - defaultWidth * 4,
                y: -10,
                width: defaultWidth,
                height: defaultHeight,
                wait: 2
            }, {
                x: -20 - defaultWidth * 5,
                y: -10,
                width: defaultWidth,
                height: defaultHeight,
                wait: 2
            }, {
                x: -20 - defaultWidth * 6,
                y: -10,
                width: defaultWidth,
                height: defaultHeight,
                wait: 2
            }, {
                x: -20 - defaultWidth * 7,
                y: -10,
                width: defaultWidth,
                height: defaultHeight,
                wait: 2
            }, {
                x: -20 - defaultWidth * 8,
                y: -10,
                width: defaultWidth,
                height: defaultHeight,
                wait: 2
            } ]
        },
        turn: {
            frames: [ {
                x: -916,
                y: -10,
                width: defaultWidth,
                height: defaultHeight
            }, {
                x: -834,
                y: -10,
                width: defaultWidth,
                height: defaultHeight
            }, {
                x: -758,
                y: -10,
                width: defaultWidth,
                height: defaultHeight
            }, {
                x: -834,
                y: -10,
                width: defaultWidth,
                height: defaultHeight
            }, {
                x: -916,
                y: -10,
                width: defaultWidth,
                height: defaultHeight
            } ]
        },
        duck: {
            end: function() {
                plr.defaultAni = {
                    name: "HoldDuckPosition",
                    frames: [ {
                        x: -1523,
                        y: -42,
                        width: 87,
                        height: 73,
                        ox: -6
                    } ]
                };
            },
            frames: [ {
                x: -1353,
                y: -13,
                width: 83,
                height: 102
            }, {
                x: -1436,
                y: -33,
                width: 87,
                height: 82,
                ox: -5
            }, {
                x: -1523,
                y: -42,
                width: 87,
                height: 73,
                ox: -6
            } ]
        },
        duckTurn: {
            frames: [ {
                x: -1029,
                y: -40,
                width: 89,
                height: 75
            }, {
                x: -1124,
                y: -40,
                width: 80,
                height: 75
            }, {
                x: -1211,
                y: -40,
                width: 82,
                height: 76,
                wait: 2
            }, {
                x: -1124,
                y: -40,
                width: 80,
                height: 75
            }, {
                x: -1029,
                y: -40,
                width: 89,
                height: 75
            } ]
        },
        walk: {
            start: function() {
                plr.restoreDefault();
                plr.speed = plr.reverse ? -10 : 10;
            },
            end: function() {
                plr.speed = 0;
            },
            frames: [ {
                x: -1639,
                y: -7,
                width: 72,
                height: 108,
                oy: -4
            }, {
                x: -1710,
                y: -7,
                width: 72,
                height: 108,
                oy: -4
            }, {
                x: -1781,
                y: -7,
                width: 72,
                height: 108,
                oy: -4
            }, {
                x: -1852,
                y: -7,
                width: 72,
                height: 108,
                oy: -4
            }, {
                x: -1923,
                y: -7,
                width: 72,
                height: 108,
                oy: -4
            }, {
                x: -1994,
                y: -7,
                width: 79,
                height: 108,
                oy: -4
            }, {
                x: -2072,
                y: -7,
                width: 73,
                height: 108,
                oy: -4
            }, {
                x: -2218,
                y: -7,
                width: 72,
                height: 108,
                oy: -4
            }, {
                x: -2289,
                y: -7,
                width: 72,
                height: 108,
                oy: -4
            } ]
        },
        jump: {
            frames: [ {
                x: -769,
                y: -191,
                width: 82,
                height: 103
            }, {
                x: -1436,
                y: -33,
                width: 87,
                height: 82,
                ox: -5
            }, {
                x: -853,
                y: -165,
                width: 71,
                height: 125,
                oy: -30
            }, {
                x: -853,
                y: -165,
                width: 71,
                height: 125,
                oy: -55
            }, {
                x: -927,
                y: -171,
                width: 67,
                height: 101,
                oy: -75
            }, {
                x: -927,
                y: -171,
                width: 67,
                height: 101,
                oy: -90
            }, {
                x: -997,
                y: -172,
                width: 69,
                height: 82,
                oy: -100
            }, {
                x: -997,
                y: -172,
                width: 69,
                height: 82,
                oy: -105
            }, {
                x: -997,
                y: -172,
                width: 69,
                height: 82,
                oy: -100
            }, {
                x: -1068,
                y: -172,
                width: 70,
                height: 79,
                oy: -90
            }, {
                x: -1068,
                y: -172,
                width: 70,
                height: 79,
                oy: -75
            }, {
                x: -1142,
                y: -174,
                width: 69,
                height: 98,
                oy: -55
            }, {
                x: -1142,
                y: -174,
                width: 69,
                height: 98,
                oy: -30
            }, {
                x: -1215,
                y: -156,
                width: 72,
                height: 134,
                oy: -10
            }, {
                x: -1288,
                y: -176,
                width: 81,
                height: 123,
                oy: 0
            }, {
                x: -1377,
                y: -198,
                width: 82,
                height: 96,
                oy: 4
            } ]
        }
    };
    plr = new ani.AniSprite(clsName, {
        name: "jailBird",
        frames: frames
    });
    return plr;
};
}(this.ani = this.ani || {}, function() {return this;}()));
