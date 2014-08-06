/*
* AniSprite v.0.1.10
* Wes Jones. MIT 2014
*/
(function(exports, global){
exports.jailBird = function(clsName, actions) {
    var plr, defaultWidth = 79, defaultHeight = 106, walkSpeed = 10, stop = function() {
        plr.speed = 0;
    }, stay = function() {
        plr.index -= 1;
    }, moveBy = function(n) {
        plr.x += plr.reverse ? -n : n;
    }, defaultWeakSpots = function(action) {
        var spots = [ plr.createSpot(this.width * .5, 20, 20, function(damage, momentum) {
            if (momentum > 10) {
                return "hitFaceUp";
            }
            return "hitFace";
        }), plr.createSpot(this.width * .5, this.height * .5, 20, "hitGut"), plr.createSpot(this.width * .5, this.height - 20, 20, function(damage, momentum) {
            if (momentum > 10) {
                return "trip";
            }
            return "hitGut";
        }) ];
        plr.weakSpots(action, this, spots);
    }, duckWeakSpots = function(action) {
        var spots = [ plr.createSpot(this.width * .5, this.height * .7, 30, "duckHitFace") ];
        plr.weakSpots(action, this, spots);
    }, strikeHigh = function(action) {
        if (!plr.wait) {
            plr.strike(action, this, 5 + this.ox || 0, 10, 20);
        }
    }, strikeMed = function(action) {
        plr.strike(action, this, 5 + this.ox || 0, this.height * .5, 20);
    }, strikeLow = function(action) {
        plr.strike(action, this, 5 + this.ox || 0, this.height - 20, 20);
    }, frames = {
        stance: {
            start: function() {
                if (!plr.friction) {
                    plr.speed = 0;
                }
                plr.ducked = false;
            },
            frames: [ {
                x: -20,
                y: -10,
                width: defaultWidth,
                height: defaultHeight,
                wait: 2,
                before: defaultWeakSpots
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
            start: function() {
                plr.speed = 0;
            },
            frames: [ {
                x: -916,
                y: -10,
                width: defaultWidth,
                height: defaultHeight,
                before: defaultWeakSpots
            }, {
                x: -834,
                y: -10,
                width: defaultWidth,
                height: defaultHeight
            }, {
                x: -758,
                y: -10,
                width: defaultWidth,
                height: defaultHeight,
                after: function() {
                    plr.reverse = !plr.reverse;
                }
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
            start: function() {
                plr.speed = 0;
                plr.ducked = true;
            },
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
                height: 102,
                before: duckWeakSpots
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
                ox: -6,
                after: stay
            } ]
        },
        duckTurn: {
            start: function() {
                plr.speed = 0;
                plr.ducked = true;
            },
            frames: [ {
                x: -1029,
                y: -40,
                width: 89,
                height: 75,
                before: duckWeakSpots
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
                after: function() {
                    plr.reverse = !plr.reverse;
                }
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
                plr.speed = plr.reverse ? -walkSpeed : walkSpeed;
            },
            frames: [ {
                x: -1639,
                y: -7,
                width: 72,
                height: 108,
                oy: -4,
                before: defaultWeakSpots
            }, {
                x: -1710,
                y: -7,
                width: 72,
                height: 108,
                oy: -4,
                before: defaultWeakSpots
            }, {
                x: -1781,
                y: -7,
                width: 72,
                height: 108,
                oy: -4,
                before: defaultWeakSpots
            }, {
                x: -1852,
                y: -7,
                width: 72,
                height: 108,
                oy: -4,
                before: defaultWeakSpots
            }, {
                x: -1923,
                y: -7,
                width: 72,
                height: 108,
                oy: -4,
                before: defaultWeakSpots
            }, {
                x: -1994,
                y: -7,
                width: 79,
                height: 108,
                oy: -4,
                before: defaultWeakSpots
            }, {
                x: -2072,
                y: -7,
                width: 73,
                height: 108,
                oy: -4,
                before: defaultWeakSpots
            }, {
                x: -2218,
                y: -7,
                width: 72,
                height: 108,
                oy: -4,
                before: defaultWeakSpots
            }, {
                x: -2289,
                y: -7,
                width: 72,
                height: 108,
                oy: -4,
                before: defaultWeakSpots
            } ]
        },
        walkBackward: {
            start: function() {
                var s = walkSpeed * .4;
                plr.restoreDefault();
                plr.speed = !plr.reverse ? -s : s;
            },
            frames: [ {
                x: -2,
                y: -184,
                width: 67,
                height: 109,
                oy: -4,
                wait: 2,
                before: defaultWeakSpots
            }, {
                x: -69,
                y: -183,
                width: 74,
                height: 108,
                oy: -4,
                wait: 2,
                before: defaultWeakSpots
            }, {
                x: -143,
                y: -183,
                width: 79,
                height: 110,
                oy: -4,
                wait: 2,
                before: defaultWeakSpots
            }, {
                x: -222,
                y: -184,
                width: 77,
                height: 109,
                oy: -4,
                wait: 2,
                before: defaultWeakSpots
            }, {
                x: -299,
                y: -184,
                width: 77,
                height: 108,
                oy: -4,
                wait: 2,
                before: defaultWeakSpots
            }, {
                x: -379,
                y: -184,
                width: 68,
                height: 109,
                oy: -4,
                wait: 2,
                before: defaultWeakSpots
            }, {
                x: -452,
                y: -183,
                width: 64,
                height: 110,
                oy: -4,
                wait: 2,
                before: defaultWeakSpots
            }, {
                x: -516,
                y: -183,
                width: 76,
                height: 109,
                oy: -4,
                wait: 2,
                before: defaultWeakSpots
            }, {
                x: -593,
                y: -184,
                width: 80,
                height: 109,
                oy: -4,
                wait: 2,
                before: defaultWeakSpots
            }, {
                x: -674,
                y: -185,
                width: 77,
                height: 108,
                oy: -4,
                wait: 2,
                before: defaultWeakSpots
            } ]
        },
        jump: {
            enable: function() {
                return plr.y === plr.ground;
            },
            frames: [ {
                x: -769,
                y: -191,
                width: 82,
                height: 103,
                immune: true,
                before: function(action) {
                    if (plr.speed > 0) {
                        this.x = -1496;
                        this.y = -165;
                        this.width = 69;
                        this.height = 115;
                        this.oy = -5;
                    } else if (plr.speed < 0) {
                        this.x = -1683;
                        this.y = -166;
                        this.width = 69;
                        this.height = 116;
                        this.oy = -4;
                    } else {
                        this.x = -1436;
                        this.y = -33;
                        this.width = 87;
                        this.height = 82;
                        this.oy = 0;
                    }
                    defaultWeakSpots.apply(this, [ action ]);
                }
            }, {
                x: -769,
                y: -191,
                width: 82,
                height: 103,
                immune: true,
                before: defaultWeakSpots,
                after: function(action) {
                    plr.speedY = -40;
                    plr.y += plr.speedY;
                    defaultWeakSpots.apply(this, [ action ]);
                }
            }, {
                x: -853,
                y: -165,
                width: 71,
                height: 125,
                before: function(action) {
                    if (plr.speedY < -30) {
                        plr.index -= 1;
                    }
                    defaultWeakSpots.apply(this, [ action ]);
                }
            }, {
                x: -927,
                y: -171,
                width: 67,
                height: 101,
                before: defaultWeakSpots
            }, {
                x: -997,
                y: -172,
                width: 69,
                height: 82,
                before: defaultWeakSpots
            }, {
                x: -1068,
                y: -172,
                width: 70,
                height: 79,
                before: function(action) {
                    if (plr.speedY < -10) {
                        plr.index -= 1;
                    }
                    defaultWeakSpots.apply(this, [ action ]);
                }
            }, {
                x: -1068,
                y: -172,
                width: 70,
                height: 79,
                before: defaultWeakSpots
            }, {
                x: -1142,
                y: -174,
                width: 69,
                height: 98,
                before: defaultWeakSpots
            }, {
                x: -1215,
                y: -156,
                width: 72,
                height: 134,
                before: function(action) {
                    if (plr.y < plr.ground - 20) {
                        plr.index -= 1;
                    }
                    defaultWeakSpots.apply(this, [ action ]);
                }
            }, {
                x: -1288,
                y: -176,
                width: 81,
                height: 123,
                before: function(action) {
                    if (plr.y < plr.ground - 5) {
                        plr.index -= 1;
                    }
                    defaultWeakSpots.apply(this, [ action ]);
                }
            }, {
                x: -1377,
                y: -198,
                width: 82,
                height: 96,
                oy: 4,
                wait: 1,
                before: function(action) {
                    if (plr.speed > 0) {
                        this.x = -1573;
                        this.y = -159;
                        this.width = 71;
                        this.height = 120;
                    } else if (plr.speed < 0) {
                        this.x = -1763;
                        this.y = -157;
                        this.width = 70;
                        this.height = 123;
                    } else {
                        this.x = -1377;
                        this.y = -198;
                        this.width = 82;
                        this.height = 96;
                    }
                    defaultWeakSpots.apply(this, [ action ]);
                }
            } ]
        },
        blockHigh: {
            start: stop,
            frames: [ {
                x: -2533,
                y: -483,
                width: 70,
                height: 102
            }, {
                x: -2613,
                y: -485,
                width: 72,
                height: 100,
                after: stay
            }, {
                x: -2533,
                y: -483,
                width: 70,
                height: 102
            } ]
        },
        blockLow: {
            start: stop,
            frames: [ {
                x: -2703,
                y: -507,
                width: 78,
                height: 78
            }, {
                x: -2793,
                y: -506,
                width: 78,
                height: 79,
                after: stay
            }, {
                x: -2703,
                y: -507,
                width: 78,
                height: 78
            } ]
        },
        blockAir: {
            frames: [ {
                x: -10,
                y: -660,
                width: 61,
                height: 94
            }, {
                x: -81,
                y: -660,
                width: 58,
                height: 92,
                after: stay
            }, {
                x: -10,
                y: -660,
                width: 61,
                height: 94
            } ]
        },
        lightPunch: {
            start: stop,
            frames: [ {
                x: -20,
                y: -1051,
                width: 83,
                height: 105,
                oy: -3
            }, {
                x: -104,
                y: -1051,
                width: 112,
                height: 105,
                oy: -3,
                before: strikeHigh
            }, {
                x: -217,
                y: -1051,
                width: 103,
                height: 105,
                oy: -3,
                before: strikeHigh
            }, {
                x: -104,
                y: -1051,
                width: 112,
                height: 105,
                oy: -3
            }, {
                x: -20,
                y: -1051,
                width: 83,
                height: 105,
                oy: -3
            } ]
        },
        "knife-lightPunch": {
            start: stop,
            frames: [ {
                x: -352,
                y: -1053,
                width: 86,
                height: 103,
                oy: -3
            }, {
                x: -452,
                y: -1053,
                width: 86,
                height: 103,
                oy: -3,
                before: strikeHigh
            }, {
                x: -542,
                y: -1048,
                width: 143,
                height: 108,
                oy: -3,
                before: strikeHigh
            }, {
                x: -452,
                y: -1053,
                width: 86,
                height: 103,
                oy: -3
            }, {
                x: -352,
                y: -1053,
                width: 86,
                height: 103,
                oy: -3
            } ]
        },
        lowKick: {
            start: stop,
            frames: [ {
                x: -692,
                y: -1049,
                width: 63,
                height: 106,
                ox: 12,
                oy: -5
            }, {
                x: -759,
                y: -1049,
                width: 74,
                height: 103,
                ox: 17,
                oy: -10,
                before: strikeLow
            }, {
                x: -837,
                y: -1050,
                width: 103,
                height: 102,
                ox: 20,
                oy: -10,
                before: strikeLow
            }, {
                x: -759,
                y: -1049,
                width: 74,
                height: 103,
                ox: 17,
                oy: -10
            }, {
                x: -692,
                y: -1049,
                width: 63,
                height: 106,
                ox: 12,
                oy: -6
            } ]
        },
        hardPunch: {
            start: stop,
            frames: [ {
                x: -952,
                y: -1053,
                width: 87,
                height: 103,
                ox: -4,
                oy: -2
            }, {
                x: -1056,
                y: -1053,
                width: 86,
                height: 103,
                ox: 0,
                oy: -2,
                before: strikeHigh
            }, {
                x: -1145,
                y: -1035,
                width: 95,
                height: 121,
                ox: 0,
                oy: -2,
                wait: 2,
                before: strikeHigh
            }, {
                x: -1244,
                y: -1045,
                width: 100,
                height: 111,
                ox: 0,
                oy: -2,
                wait: 1
            }, {
                x: -1345,
                y: -1051,
                width: 96,
                height: 105,
                ox: 0,
                oy: -2
            }, {
                x: -1444,
                y: -1054,
                width: 96,
                height: 102,
                ox: 0,
                oy: -2
            } ]
        },
        medPunch: {
            start: stop,
            frames: [ {
                x: -1552,
                y: -1053,
                width: 87,
                height: 103
            }, {
                x: -1640,
                y: -1053,
                width: 86,
                height: 103,
                before: strikeMed
            }, {
                x: -1730,
                y: -1048,
                width: 115,
                height: 108,
                wait: 2,
                before: strikeMed
            }, {
                x: -1846,
                y: -1051,
                width: 96,
                height: 105
            }, {
                x: -1944,
                y: -1054,
                width: 96,
                height: 102
            } ]
        },
        medKick: {
            start: stop,
            frames: [ {
                x: -2066,
                y: -1050,
                width: 60,
                height: 102
            }, {
                x: -2150,
                y: -1052,
                width: 83,
                height: 100,
                before: strikeMed
            }, {
                x: -2241,
                y: -1055,
                width: 124,
                height: 97,
                wait: 2,
                before: strikeMed
            }, {
                x: -2384,
                y: -1050,
                width: 107,
                height: 102
            } ]
        },
        hardPunch2: {
            start: stop,
            frames: [ {
                x: -12,
                y: -1246,
                width: 89,
                height: 101
            }, {
                x: -113,
                y: -1245,
                width: 90,
                height: 102
            }, {
                x: -214,
                y: -1244,
                width: 93,
                height: 103,
                before: strikeHigh
            }, {
                x: -308,
                y: -1240,
                width: 130,
                height: 105,
                wait: 2,
                before: strikeHigh
            }, {
                x: -440,
                y: -1227,
                width: 111,
                height: 117
            }, {
                x: -554,
                y: -1238,
                width: 92,
                height: 109
            }, {
                x: -653,
                y: -1245,
                width: 83,
                height: 102
            }, {
                x: -748,
                y: -1245,
                width: 85,
                height: 102
            } ]
        },
        "knife-hardPunch": {
            start: stop,
            frames: [ {
                x: -845,
                y: -1242,
                width: 81,
                height: 105
            }, {
                x: -929,
                y: -1234,
                width: 87,
                height: 113,
                before: strikeHigh
            }, {
                x: -1017,
                y: -1243,
                width: 152,
                height: 106,
                wait: 2,
                before: strikeHigh
            }, {
                x: -1771,
                y: -1243,
                width: 92,
                height: 106
            }, {
                x: -1265,
                y: -1244,
                width: 86,
                height: 103
            }, {
                x: -1350,
                y: -1243,
                width: 80,
                height: 104
            } ]
        },
        hardKick: {
            start: stop,
            frames: [ {
                x: -1463,
                y: -1237,
                width: 88,
                height: 109
            }, {
                x: -1563,
                y: -1242,
                width: 77,
                height: 105
            }, {
                x: -1645,
                y: -1241,
                width: 73,
                height: 106,
                before: strikeHigh
            }, {
                x: -1749,
                y: -1238,
                width: 130,
                height: 109,
                wait: 2,
                before: strikeHigh
            }, {
                x: -1894,
                y: -1241,
                width: 91,
                height: 106
            }, {
                x: -1997,
                y: -1242,
                width: 82,
                height: 104
            } ]
        },
        spinKick: {
            frames: [ {
                x: -2093,
                y: -1224,
                width: 65,
                height: 121,
                wait: 2,
                before: function() {
                    plr.y -= 20;
                    moveBy(5);
                }
            }, {
                x: -2175,
                y: -1230,
                width: 60,
                height: 95,
                wait: 2,
                before: function(action) {
                    plr.y -= 30;
                    moveBy(5);
                    strikeHigh.apply(this, [ action ]);
                }
            }, {
                x: -2240,
                y: -1227,
                width: 149,
                height: 92,
                wait: 2,
                before: function(action) {
                    plr.y -= 30;
                    moveBy(5);
                    strikeMed.apply(this, [ action ]);
                }
            }, {
                x: -2390,
                y: -1229,
                width: 136,
                height: 98,
                wait: 2,
                before: function(action) {
                    plr.y -= 30;
                    moveBy(5);
                },
                after: function(action) {
                    plr.strike(action, this, 10, 40, 30);
                }
            }, {
                x: -2535,
                y: -1228,
                width: 80,
                height: 105,
                before: function() {
                    plr.y -= 20;
                }
            }, {
                x: -2635,
                y: -1240,
                width: 80,
                height: 106,
                before: function() {
                    plr.y -= 10;
                }
            }, {
                x: -2747,
                y: -1241,
                width: 77,
                height: 105
            }, {
                x: -1377,
                y: -198,
                width: 82,
                height: 96
            } ]
        },
        hitFace: {
            start: stop,
            frames: [ {
                x: -162,
                y: -674,
                width: 77,
                height: 104,
                oy: -4,
                ox: -0,
                immune: true
            }, {
                x: -241,
                y: -673,
                width: 79,
                height: 105,
                oy: -4,
                ox: -0,
                immune: true
            }, {
                x: -324,
                y: -671,
                width: 78,
                height: 107,
                oy: -4,
                ox: -0,
                immune: true
            }, {
                x: -413,
                y: -670,
                width: 79,
                height: 108,
                oy: -4,
                ox: -2,
                immune: true
            }, {
                x: -324,
                y: -671,
                width: 78,
                height: 107,
                oy: -4,
                ox: -0,
                immune: true
            }, {
                x: -241,
                y: -673,
                width: 79,
                height: 105,
                oy: -4,
                ox: -0,
                immune: true
            }, {
                x: -162,
                y: -674,
                width: 77,
                height: 104,
                oy: -4
            } ]
        },
        hitGut: {
            start: stop,
            frames: [ {
                x: -522,
                y: -676,
                width: 80,
                height: 102,
                immune: true
            }, {
                x: -612,
                y: -678,
                width: 80,
                height: 100,
                immune: true
            }, {
                x: -701,
                y: -683,
                width: 76,
                height: 95,
                immune: true
            }, {
                x: -781,
                y: -686,
                width: 72,
                height: 92,
                immune: true
            }, {
                x: -701,
                y: -683,
                width: 76,
                height: 95,
                immune: true
            }, {
                x: -612,
                y: -678,
                width: 80,
                height: 100,
                immune: true
            }, {
                x: -522,
                y: -676,
                width: 80,
                height: 102
            } ]
        },
        duckHitFace: {
            start: stop,
            frames: [ {
                x: -895,
                y: -698,
                width: 75,
                height: 81,
                immune: true
            }, {
                x: -983,
                y: -695,
                width: 78,
                height: 84,
                immune: true
            }, {
                x: -1078,
                y: -694,
                width: 82,
                height: 85,
                immune: true
            }, {
                x: -983,
                y: -695,
                width: 78,
                height: 84,
                immune: true
            }, {
                x: -895,
                y: -698,
                width: 75,
                height: 81
            } ]
        },
        hitFaceUp: {
            frames: [ {
                x: -1250,
                y: -651,
                width: 65,
                height: 123,
                wait: 2
            }, {
                x: -1315,
                y: -665,
                width: 84,
                height: 109,
                wait: 2,
                oy: -10,
                before: function() {
                    moveBy(-10);
                }
            }, {
                x: -1405,
                y: -664,
                width: 114,
                height: 104,
                wait: 2,
                oy: -20,
                before: function() {
                    moveBy(-10);
                }
            }, {
                x: -1523,
                y: -663,
                width: 136,
                height: 96,
                wait: 2,
                oy: -30,
                before: function() {
                    moveBy(-10);
                }
            }, {
                x: -1664,
                y: -670,
                width: 144,
                height: 69,
                wait: 2,
                oy: -20,
                before: function() {
                    moveBy(-10);
                }
            }, {
                x: -1824,
                y: -655,
                width: 108,
                height: 91,
                wait: 0,
                oy: -10,
                before: function() {
                    moveBy(-10);
                },
                after: function() {
                    plr.play("getUp");
                    plr.index = 0;
                    plr.wait = 0;
                }
            } ]
        },
        fallDown: {
            frames: [ {
                x: -2055,
                y: -688,
                width: 105,
                height: 78,
                wait: 2,
                before: function() {
                    moveBy(5);
                }
            }, {
                x: -2171,
                y: -703,
                width: 137,
                height: 68,
                wait: 2,
                before: function() {
                    moveBy(5);
                }
            }, {
                x: -2318,
                y: -727,
                width: 145,
                height: 41,
                wait: 2,
                before: function() {
                    moveBy(5);
                }
            }, {
                x: -2479,
                y: -729,
                width: 139,
                height: 42,
                wait: 2,
                before: function() {
                    moveBy(5);
                }
            }, {
                x: -2625,
                y: -723,
                width: 128,
                height: 48,
                wait: 2,
                before: function() {
                    moveBy(5);
                }
            }, {
                x: -2479,
                y: -729,
                width: 139,
                height: 42,
                wait: 0,
                after: function() {
                    plr.play("getUp");
                    plr.index = 0;
                    plr.wait = 0;
                }
            } ]
        },
        getUp: {
            frames: [ {
                x: -18,
                y: -907,
                width: 118,
                height: 49,
                wait: 2
            }, {
                x: -142,
                y: -904,
                width: 110,
                height: 49,
                wait: 2
            }, {
                x: -274,
                y: -900,
                width: 98,
                height: 50,
                wait: 2
            }, {
                x: -399,
                y: -883,
                width: 69,
                height: 71,
                wait: 2
            }, {
                x: -485,
                y: -862,
                width: 77,
                height: 88
            } ]
        }
    };
    plr = new ani.AniSprite(clsName, {
        name: "jailBird",
        frames: frames
    }, actions);
    return plr;
};
}(this.ani = this.ani || {}, function() {return this;}()));
