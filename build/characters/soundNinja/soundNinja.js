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
        }
    };
    plr = new ani.AniSprite(clsName, {
        name: "soundNinja",
        frames: frames
    }, actions);
    return plr;
};
}(this.ani = this.ani || {}, function() {return this;}()));
