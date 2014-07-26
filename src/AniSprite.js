function AniSprite(clsName, character) {
    var y = 200,
        x = 100,
        reverse = false,
        frames = character.frames,
        defaultAni = frames.stance,
        target = defaultAni,
        index = 0,
        wait = 0,
        repeat = 0,
        speed = 0,
        el;

    this.__defineGetter__("name", function () {
        return clsName;
    });

    //frames
    this.__defineGetter__("frames", function () {
        return frames;
    });
    this.__defineSetter__("frames", function (val) {
        frames = val;
    });

    //y
    this.__defineGetter__("y", function () {
        return y;
    });
    this.__defineSetter__("y", function (val) {
        y = isNaN(val) ? 0 : val;
    });

    //s
    this.__defineGetter__("x", function () {
        return x;
    });
    this.__defineSetter__("x", function (val) {
        x = isNaN(val) ? 0 : val;
    });

    //reverse
    this.__defineGetter__("reverse", function () {
        return reverse;
    });
    this.__defineSetter__("reverse", function (val) {
        reverse = !!val;
    });

    //speed
    this.__defineGetter__("speed", function () {
        return speed;
    });
    this.__defineSetter__("speed", function (val) {
        speed = val;
    });

    //defaultAni
    this.__defineGetter__("defaultAni", function () {
        return defaultAni;
    });
    this.__defineSetter__("defaultAni", function (val) {
        defaultAni = val;
    });

    this.play = function (name) {
        if (target && target.end) {
            target.end();
        }
        if (frames[name] === target) {
            repeat = 1;
            return;
        }
        target = frames[name] || frames.stance;
        index = 0;
        wait = 0;
    };

    this.restoreDefault = function () {
        defaultAni = frames.stance;
    };

    function update() {
        var t, f, fms, depIndex, dep;
        if (target.dependencies) {
            depIndex = 0;
            fms = [];
            while (depIndex < target.dependencies.length) {
                if (typeof target.dependencies[depIndex] === 'function') {
                    dep = target.dependencies[depIndex]();
                } else {
                    dep = target.dependencies[depIndex];
                }
                if (dep) {
                    fms = fms.concat.apply(fms, frames[target.dependencies[depIndex]].frames);
                }
                depIndex += 1;
            }
            fms = fms.concat.apply(fms, target.frames);
        } else {
            t = target;
            fms = t.frames;
        }
        if (!fms[index]) {
            if (repeat > 0) {
                repeat -= 1;
            } else {
                target = defaultAni;
            }
            index = 0;
            wait = 0;
            t = target;
            fms = t.frames;
        }
        f = fms[index];
        if (index === 0 && t.start) {
            t.start();
        }
        x += speed;
        if (!el) {
            el = document.getElementsByClassName(clsName)[0];
            el.classList.add(character.name);
            el.style.position = 'absolute';
        }
        if (el) {
            if (reverse) {
                el.style.webkitTransform = 'scaleX(-1)';
            } else {
                el.style.webkitTransform = '';
            }
            el.style.backgroundPosition = f.x + "px " + f.y + "px";
            el.style.width = f.width + 'px';
            el.style.height = f.height + 2 + 'px'; // add a little just below the height so toes don't get cut off.
            el.style.top = y + (f.oy || 0) - f.height + 'px';
            el.style.left = x + (f.ox || 0) + 'px';
        }
        if (f.wait && wait < f.wait) {
            wait += 1;
        } else {
            index += 1;
            wait = 0;
        }
        if (index === fms.length && t.end) {
            t.end();
        }
    }

    engine.on(engine.events.UPDATE, update);
}