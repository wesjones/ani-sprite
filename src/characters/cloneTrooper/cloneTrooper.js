exports.cloneTrooper = function (clsName, actions) {
    var plr,
        frames = {
            shoot: {
                start: function () {
                    if (!plr.friction) {
                        plr.speed = 0;
                    }
                },
                frames: [
                    {x:-1,y:-1,width:42,height:57},
                    {x:-45,y:-1,width:42,height:57},
                    {x:-89,y:-1,width:42,height:57},
                    {x:-133,y:-1,width:42,height:57},
                    {x:-177,y:-1,width:51,height:57},
                    {x:-230,y:-1,width:41,height:57},
                    {x:-273,y:-1,width:41,height:57}
                ]
            },
            walk: {
                frames: [
                    {x:-1,y:-60,width:42,height:58},
                    {x:-45,y:-61,width:42,height:57},
                    {x:-89,y:-61,width:42,height:57},
                    {x:-133,y:-60,width:42,height:58},
                    {x:-177,y:-60,width:42,height:58}

                ]
            }
        };
    plr = new ani.AniSprite(clsName, {name: 'cloneTrooper', frames:frames}, actions);
    return plr;
};