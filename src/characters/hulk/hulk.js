exports.hulk = function (clsName, actions) {
    var plr,
        frames = {
            stance: {
                start: function () {
                    if (!plr.friction) {
                        plr.speed = 0;
                    }
                },
                frames: [
                    {x: -25, y: -23, width: 100, height: 101},
                    {x:-160, y:-22,  width:97,   height:102},
                    {x:-298, y:-21,  width:95,   height:103},
                    {x:-436, y:-21,  width:98,   height:103},
                    {x:-575, y:-21,  width:101,  height:103},
                    {x:-714, y:-23,  width:101,  height:101},
                    {x:-850, y:-24,  width:102,  height:100},
                    {x:-991, y:-24,  width:102,  height:100},
                ]
            },
            walk: {
                frames: [

                ]
            }
        };
    plr = new ani.AniSprite(clsName, {name: 'hulk', frames:frames}, actions);
    return plr;
};