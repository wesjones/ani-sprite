/*
* AniSprite v.0.1.10
* Wes Jones. MIT 2014
*/
(function(exports, global){
exports.SpriteMapper = function() {
    var self = this, rendering = 0, dimensionsChange = true, imgData, anim, outline, content, url, scale = 4, x = 0, y = 0, width = 100, height = 100, bgWidth = 100, bgHeight = 100, el, css, srcWrapper, srcCanvas, srcCtx, destCanvas, destCtx, grid, gridCtx, output = [];
    function init() {
        el = document.createElement("div");
        el.className = "spriteMapper";
        css = el.style;
        css.position = "absolute";
        css.top = "0px";
        css.left = "0px";
        css.width = "100%";
        css.height = "100%";
        el.innerHTML = '<div class="srcWrapper" style="position:absolute;left:0px;right:0px;top:0px;bottom:0px;overflow:auto;">\n    <canvas class="srcCanvas"></canvas>\n    <div class="outline" style="position:absolute;border:1px solid #F00;"></div>\n</div>\n<canvas class="destCanvas" style="position:absolute;top:0px;left:0px;border:1px solid #66C;"></canvas>\n<canvas class="grid" style="position:absolute;top:0px;left:0px;border:1px solid #000;"></canvas>\n<div class="anim" style="position:absolute;left:0px;bottom:0px;"></div>\n<div class="content" style="position:absolute;top:0px;right:0px;font-size:10px;"></div>\n\n';
        srcWrapper = el.getElementsByClassName("srcWrapper")[0];
        srcCanvas = el.getElementsByClassName("srcCanvas")[0];
        srcCtx = srcCanvas.getContext("2d");
        destCanvas = el.getElementsByClassName("destCanvas")[0];
        destCtx = destCanvas.getContext("2d");
        grid = el.getElementsByClassName("grid")[0];
        gridCtx = grid.getContext("2d");
        anim = el.getElementsByClassName("anim")[0];
        content = el.getElementsByClassName("content")[0];
        outline = el.getElementsByClassName("outline")[0];
        document.body.appendChild(el);
        update();
        window.addEventListener("keydown", function(event) {
            console.log(event.keyCode);
            var delta = event.shiftKey ? 10 : 1, changed = false;
            if (event.keyCode === 39) {
                self.x = x + delta;
                changed = true;
            } else if (event.keyCode === 37) {
                self.x = x - delta;
                changed = true;
            } else if (event.keyCode === 38) {
                self.y = y - delta;
                changed = true;
            } else if (event.keyCode === 40) {
                self.y = y + delta;
                changed = true;
            } else if (event.keyCode === 87) {
                self.height = height - delta;
                changed = true;
            } else if (event.keyCode === 65) {
                self.width = width - delta;
                changed = true;
            } else if (event.keyCode === 83) {
                self.height = height + delta;
                changed = true;
            } else if (event.keyCode === 68) {
                self.width = width + delta;
                changed = true;
            } else if (event.keyCode === 88) {
                output.pop();
                changed = true;
            } else if (event.keyCode === 86) {
                output.push({
                    x: -x,
                    y: -y,
                    width: width,
                    height: height
                });
                changed = true;
            }
            if (changed) {
                var str = "", i = 0;
                while (i < output.length) {
                    str += JSON.stringify(output[i]) + "\n";
                    i += 1;
                }
                str += JSON.stringify({
                    x: -x,
                    y: -y,
                    width: width,
                    height: height
                }) + "\n";
                content.innerHTML = "<pre>" + str + "</pre>";
            }
        });
    }
    self.__defineGetter__("url", function() {
        return url;
    });
    self.__defineSetter__("url", function(val) {
        if (url !== val) {
            url = val;
            anim.style.background = "url('" + url + "') no-repeat";
            update();
        }
        return this;
    });
    self.__defineGetter__("scale", function() {
        return scale;
    });
    self.__defineSetter__("scale", function(val) {
        if (scale !== val) {
            scale = val;
            dimensionsChange = true;
            update();
        }
        return this;
    });
    self.__defineGetter__("x", function() {
        return x;
    });
    self.__defineSetter__("x", function(val) {
        if (x !== val) {
            x = val >= 0 ? val : 0;
            update();
        }
        return this;
    });
    self.__defineGetter__("y", function() {
        return scale;
    });
    self.__defineSetter__("y", function(val) {
        if (y !== val) {
            y = val >= 0 ? val : 0;
            update();
        }
        return this;
    });
    self.__defineGetter__("width", function() {
        return width;
    });
    self.__defineSetter__("width", function(val) {
        if (width !== val) {
            width = val;
            anim.style.width = width + "px";
            dimensionsChange = true;
            update();
        }
        return this;
    });
    self.__defineGetter__("height", function() {
        return scale;
    });
    self.__defineSetter__("height", function(val) {
        if (height !== val) {
            height = val;
            anim.style.height = height + "px";
            dimensionsChange = true;
            update();
        }
        return this;
    });
    self.__defineGetter__("bgWidth", function() {
        return bgWidth;
    });
    self.__defineSetter__("bgWidth", function(val) {
        if (bgWidth !== val) {
            bgWidth = val;
            dimensionsChange = true;
            update();
        }
        return this;
    });
    self.__defineGetter__("bgHeight", function() {
        return scale;
    });
    self.__defineSetter__("bgHeight", function(val) {
        if (bgHeight !== val) {
            bgHeight = val;
            dimensionsChange = true;
            update();
        }
        return this;
    });
    function update() {
        clearTimeout(rendering);
        rendering = setTimeout(render, 100);
    }
    function animRender() {
        output.index = output.index || 0;
        var item = output[output.index];
        if (item) {
            anim.style.backgroundPosition = parseInt(item.x, 10) + parseInt(item.ox || 0, 10) + "px " + (parseInt(item.y, 10) + parseInt(item.oy || 0, 10)) + "px";
            anim.style.width = item.width + "px";
            anim.style.height = item.height + "px";
            anim.innerText = output.index;
            output.index += 1;
            if (!output[output.index]) {
                output.index = 0;
            }
        }
    }
    function render() {
        if (dimensionsChange) {
            var img = new Image();
            img.onload = onImageLoad;
            img.src = url;
        } else {
            imgData.offset = 0;
            imgData.ox = x;
            imgData.oy = y;
            destCtx.clearRect(0, 0, width * scale, height * scale);
            copyPixels(imgData);
            renderOutline();
        }
    }
    function renderOutline() {
        outline.style.left = x + "px";
        outline.style.top = y + "px";
        outline.style.width = width + "px";
        outline.style.height = height + "px";
    }
    function onImageLoad() {
        console.log("onImageLoad");
        bgWidth = this.width;
        bgHeight = this.height;
        srcWrapper.style.left = width * scale + "px";
        srcCanvas.width = bgWidth;
        srcCanvas.height = bgHeight;
        srcCtx.drawImage(this, 0, 0);
        var srcData = srcCtx.getImageData(0, 0, bgWidth, bgHeight).data;
        destCanvas.width = width * scale;
        destCanvas.height = height * scale;
        destCtx.clearRect(0, 0, width * scale, height * scale);
        imgData = {
            src: srcData,
            ox: x,
            oy: y,
            offset: 0
        };
        copyPixels(imgData);
        drawGrid();
        renderOutline();
        dimensionsChange = false;
    }
    function copyPixels(data) {
        if (!data.offset) {
            data.x = 0;
            data.y = 0;
        }
        while (data.y < bgHeight) {
            data.x = 0;
            while (data.x < bgWidth) {
                drawPixel(data);
                data.x += 1;
                if (data.offset < 0) {
                    return;
                }
            }
            data.y += 1;
        }
    }
    function drawPixel(data) {
        var r = data.src[data.offset++];
        var g = data.src[data.offset++];
        var b = data.src[data.offset++];
        var a = data.src[data.offset++] / 100;
        if (data.y >= data.oy && data.y < data.oy + height && data.x >= data.ox && data.x < data.ox + width) {
            destCtx.fillStyle = "rgba(" + [ r, g, b, a ].join(",") + ")";
            destCtx.fillRect((data.x - data.ox) * scale, (data.y - data.oy) * scale, scale, scale);
        }
        if (data.x > data.ox + width && data.y > data.oy + height) {
            data.offset = -1;
        }
    }
    function drawGrid() {
        grid.width = width * scale;
        grid.height = height * scale;
        gridCtx.clearRect(0, 0, width * scale, height * scale);
        var w = 0, h = 0;
        while (w < width) {
            gridCtx.beginPath();
            gridCtx.moveTo(w * scale - .5, 0);
            gridCtx.lineTo(w * scale - .5, height * scale);
            gridCtx.lineWidth = .5;
            gridCtx.strokeStyle = w % 10 === 0 ? "#000" : "#CCC";
            gridCtx.stroke();
            w += 1;
        }
        while (h < height) {
            gridCtx.beginPath();
            gridCtx.moveTo(0, h * scale - .5);
            gridCtx.lineTo(width * scale, h * scale - .5);
            gridCtx.lineWidth = .5;
            gridCtx.strokeStyle = h % 10 === 0 ? "#000" : "#CCC";
            gridCtx.stroke();
            h += 1;
        }
    }
    self.init = init;
    self.updateOutput = function(items) {
        output = items;
    };
    self.animRender = animRender();
};
}(this.ani = this.ani || {}, function() {return this;}()));
