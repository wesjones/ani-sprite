exports.cloneTrooper = function (clsName, actions) {
    var plr,
        frames = {
            stance: {
                start: function () {
                    if (!plr.friction) {
                        plr.speed = 0;
                    }
                },
                frames: [
                    {x:-1,y:-1,width:42,height:57}
                ]
            },
            shoot: {
                frames: [
                    {x:-1,y:-1,width:42,height:57},
                    {x:-45,y:-1,width:42,height:57},
                    {x:-89,y:-1,width:42,height:57},
                    {x:-133,y:-1,width:42,height:57},
                    {x:-177,y:-1,width:51,height:57},
                    {x:-230,y:-1,width:41,height:57},
                    {x:-273,y:-1,width:41,height:57, after: function() {
                        plr.addProjectile();
                    }}
                ]
            },
            walk: {
                frames: [
                    {x:-1,y:-60,width:42,height:58  ,wait:2},
                    {x:-45,y:-61,width:42,height:57 ,wait:2},
                    {x:-89,y:-61,width:42,height:57 ,wait:2},
                    {x:-133,y:-60,width:42,height:58,wait:2},
                    {x:-177,y:-60,width:42,height:58,wait:2},
                    {x:-221,y:-60,width:43,height:58,wait:2},
                    {x:-1,y:-121,width:43,height:57 ,wait:2},
                    {x:-46,y:-121,width:43,height:57,wait:2},
                    {x:-91,y:-120,width:43,height:58,wait:2}


                ]
            },
            getHit: {
                frames: [
                    {x:-1,y:-182,width:36,  height:59,wait:2},
                    {x:-39,y:-180,width:32, height:61,wait:2},
                    {x:-1,y:-254,width:42,  height:61,wait:2},
                    {x:-45,y:-243,width:49, height:72,wait:2},
                    {x:-97,y:-265,width:56, height:50,wait:2},
                    {x:-155,y:-284,width:54,height:31,wait:2},
                    {x:-267,y:-288,width:59,height:27,wait:2},
                    {x:-1,y:-340,width:60,  height:17,wait:2},
                    {x:-63,y:-340,width:59, height:17,wait:2},
                    {x:-124,y:-340,width:59,height:17,wait:2},
                    {x:-190,y:-326,width:47,height:30,wait:2},
                    {x:-239,y:-325,width:45,height:31,wait:2},
                    {x:-286,y:-317,width:35,height:41,wait:2},
                    {x:0,y:-373,width:34,   height:42,wait:2},
                    {x:-36,y:-365,width:34, height:50,wait:2},
                    {x:-72,y:-357,width:42, height:58,wait:2},
                    {x:-116,y:-358,width:42,height:58,wait:2},
                    {x:-116,y:-358,width:42,height:58,wait:2}

                ]
            },
            hit: {
                frames: [
                    {x:-1,y:-434,width:35,height:57},
                    {x:-38,y:-434,width:38,height:57},
                    {x:-78,y:-434,width:40,height:57},
                    {x:-120,y:-434,width:41,height:57},
                    {x:-163,y:-417,width:44,height:74},
                    {x:-209,y:-417,width:41,height:74},
                    {x:-252,y:-417,width:44,height:74},
                    {x:-1,y:-493,width:51,height:68},
                    {x:-54,y:-504,width:51,height:57},
                    {x:-107,y:-504,width:45,height:57},
                    {x:-154,y:-504,width:42,height:57},
                    {x:-154,y:-504,width:42,height:57},
                    {x:-154,y:-504,width:42,height:57},
                    {x:-154,y:-504,width:42,height:57}
                ]
            },
            run: {
                frames: [
                    {x:-1,y:-566,width:48,height:59   ,wait:2},
                    {x:-51,y:-564,width:47,height:61  ,wait:2},
                    {x:-100,y:-563,width:49,height:62 ,wait:2},
                    {x:-151,y:-565,width:47,height:60 ,wait:2},
                    {x:-200,y:-566,width:47,height:59 ,wait:2},
                    {x:-1,y:-628,width:48,height:61   ,wait:2},
                    {x:-51,y:-627,width:50,height:62  ,wait:2},
                    {x:-103,y:-627,width:48,height:62 ,wait:2}
                ]
            }
        },
        projectiles = {
            fly: {
                start: function (action, p) {
                    p.speed = p.reverse ? -10 : 10;
                },
                frames: [
                    {x:-149,y:-201,width:14,height:4}
                ]
            },
            hit: {
                frames: [
                    {x:-170,y:-195,width:20,height:20},
                    {x:-194,y:-187,width:28,height:31},
                    {x:-224,y:-186,width:32,height:30}
                ]
            }
        };
    plr = new ani.AniSprite(clsName, {name: 'cloneTrooper', frames:frames, projectiles:projectiles}, actions);
    return plr;
};