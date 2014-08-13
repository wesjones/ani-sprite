exports.battleDroid = function (clsName, actions) {
    var plr,
        frames = {
            stance: {
                start: function () {
                    if (!plr.friction) {
                        plr.speed = 0;
                    }
                },
            walk: {
                frames: [
                    {x:-16,  y:-10, width:36, height:51},
                    {x:-56,  y:-9,  width:36, height:52},
                    {x:-98,  y:-8,  width:36, height:53},
                    {x:-139, y:-9,  width:36, height:52},
                    {x:-178, y:-10, width:36, height:51},
                    {x:-220, y:-9,  width:36, height:52},
                    {x:-261, y:-8,  width:36, height:53},
                    {x:-299, y:-9,  width:36, height:52},
                    {x:-338, y:-10, width:36, height:51}
                ]
            },
            stance: {
                frames: [
                    {"x":-16,"y":-75,"width":37,"height":54}
                ]
            },
            getHit: {
                frames: [
                    {"x":-27,"y":-216,"width":38,"height":63},
                    {"x":-73,"y":-227,"width":42,"height":52},
                    {"x":-131,"y":-234,"width":42,"height":45},
                    {"x":-131,"y":-234,"width":42,"height":45},
                    {"x":-238,"y":-236,"width":55,"height":43},
                    {"x":-301,"y":-256,"width":61,"height":24},
                    {"x":-367,"y":-259,"width":62,"height":21},
                    {"x":-433,"y":-256,"width":61,"height":24},
                    {"x":-27,"y":-310,"width":50,"height":30},
                    {"x":-84,"y":-307,"width":43,"height":33},
                    {"x":-134,"y":-293,"width":48,"height":47},
                    {"x":-134,"y":-293,"width":48,"height":47},
                    {"x":-249,"y":-289,"width":43,"height":51}
                ]
            },
            die: {
                frames: [
                    {"x":-14,"y":-377,"width":36,"height":58},
                    {"x":-58,"y":-360,"width":87,"height":76},
                    {"x":-151,"y":-357,"width":96,"height":79},
                    {"x":-259,"y":-361,"width":106,"height":75},
                    {"x":-378,"y":-370,"width":111,"height":67},
                    {"x":-502,"y":-370,"width":115,"height":67},
                    {"x":-16,"y":-440,"width":121,"height":67},
                    {"x":-169,"y":-468,"width":126,"height":27},
                    {"x":-319,"y":-474,"width":126,"height":21},
                    {"x":-480,"y":-474,"width":126,"height":21}

                ]
            },

            hit: {
                frames: [
                    {"x":-24,"y":-156,"width":37,"height":53},
                    {"x":-66,"y":-156,"width":32,"height":53},
                    {"x":-101,"y":-156,"width":37,"height":53},
                    {"x":-140,"y":-156,"width":37,"height":53},
                    {"x":-178,"y":-148,"width":49,"height":61},
                    {"x":-227,"y":-148,"width":44,"height":61},
                    {"x":-274,"y":-147,"width":45,"height":62},
                    {"x":-322,"y":-147,"width":52,"height":62},
                    {"x":-378,"y":-157,"width":45,"height":52},
                    {"x":-425,"y":-156,"width":34,"height":53},
                ]
            },
        }
    };
    plr = new ani.AniSprite(clsName, {name: 'battleDroid', frames:frames}, actions);
    return plr;
};