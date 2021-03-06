function AniSprite(clsName, character, actions) {
    var self = this,
        type = 'character',
        y = 100,
        x = 100,
        ground = 500,
        reverse = false,
        ducked = false,
        target = null,// the target to look at.
        targetMaxDistance = 400,
        frames = character.frames,
        defaultAni = frames.stance,
        action = defaultAni,
        index = 0,
        wait = 0,
        speed = 0,
        speedY = 0,
        damage = 0,
        friction = 0,
        gravity = 0.8,
        weight = 5,
        el,
        weakSpots = [];

    // private classes
    function Spot(x, y, radius, name) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.name = name;
    }

    // process frames to add name to them.
    function addNamesToActions() {
        for(var i in character.frames) {
            character.frames[i].name = i;
        }
    }
    addNamesToActions();

    // controls start
    var keys = {}, map = {};
    function keyMaps() {
        for (var i in actions) {
            var action = actions[i];
            keys[action] = false;
            map[action.key] = i;
        }
    }
    keyMaps();

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

    // add some event listeners.
    window.addEventListener('keydown', keyDown);
    window.addEventListener('keyup', keyUp);
//TODO: if jump and walking and walking happens first then no jump. need to fix. prioritize animations.
    function controls() {
        for (var i in keys) {
            if (keys[i]) {
                actions[i].action();
                return;
            }
        }
        if (self.target) {
            if (!self.isTargetInFront() && frames.turn) {
                self.play('turn');
                return;
            }
        }
        if (self.index > action.frames.length - 1) {
            self.play('stance');
        }
    }

    // make them public
    this.start = start;
    this.stop = stop;
    this.actions = actions;

    // controls end

    this.__defineGetter__("name", function () {
        return clsName;
    });

    this.__defineGetter__("type", function () {
        return type;
    });
    this.__defineSetter__("type", function (val) {
        type = val;
    });

    this.__defineGetter__("action", function () {
        return action.name;
    });

    //frames
    this.__defineGetter__("frames", function () {
        return frames;
    });
    this.__defineSetter__("frames", function (val) {
        frames = val;
    });

    //index
    this.__defineGetter__("index", function () {
        return index;
    });
    this.__defineSetter__("index", function (val) {
        index = val;
    });

    //x
    this.__defineGetter__("x", function () {
        return x;
    });
    this.__defineSetter__("x", function (val) {
        x = isNaN(val) ? 0 : val;
    });

    //y
    this.__defineGetter__("y", function () {
        return y;
    });
    this.__defineSetter__("y", function (val) {
        y = isNaN(val) ? 0 : val;
    });

    //width
    this.__defineGetter__("width", function () {
        return action && action.frames && (action.frames[index] && action.frames[index].width || action.frames[0].width) || 0;
    });

    //height
    this.__defineGetter__("height", function () {
        return action && action.frames && (action.frames[index] && action.frames[index].height || action.frames[0].height) || 0;
    });

    //ground
    this.__defineGetter__("ground", function () {
        return ground;
    });
    this.__defineSetter__("ground", function (val) {
        ground = isNaN(val) ? 0 : val;
    });

    //reverse
    this.__defineGetter__("reverse", function () {
        return reverse;
    });
    this.__defineSetter__("reverse", function (val) {
        val = !!val;
        if (reverse !== val) {
            speed *= -1;
            x += (action.frames[0].width * (reverse ? -1 : 1));
        }
        reverse = val;
    });

    //ducked
    this.__defineGetter__("ducked", function () {
        return ducked;
    });
    this.__defineSetter__("ducked", function (val) {
        ducked = !!val;
    });

    //speed
    this.__defineGetter__("speed", function () {
        return speed;
    });
    this.__defineSetter__("speed", function (val) {
        speed = val;
    });

    //speedY
    this.__defineGetter__("speedY", function () {
        return speedY;
    });
    this.__defineSetter__("speedY", function (val) {
        speedY = val;
    });

    //damage
    this.__defineGetter__("damage", function () {
        return damage;
    });
    this.__defineSetter__("damage", function (val) {
        damage = val;
    });

    //damage
    this.__defineGetter__("friction", function () {
        return friction;
    });
    this.__defineSetter__("friction", function (val) {
        friction = val;
    });

    //gravity
    this.__defineGetter__("gravity", function () {
        return gravity;
    });
    this.__defineSetter__("gravity", function (val) {
        gravity = val;
    });

    //target - if the player has a target. They will always turn to look at them.
    this.__defineGetter__("target", function () {
        return target;
    });
    this.__defineSetter__("target", function (val) {
        target = val;
    });

    //targetMaxDistance - distance to ignore targeting
    this.__defineGetter__("targetMaxDistance", function () {
        return targetMaxDistance;
    });
    this.__defineSetter__("targetMaxDistance", function (val) {
        targetMaxDistance = val;
    });

    this.__defineGetter__("wait", function () {
        return wait;
    });

    //defaultAni
    this.__defineGetter__("defaultAni", function () {
        return defaultAni;
    });
    this.__defineSetter__("defaultAni", function (val) {
        defaultAni = val;
        if (!action) {
            action = defaultAni;
        }
    });

    this.getDistanceToTarget = function () {
        var t = {x: self.target.x + self.target.width * 0.5, y: self.target.y + self.target.height * 0.5},
            s = {x: self.x + self.width * 0.5, y: self.y + self.height * 0.5};
        return distanceBetweenPoints(s, t);
    };

    this.isTargetInRange = function () {
        var dist = self.getDistanceToTarget();
        return dist <= targetMaxDistance;
    };

    this.isTargetInFront = function () {
        if (self.target) {
            if (self.target) {
                if (self.target.x < x + self.width * 0.5&& !self.reverse) {
                    return false;
                } else if (self.target.x > x - self.width * 0.5 && self.reverse) {
                    return false;
                }
            }
            return true;
        }
        return false;
    };

    this.play = function (name) {
        if (frames[name] === action) {
            return;
        }
        if (frames[name] && y < ground && !frames[name].inAir) {
            return;
        }
        if (action.frames[index] && action.frames[index].immune) {
            return;
        }
        action = frames[name] || defaultAni;
        index = 0;
        wait = 0;
    };

    this.restoreDefault = function () {
        defaultAni = frames.stance;
    };

    this.createSpot = function (x, y, radius, name) {
        return new Spot(x, y, radius, name);
    };

    this.strike = function (action, frame, x, y, radius) {
        if (!this.reverse) {
            x = frame.width - x;
        } else {
            x = x - frame.width;
        }
        this.dispatch('strike', action.name, this.createSpot(this.x + x, this.y - frame.height + y, radius));
    };

    this.weakSpots = function (action, frame, spots) {
        var i = 0, len = spots.length, spot;
        weakSpots.length = 0;
        while (i < len) {
            spot = spots[i];
            if (!this.reverse) {
                spot.x = this.x + frame.width - spot.x;
            } else {
                spot.x = this.x + spot.x - frame.width;
            }
            spot.y = this.y - frame.height + spot.y;
            weakSpots[i] = spot;
            i += 1;
        }
        this.dispatch('weakSpots', action.name, spots);
    };

    this.checkHit = function (hitSpot, dmg, spd) {
        var i = 0, len = weakSpots.length, spot, dist = 0, lastDist = 100, selected = -1, name;
        while (i < len) {
            spot = weakSpots[i];
            dist = distanceBetweenPoints(hitSpot, spot);
            if (dist < hitSpot.radius + spot.radius && dist < lastDist) {
                selected = i;
            }
            lastDist = dist;
            i += 1;
        }

        if (selected !== -1) {
            damage += dmg;
            speed += (reverse ? spd : -spd);
            friction = 0.25;
            if (hitSpot && hitSpot.name) {
                name = hitSpot.name;
            } else {
                name = typeof weakSpots[selected].name === 'function' ? weakSpots[selected].name(dmg, spd) : weakSpots[selected].name;
            }
            if (name) {
                this.play(name);
            }
            return;
        }

        return;
    };

    this.addProjectile = function(lifeMax) {
        // we need to see if the character has projectiles
        var elm = document.createElement('div');
        elm.className = clsName + '-projectile';
        elm.style.background = window.getComputedStyle(el).background;
//        elm.style.border = "1px solid #FF0000";
        el.parentNode.appendChild(elm);
        var p = new ani.AniSprite(clsName + '-projectile', {name: character.name, frames:character.projectiles}),
            life = 0;
        lifeMax = lifeMax || 40;
        p.type = 'projectile';
        p.defaultAni = p.frames.fly;
        p.reverse = self.reverse;
        p.x = self.x + (self.reverse ? -p.width : self.width);
        p.y = ground;
        p.ground = self.ground - ((self.height - p.height) * 0.5);
        p.play("fly");
        function stop() {
            engine.off(engine.events.UPDATE, onUpdate);
            p.destroy();
            el.parentNode.removeChild(elm);
            p = null;
        }
        p.stop = stop;
        function hit(sprite) {
            p.speed = 0;
            p.play("hit");
            if (sprite) {
                sprite.dispatch('hit', p);
                lifeMax = life + p.frames.hit.length - 1;
            }
        }
        function checkCollision() {
            // use the listeners on the engine to check for targets.
            var i = 0, len = engine.sprites.length, sprite;
            while (i < len) {
                sprite = engine.sprites[i];
                if (sprite !== self && sprite !== p) {
                    if (!p.reverse && p.x - p.width > sprite.x && p.x < sprite.x + sprite.width) {
                        hit(sprite);
                    } else if (p.reverse && p.x < sprite.x + sprite.width && p.x > sprite.x) {
                        hit(sprite);
                    }
                }
                i += 1;
            }
        }
        function onUpdate() {
            life += 1;
            checkCollision();
            if (character.projectiles.hit && life === lifeMax - character.projectiles.hit.frames.length) {
                hit();
            } else if (life >= lifeMax) {
                p.stop();
            }
        }
        engine.on(engine.events.UPDATE, onUpdate);
        return p;
    };

    this.destroy = function () {
        engine.off(engine.events.UPDATE, controls);
        engine.off(engine.events.UPDATE, update);
        engine.unregister(self);
        character = null;
        frames = null;
        self = null;
    };

    function distanceBetweenPoints(p1, p2) {
        var xs = 0, ys = 0;
        xs = p2.x - p1.x;
        xs = xs * xs;
        ys = p2.y - p1.y;
        ys = ys * ys;
        return Math.sqrt( xs + ys );
    }

    function update() {
        var t, f, fms, depIndex, dep;
        if (action.dependencies) {
            depIndex = 0;
            fms = [];
            while (depIndex < action.dependencies.length) {
                if (typeof action.dependencies[depIndex] === 'function') {
                    dep = action.dependencies[depIndex]();
                } else {
                    dep = action.dependencies[depIndex];
                }
                if (dep) {
                    fms = fms.concat.apply(fms, frames[action.dependencies[depIndex]].frames);
                }
                depIndex += 1;
            }
            fms = fms.concat.apply(fms, action.frames);
        } else {
            t = action;
            fms = t.frames;
        }
        if (!fms[index]) {
            index = 0;
            wait = 0;
            t = action;
            fms = t.frames;
        }
        f = fms[index];
        if (index === 0 && t.start) {
            t.start(t, self);
        }
        if (f.before) {
            f.before(t, self);
        }
        x += speed;
        if (y < ground) {
            speedY += gravity * weight;
        } else {
            speedY = 0;
            y = ground;
        }
        y += speedY;
        if (friction) {
            speed *= friction;
            if (speed < friction) {
                speed = 0;
                friction = 0;
            }
        }
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
            el.style.left = x + (self.reverse ? -f.width : 0) + (f.ox ? (self.reverse ? f.ox * -1 : f.ox) : 0) + 'px';
        }
        if (f.wait && wait < f.wait) {
            wait += 1;
        } else {
            index += 1;
            wait = 0;
        }
        if (f.after) {
            f.after(t, self);
        }
        if (index === fms.length && t.end && wait >= t.wait) {
            t.end(t, self);
        }
    }

    belt.async.dispatcher(this);//animations can throw events
    engine.on(engine.events.UPDATE, controls);
    engine.on(engine.events.UPDATE, update);
    engine.register(self);
}