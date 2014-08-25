/*
* AniSprite v.0.1.10
* Wes Jones. MIT 2014
*/
(function(exports, global){
exports.obiWanKenobi = function(clsName, actions) {
    var plr, frames = {
        stance: {
            start: function() {
                if (!plr.friction) {
                    plr.speed = 0;
                }
            },
            frames: [ {
                x: -20,
                y: -321,
                width: 33,
                height: 64,
                wait: 2
            }, {
                x: -80,
                y: -321,
                width: 33,
                height: 64,
                wait: 2
            }, {
                x: -140,
                y: -321,
                width: 33,
                height: 64,
                wait: 2
            }, {
                x: -200,
                y: -322,
                width: 33,
                height: 63,
                wait: 2
            }, {
                x: -260,
                y: -322,
                width: 33,
                height: 63,
                wait: 2
            }, {
                x: -200,
                y: -322,
                width: 33,
                height: 63,
                wait: 2
            }, {
                x: -140,
                y: -321,
                width: 33,
                height: 64,
                wait: 2
            }, {
                x: -80,
                y: -321,
                width: 33,
                height: 64,
                wait: 2
            } ]
        },
        walk: {
            frames: [ {
                x: -20,
                y: -431,
                width: 33,
                height: 64
            }, {
                x: -70,
                y: -431,
                width: 29,
                height: 64
            }, {
                x: -160,
                y: -431,
                width: 33,
                height: 64
            }, {
                x: -220,
                y: -437,
                width: 37,
                height: 58
            }, {
                x: -280,
                y: -437,
                width: 36,
                height: 58
            }, {
                x: -400,
                y: -437,
                width: 35,
                height: 58
            }, {
                x: -460,
                y: -436,
                width: 39,
                height: 59
            }, {
                x: -520,
                y: -436,
                width: 37,
                height: 59
            }, {
                x: -580,
                y: -436,
                width: 36,
                height: 59
            }, {
                x: -640,
                y: -437,
                width: 36,
                height: 58
            }, {
                x: -700,
                y: -437,
                width: 35,
                height: 58
            }, {
                x: -760,
                y: -436,
                width: 42,
                height: 59
            }, {
                x: -820,
                y: -436,
                width: 40,
                height: 59
            }, {
                x: -920,
                y: -430,
                width: 29,
                height: 65
            }, {
                x: -970,
                y: -431,
                width: 33,
                height: 64
            } ]
        },
        walkBackwards: {
            frames: [ {
                x: -20,
                y: -538,
                width: 27,
                height: 67
            }, {
                x: -100,
                y: -539,
                width: 29,
                height: 65
            }, {
                x: -150,
                y: -539,
                width: 30,
                height: 65
            }, {
                x: -200,
                y: -539,
                width: 29,
                height: 65
            }, {
                x: -250,
                y: -539,
                width: 31,
                height: 65
            }, {
                x: -300,
                y: -539,
                width: 30,
                height: 66
            }, {
                x: -350,
                y: -539,
                width: 30,
                height: 66
            }, {
                x: -400,
                y: -539,
                width: 29,
                height: 66
            }, {
                x: -450,
                y: -539,
                width: 28,
                height: 66
            }, {
                x: -500,
                y: -539,
                width: 29,
                height: 66
            }, {
                x: -550,
                y: -538,
                width: 29,
                height: 67
            }, {
                x: -600,
                y: -538,
                width: 30,
                height: 67
            }, {
                x: -700,
                y: -538,
                width: 29,
                height: 66
            }, {
                x: -700,
                y: -538,
                width: 29,
                height: 66
            } ]
        },
        run: {
            frames: [ {
                x: -20,
                y: -651,
                width: 33,
                height: 64
            }, {
                x: -70,
                y: -650,
                width: 29,
                height: 65
            }, {
                x: -160,
                y: -660,
                width: 43,
                height: 55
            }, {
                x: -230,
                y: -657,
                width: 44,
                height: 56
            }, {
                x: -300,
                y: -658,
                width: 45,
                height: 50
            }, {
                x: -370,
                y: -660,
                width: 45,
                height: 50
            }, {
                x: -440,
                y: -668,
                width: 50,
                height: 46
            }, {
                x: -510,
                y: -668,
                width: 48,
                height: 47
            }, {
                x: -580,
                y: -668,
                width: 40,
                height: 46
            }, {
                x: -650,
                y: -664,
                width: 39,
                height: 48
            }, {
                x: -720,
                y: -664,
                width: 43,
                height: 48
            }, {
                x: -790,
                y: -664,
                width: 47,
                height: 46
            }, {
                x: -860,
                y: -668,
                width: 51,
                height: 47
            }, {
                x: -930,
                y: -668,
                width: 49,
                height: 47
            }, {
                x: -1030,
                y: -650,
                width: 29,
                height: 65
            }, {
                x: -1080,
                y: -651,
                width: 33,
                height: 64
            } ]
        },
        jump: {
            frames: [ {
                x: -20,
                y: -758,
                width: 22,
                height: 57,
                wait: 2
            }, {
                x: -120,
                y: -749,
                width: 32,
                height: 31,
                wait: 2
            }, {
                x: -170,
                y: -745,
                width: 34,
                height: 25,
                wait: 2
            }, {
                x: -230,
                y: -733,
                width: 27,
                height: 32,
                wait: 2
            }, {
                x: -290,
                y: -746,
                width: 32,
                height: 23,
                wait: 2
            }, {
                x: -350,
                y: -741,
                width: 28,
                height: 47,
                wait: 2
            }, {
                x: -410,
                y: -743,
                width: 23,
                height: 70,
                wait: 2
            }, {
                x: -470,
                y: -745,
                width: 23,
                height: 78,
                wait: 2
            }, {
                x: -520,
                y: -766,
                width: 34,
                height: 59,
                wait: 2
            }, {
                x: -580,
                y: -767,
                width: 35,
                height: 58,
                wait: 2
            }, {
                x: -640,
                y: -768,
                width: 35,
                height: 57,
                wait: 2
            }, {
                x: -700,
                y: -766,
                width: 33,
                height: 59,
                wait: 2
            }, {
                x: -760,
                y: -764,
                width: 33,
                height: 61,
                wait: 2
            }, {
                x: -820,
                y: -761,
                width: 33,
                height: 64,
                wait: 2
            }, {
                x: -820,
                y: -761,
                width: 33,
                height: 64,
                wait: 2
            } ]
        },
        backflipKick: {
            frames: [ {
                x: -20,
                y: -894,
                width: 40,
                height: 41,
                wait: 1
            }, {
                x: -80,
                y: -902,
                width: 68,
                height: 33,
                wait: 1
            }, {
                x: -170,
                y: -903,
                width: 69,
                height: 32,
                wait: 1
            }, {
                x: -260,
                y: -879,
                width: 40,
                height: 40,
                wait: 1
            }, {
                x: -320,
                y: -875,
                width: 51,
                height: 34,
                wait: 1
            }, {
                x: -390,
                y: -854,
                width: 32,
                height: 51,
                wait: 1
            }, {
                x: -450,
                y: -853,
                width: 33,
                height: 44,
                wait: 1
            }, {
                x: -510,
                y: -847,
                width: 36,
                height: 46,
                wait: 1
            }, {
                x: -630,
                y: -843,
                width: 31,
                height: 45,
                wait: 1
            }, {
                x: -740,
                y: -869,
                width: 32,
                height: 31,
                wait: 1
            }, {
                x: -800,
                y: -855,
                width: 23,
                height: 69,
                wait: 1
            }, {
                x: -850,
                y: -857,
                width: 23,
                height: 78,
                wait: 1
            }, {
                x: -900,
                y: -876,
                width: 34,
                height: 59,
                wait: 1
            }, {
                x: -960,
                y: -877,
                width: 34,
                height: 58,
                wait: 1
            }, {
                x: -1020,
                y: -878,
                width: 35,
                height: 57,
                wait: 1
            }, {
                x: -1080,
                y: -878,
                width: 33,
                height: 57,
                wait: 1
            }, {
                x: -1140,
                y: -874,
                width: 33,
                height: 61,
                wait: 1
            }, {
                x: -1200,
                y: -871,
                width: 33,
                height: 64,
                wait: 1
            }, {
                x: -1200,
                y: -871,
                width: 33,
                height: 64,
                wait: 1
            } ]
        },
        trix: {
            frames: [ {
                x: -20,
                y: -992,
                width: 35,
                height: 53,
                wait: 2
            }, {
                x: -80,
                y: -1001,
                width: 38,
                height: 44,
                wait: 2
            }, {
                x: -140,
                y: -1001,
                width: 34,
                height: 44,
                wait: 2
            }, {
                x: -200,
                y: -1001,
                width: 38,
                height: 44,
                wait: 2
            }, {
                x: -260,
                y: -997,
                width: 35,
                height: 48,
                wait: 2
            }, {
                x: -320,
                y: -993,
                width: 41,
                height: 52,
                wait: 2
            }, {
                x: -380,
                y: -995,
                width: 42,
                height: 50,
                wait: 2
            }, {
                x: -470,
                y: -994,
                width: 34,
                height: 51,
                wait: 2
            }, {
                x: -530,
                y: -993,
                width: 34,
                height: 52,
                wait: 2
            }, {
                x: -590,
                y: -987,
                width: 33,
                height: 58,
                wait: 2
            }, {
                x: -680,
                y: -989,
                width: 33,
                height: 56,
                wait: 2
            }, {
                x: -730,
                y: -993,
                width: 36,
                height: 52,
                wait: 2
            }, {
                x: -790,
                y: -996,
                width: 36,
                height: 49,
                wait: 2
            }, {
                x: -850,
                y: -997,
                width: 34,
                height: 48,
                wait: 2
            }, {
                x: -930,
                y: -992,
                width: 36,
                height: 53,
                wait: 2
            }, {
                x: -980,
                y: -989,
                width: 33,
                height: 56,
                wait: 2
            } ]
        },
        block: {
            frames: [ {
                x: -20,
                y: -1087,
                width: 25,
                height: 68
            }, {
                x: -70,
                y: -1094,
                width: 36,
                height: 61
            }, {
                x: -130,
                y: -1104,
                width: 49,
                height: 51
            }, {
                x: -200,
                y: -1107,
                width: 47,
                height: 48
            }, {
                x: -271,
                y: -1106,
                width: 45,
                height: 49
            }, {
                x: -341,
                y: -1105,
                width: 41,
                height: 50
            }, {
                x: -410,
                y: -1095,
                width: 34,
                height: 60
            }, {
                x: -470,
                y: -1091,
                width: 34,
                height: 64
            }, {
                x: -530,
                y: -1092,
                width: 33,
                height: 63
            }, {
                x: -580,
                y: -1091,
                width: 33,
                height: 64
            } ]
        },
        gethit: {
            frames: [ {
                x: -20,
                y: -1198,
                width: 34,
                height: 57
            }, {
                x: -80,
                y: -1199,
                width: 35,
                height: 56
            }, {
                x: -140,
                y: -1198,
                width: 37,
                height: 57
            }, {
                x: -200,
                y: -1196,
                width: 35,
                height: 59
            }, {
                x: -260,
                y: -1192,
                width: 33,
                height: 63
            }, {
                x: -320,
                y: -1191,
                width: 33,
                height: 64
            } ]
        },
        die: {
            frames: [ {
                x: -80,
                y: -321,
                width: 33,
                height: 64
            }, {
                x: -410,
                y: -1201,
                width: 29,
                height: 54
            }, {
                x: -460,
                y: -1200,
                width: 24,
                height: 55
            }, {
                x: -540,
                y: -1195,
                width: 32,
                height: 58
            }, {
                x: -600,
                y: -1197,
                width: 34,
                height: 52
            }, {
                x: -660,
                y: -1204,
                width: 33,
                height: 42
            }, {
                x: -720,
                y: -1207,
                width: 37,
                height: 41
            }, {
                x: -780,
                y: -1206,
                width: 40,
                height: 45
            }, {
                x: -840,
                y: -1209,
                width: 41,
                height: 42
            }, {
                x: -900,
                y: -1216,
                width: 40,
                height: 36
            }, {
                x: -960,
                y: -1223,
                width: 42,
                height: 30
            }, {
                x: -1020,
                y: -1231,
                width: 49,
                height: 24
            }, {
                x: -1090,
                y: -1236,
                width: 49,
                height: 19
            }, {
                x: -1160,
                y: -1236,
                width: 51,
                height: 19
            }, {
                x: -1230,
                y: -1236,
                width: 53,
                height: 19
            }, {
                x: -1300,
                y: -1236,
                width: 53,
                height: 19
            }, {
                x: -1370,
                y: -1237,
                width: 54,
                height: 18
            }, {
                x: -260,
                y: -1192,
                width: 33,
                height: 63
            }, {
                x: -320,
                y: -1191,
                width: 33,
                height: 64
            } ]
        },
        getup: {
            frames: [ {
                x: -80,
                y: -321,
                width: 33,
                height: 64,
                wait: 1
            }, {
                x: -20,
                y: -1337,
                width: 45,
                height: 28,
                wait: 1
            }, {
                x: -90,
                y: -1333,
                width: 25,
                height: 32,
                wait: 1
            }, {
                x: -150,
                y: -1316,
                width: 39,
                height: 49,
                wait: 1
            }, {
                x: -220,
                y: -1320,
                width: 43,
                height: 33,
                wait: 1
            }, {
                x: -290,
                y: -1316,
                width: 37,
                height: 47,
                wait: 1
            }, {
                x: -350,
                y: -1318,
                width: 38,
                height: 47,
                wait: 1
            }, {
                x: -411,
                y: -1323,
                width: 35,
                height: 42,
                wait: 1
            }, {
                x: -471,
                y: -1326,
                width: 35,
                height: 39,
                wait: 1
            }, {
                x: -531,
                y: -1326,
                width: 35,
                height: 39,
                wait: 1
            }, {
                x: -591,
                y: -1323,
                width: 34,
                height: 42,
                wait: 1
            }, {
                x: -651,
                y: -1313,
                width: 32,
                height: 52,
                wait: 1
            }, {
                x: -711,
                y: -1302,
                width: 32,
                height: 63,
                wait: 1
            } ]
        },
        landingtrix: {
            frames: [ {
                x: -801,
                y: -1278,
                width: 39,
                height: 76,
                wait: 2
            }, {
                x: -852,
                y: -1330,
                width: 64,
                height: 35,
                wait: 2
            }, {
                x: -931,
                y: -1333,
                width: 62,
                height: 32,
                wait: 2
            }, {
                x: -1012,
                y: -1329,
                width: 64,
                height: 36,
                wait: 2
            }, {
                x: -1102,
                y: -1314,
                width: 63,
                height: 51,
                wait: 2
            }, {
                x: -1191,
                y: -1318,
                width: 39,
                height: 47,
                wait: 2
            }, {
                x: -1252,
                y: -1319,
                width: 59,
                height: 46,
                wait: 2
            }, {
                x: -1332,
                y: -1302,
                width: 57,
                height: 63,
                wait: 2
            }, {
                x: -1421,
                y: -1302,
                width: 33,
                height: 63,
                wait: 2
            }, {
                x: -1481,
                y: -1301,
                width: 33,
                height: 64,
                wait: 2
            } ]
        }
    };
    plr = new ani.AniSprite(clsName, {
        name: "obiWanKenobi",
        frames: frames
    }, actions);
    return plr;
};
}(this.ani = this.ani || {}, function() {return this;}()));
