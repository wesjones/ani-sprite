exports.SpriteMapper = function () {
    var self = this,
        rendering = 0,
        dimensionsChange = true,
        imgData,
        outline,
        content,
        url,
        scale = 4,
        x = 0,
        y = 0,
        width = 100,
        height = 100,
        bgWidth = 100,
        bgHeight = 100,
        el,
        css,
        srcCanvas,
        srcCtx,
        destCanvas,
        destCtx,
        grid,
        gridCtx,
        output = [];

    function init() {
        el = document.createElement('div');
        el.className = 'spriteMapper';
        css = el.style;
        css.position = 'absolute';
        css.top = '0px';
        css.left = '0px';
        css.width = '100%';
        css.height = '100%';

        srcCanvas = document.createElement('canvas');
        el.appendChild(srcCanvas);
        srcCtx = srcCanvas.getContext('2d');
        srcCanvas.style.position = 'absolute';
        srcCanvas.style.top = '0px';
        srcCanvas.style.left = '0px';
        srcCanvas.style.border = "1px solid #F60";

        destCanvas = document.createElement('canvas');
        el.appendChild(destCanvas);
        destCtx = destCanvas.getContext('2d');
        destCanvas.style.position = 'absolute';
        destCanvas.style.top = '0px';
        destCanvas.style.left = '0px';
        destCanvas.style.border = "1px solid #6666CC";

        grid = document.createElement('canvas');
        el.appendChild(grid);
        gridCtx = grid.getContext('2d');
        grid.style.position = 'absolute';
        grid.style.top = '0px';
        grid.style.left = '0px';
        grid.style.border = "1px solid #000000";

        outline = document.createElement('div');
        el.appendChild(outline);
        outline.style.position = 'absolute';
        outline.style.border = '1px solid #FF0000';

        content = document.createElement('div');
        el.appendChild(content);
        content.style.position = 'absolute';
        content.style.top = '0px';
        content.style.right = '0px';
        content.style.fontSize = '10px';

        document.body.appendChild(el);
        update();

        window.addEventListener("keydown", function (event) {
            console.log(event.keyCode);
            var delta = event.shiftKey ? 10 : 1;
            if (event.keyCode === 39) {
                self.x = x - delta;
            } else if (event.keyCode === 37) {
                self.x = x + delta;
            } else if (event.keyCode === 38) {
                self.y = y + delta;
            } else if (event.keyCode === 40) {
                self.y = y - delta;
            } else if (event.keyCode === 87) { // W
                self.height = height + delta;
            } else if (event.keyCode === 65) { // A
                self.width = width - delta;
            } else if (event.keyCode === 83) { // S
                self.height = height - delta;
            } else if (event.keyCode === 68) { // D
                self.width = width + delta;
            } else if (event.keyCode === 88) { // X
                output.pop();
            } else if (event.keyCode === 67) { // C
                output.push({x:-x, y:-y, width:width, height:height});
            }
            var str = '', i = 0;
            while (i < output.length) {
                str += JSON.stringify(output[i]) + "\n";
                i += 1;
            }
            str += JSON.stringify({x:-x, y:-y, width:width, height:height}) + "\n";
            content.innerHTML = '<pre>' + str + '</pre>';
        });
    }

    self.__defineGetter__('url', function() {
        return url;
    });
    self.__defineSetter__('url', function (val) {
        if (url !== val) {
            url = val;
            update();
        }
        return this;
    });

    self.__defineGetter__('scale', function() {
        return scale;
    });
    self.__defineSetter__('scale', function (val) {
        if (scale !== val) {
            scale = val;
            dimensionsChange = true;
            update();
        }
        return this;
    });

    self.__defineGetter__('x', function() {
        return x;
    });
    self.__defineSetter__('x', function (val) {
        if (x !== val) {
            x = val >= 0 ? val : 0;
            update();
        }
        return this;
    });

    self.__defineGetter__('y', function() {
        return scale;
    });
    self.__defineSetter__('y', function (val) {
        if (y !== val) {
            y = val >= 0 ? val : 0;
            update();
        }
        return this;
    });

    self.__defineGetter__('width', function() {
        return width;
    });
    self.__defineSetter__('width', function (val) {
        if (width !== val) {
            width = val;
            dimensionsChange = true;
            update();
        }
        return this;
    });

    self.__defineGetter__('height', function() {
        return scale;
    });
    self.__defineSetter__('height', function (val) {
        if (height !== val) {
            height = val;
            dimensionsChange = true;
            update();
        }
        return this;
    });

    self.__defineGetter__('bgWidth', function() {
        return bgWidth;
    });
    self.__defineSetter__('bgWidth', function (val) {
        if (bgWidth !== val) {
            bgWidth = val;
            dimensionsChange = true;
            update();
        }
        return this;
    });

    self.__defineGetter__('bgHeight', function() {
        return scale;
    });
    self.__defineSetter__('bgHeight', function (val) {
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
        outline.style.left = width * scale + x + 'px';
        outline.style.top = y + 'px';
        outline.style.width = width + 'px';
        outline.style.height = height + 'px';
    }

    function onImageLoad() {
        console.log("onImageLoad");
        bgWidth = this.width;
        bgHeight = this.height;

        srcCanvas.style.left = width * scale + 'px';
        srcCanvas.width = bgWidth;
        srcCanvas.height = bgHeight;
        srcCtx.drawImage(this, 0, 0);
        var srcData = srcCtx.getImageData(0, 0, bgWidth, bgHeight).data;

        destCanvas.width = width * scale;
        destCanvas.height = height * scale;
        destCtx.clearRect(0, 0, width * scale, height * scale);
        imgData = {src:srcData, ox:x, oy:y, offset:0};
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
                    return;// exit. We have rendered enough.
                }
            }
            data.y += 1;
//            copyPixels(data);
//            setTimeout(copyPixels, 0, data);
//            console.log(data.offset + " / " + (width * height * 4)); // 4 for rgba.
//            break;
        }
    }

    function drawPixel(data) {
        var r = data.src[data.offset++];
        var g = data.src[data.offset++];
        var b = data.src[data.offset++];
        var a = data.src[data.offset++] / 100.0;
        if (data.y >= data.oy && data.y < data.oy + height && data.x >= data.ox && data.x < data.ox + width) {
            destCtx.fillStyle = 'rgba(' + [r, g, b, a].join(',') + ')';
            destCtx.fillRect((data.x - data.ox) * scale, (data.y - data.oy) * scale, scale, scale);
        }
        if (data.x > data.ox + width && data.y > data.oy + height) {
            data.offset = -1;
        }
    }

    function drawGrid() {
        // now update the grid.
        grid.width = width * scale;
        grid.height = height * scale;
        gridCtx.clearRect(0, 0, width * scale, height * scale);

        var w = 0, h = 0;
        while (w < width) {
            gridCtx.beginPath();
            gridCtx.moveTo(w * scale - 0.5, 0);
            gridCtx.lineTo(w * scale - 0.5, height * scale);
            gridCtx.lineWidth = 0.5;
            gridCtx.strokeStyle = w % 10 === 0 ? '#000' : '#CCC';
            gridCtx.stroke();
            w += 1;
        }
        while (h < height) {
            gridCtx.beginPath();
            gridCtx.moveTo(0, h * scale - 0.5);
            gridCtx.lineTo(width * scale, h * scale - 0.5);
            gridCtx.lineWidth = 0.5;
            gridCtx.strokeStyle = h % 10 === 0 ? '#000' : '#CCC';
            gridCtx.stroke();
            h += 1;
        }
    }

    self.init = init;
};