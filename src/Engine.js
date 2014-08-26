var engine = (function Engine() {
    var timer, api = {}, sprites = [];
    api.events = {
        UPDATE: 'aniSpriteEngine:update'
    };

    function update() {
        api.dispatch(api.events.UPDATE);
    }

    api.start = function (fps) {
        fps = fps || 60;
        api.stop();
        timer = setInterval(update, 1000 / fps);
    };

    api.stop = function () {
        clearInterval(timer);
    };

    api.step = update;

    api.register = function(sprite) {
        sprites.push(sprite);
    };

    api.unregister = function(sprite) {
        var index = sprites.indexOf(sprite);
        if (index !== -1) {
            sprites.splice(index, 1);
        }
    };

    api.sprites = sprites;

    belt.async.dispatcher(api);
    return api;
}());