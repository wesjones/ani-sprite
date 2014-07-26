var engine = (function Engine() {
    var timer, api = {};
    api.events = {
        UPDATE: 'aniSpriteEngine:update'
    };

    function update() {
        api.dispatch(api.events.UPDATE);
    }

    api.start = function (fps) {
        fps = fps || 60;
        timer = setInterval(update, 1000 / fps);
    };

    api.stop = function () {
        clearInterval(timer);
    };

    belt.async.dispatcher(api);
    return api;
}());