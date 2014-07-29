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
        api.stop();
        timer = setInterval(update, 1000 / fps);
    };

    api.stop = function () {
        clearInterval(timer);
    };

    api.step = update;

    belt.async.dispatcher(api);
    return api;
}());