/*
* AniSprite v.0.1.10
* Wes Jones. MIT 2014
*/
(function(exports, global) {
    global["ani"] = exports;
    (function(exports, global) {
        global["belt"] = exports;
        var async = {};
        async.dispatcher = function(target, scope, map) {
            var listeners = {};
            function off(event, callback) {
                var index, list;
                list = listeners[event];
                if (list) {
                    if (callback) {
                        index = list.indexOf(callback);
                        if (index !== -1) {
                            list.splice(index, 1);
                        }
                    } else {
                        list.length = 0;
                    }
                }
            }
            function on(event, callback) {
                listeners[event] = listeners[event] || [];
                listeners[event].push(callback);
                return function() {
                    off(event, callback);
                };
            }
            function once(event, callback) {
                function fn() {
                    off(event, fn);
                    callback.apply(scope || target, arguments);
                }
                return on(event, fn);
            }
            function getListeners(event) {
                return listeners[event];
            }
            function fire(callback, args) {
                return callback && callback.apply(target, args);
            }
            function dispatch(event) {
                if (listeners[event]) {
                    var i = 0, list = listeners[event], len = list.length;
                    while (i < len) {
                        fire(list[i], arguments);
                        i += 1;
                    }
                }
            }
            if (scope && map) {
                target.on = scope[map.on] && scope[map.on].bind(scope);
                target.off = scope[map.off] && scope[map.off].bind(scope);
                target.once = scope[map.once] && scope[map.once].bind(scope);
                target.dispatch = scope[map.dispatch].bind(scope);
            } else {
                target.on = on;
                target.off = off;
                target.once = once;
                target.dispatch = dispatch;
            }
            target.getListeners = getListeners;
        };
        exports["async"] = async;
    })({}, function() {
        return this;
    }());
    var engine = function Engine() {
        var timer, api = {};
        api.events = {
            UPDATE: "aniSpriteEngine:update"
        };
        function update() {
            api.dispatch(api.events.UPDATE);
        }
        api.start = function(fps) {
            fps = fps || 60;
            api.stop();
            timer = setInterval(update, 1e3 / fps);
        };
        api.stop = function() {
            clearInterval(timer);
        };
        api.step = update;
        belt.async.dispatcher(api);
        return api;
    }();
    function AniSprite(clsName, character, actions) {
        var self = this, y = 100, x = 100, ground = 500, reverse = false, frames = character.frames, defaultAni = frames.stance, target = defaultAni, index = 0, wait = 0, speed = 0, speedY = 0, gravity = .8, weight = 5, el;
        var keys = {}, map = {};
        for (var i in actions) {
            var action = actions[i];
            keys[action] = false;
            map[action.key] = i;
        }
        function start(action) {
            keys[action] = true;
        }
        function stop(action) {
            keys[action] = false;
        }
        function keyDown(event) {
            var key = event.keyCode;
            console.log(key);
            if (map[key]) {
                start(map[key]);
            }
        }
        function keyUp(event) {
            var key = event.keyCode;
            if (map[key]) {
                stop(map[key]);
            }
        }
        window.addEventListener("keydown", keyDown);
        window.addEventListener("keyup", keyUp);
        function controls() {
            for (var i in keys) {
                if (keys[i]) {
                    actions[i].action();
                    return;
                }
            }
            if (self.index >= target.frames.length - 1) {
                self.play("stance");
            }
        }
        this.start = start;
        this.stop = stop;
        this.actions = actions;
        this.__defineGetter__("name", function() {
            return clsName;
        });
        this.__defineGetter__("frames", function() {
            return frames;
        });
        this.__defineSetter__("frames", function(val) {
            frames = val;
        });
        this.__defineGetter__("index", function() {
            return index;
        });
        this.__defineSetter__("index", function(val) {
            index = val;
        });
        this.__defineGetter__("y", function() {
            return y;
        });
        this.__defineSetter__("y", function(val) {
            y = isNaN(val) ? 0 : val;
        });
        this.__defineGetter__("ground", function() {
            return ground;
        });
        this.__defineSetter__("ground", function(val) {
            ground = isNaN(val) ? 0 : val;
        });
        this.__defineGetter__("x", function() {
            return x;
        });
        this.__defineSetter__("x", function(val) {
            x = isNaN(val) ? 0 : val;
        });
        this.__defineGetter__("reverse", function() {
            return reverse;
        });
        this.__defineSetter__("reverse", function(val) {
            val = !!val;
            if (reverse !== val) {
                speed *= -1;
            }
            reverse = val;
        });
        this.__defineGetter__("speed", function() {
            return speed;
        });
        this.__defineSetter__("speed", function(val) {
            speed = val;
        });
        this.__defineGetter__("speedY", function() {
            return speedY;
        });
        this.__defineSetter__("speedY", function(val) {
            speedY = val;
        });
        this.__defineGetter__("gravity", function() {
            return gravity;
        });
        this.__defineSetter__("gravity", function(val) {
            gravity = val;
        });
        this.__defineGetter__("wait", function() {
            return wait;
        });
        this.__defineGetter__("defaultAni", function() {
            return defaultAni;
        });
        this.__defineSetter__("defaultAni", function(val) {
            defaultAni = val;
        });
        this.play = function(name) {
            if (frames[name] === target) {
                return;
            }
            if (frames[name] && y < ground && !frames[name].inAir) {
                return;
            }
            if (target.frames[index] && target.frames[index].immune) {
                return;
            }
            target = frames[name] || frames.stance;
            index = 0;
            wait = 0;
        };
        this.restoreDefault = function() {
            defaultAni = frames.stance;
        };
        function update() {
            var t, f, fms, depIndex, dep;
            if (target.dependencies) {
                depIndex = 0;
                fms = [];
                while (depIndex < target.dependencies.length) {
                    if (typeof target.dependencies[depIndex] === "function") {
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
                index = 0;
                wait = 0;
                t = target;
                fms = t.frames;
            }
            f = fms[index];
            if (index === 0 && t.start) {
                t.start();
            }
            if (f.before) {
                f.before();
            }
            x += speed;
            if (y < ground) {
                speedY += gravity * weight;
            } else {
                speedY = 0;
                y = ground;
            }
            y += speedY;
            if (!el) {
                el = document.getElementsByClassName(clsName)[0];
                el.classList.add(character.name);
                el.style.position = "absolute";
            }
            if (el) {
                if (reverse) {
                    el.style.webkitTransform = "scaleX(-1)";
                } else {
                    el.style.webkitTransform = "";
                }
                el.style.backgroundPosition = f.x + "px " + f.y + "px";
                el.style.width = f.width + "px";
                el.style.height = f.height + 2 + "px";
                el.style.top = y + (f.oy || 0) - f.height + "px";
                el.style.left = x + (f.ox || 0) + "px";
            }
            if (f.wait && wait < f.wait) {
                wait += 1;
            } else {
                index += 1;
                wait = 0;
            }
            if (f.after) {
                f.after();
            }
            if (index === fms.length && t.end && wait >= t.wait) {
                t.end();
            }
        }
        belt.async.dispatcher(this);
        engine.on(engine.events.UPDATE, controls);
        engine.on(engine.events.UPDATE, update);
    }
    exports["engine"] = engine;
    exports["AniSprite"] = AniSprite;
})({}, function() {
    return this;
}());