var images = [
    'seq/hearts_00000.png', 
    'seq/hearts_00001.png', 
    'seq/hearts_00002.png', 
    'seq/hearts_00003.png', 
    'seq/hearts_00004.png'
];

var canvasArr = [];


var w = window.innerWidth;
var h = window.innerHeight;
var steps = images.length;
var stepWidth = 5;

var fg = document.getElementById('canvas-foreground');
var bg = document.getElementById('canvas-background');

bg.width = fg.width = w;
bg.height = fg.height = h;

var fgCtx = fg.getContext('2d');
var bgCtx = bg.getContext('2d');

fgCtx.fillStyle = "rgb(0,0,0)";


for (var j = 0, stepSize = steps * stepWidth; j < w; j += stepSize) {
    fgCtx.fillRect(j, 0, (steps - 1) * stepWidth, h);
}

var loaded = 0;
for (var i = 0; i < steps; i++) {
    
    var bgImage = new Image();
    
    bgImage.onload = function() {
        var tempCanvas = document.createElement('canvas');
        tempCanvas.width = w;
        tempCanvas.height = h;
        var ctx = tempCanvas.getContext('2d');
        var _i = i, _bgImage = bgImage;
        
        return function(d) {
            ctx.drawImage(_bgImage, 0, 0, _bgImage.width, _bgImage.height);
            canvasArr[_i] = tempCanvas;
            
            if (++loaded == steps) {
                draw();
            }
        }
    }();
    bgImage.src = images[i];
}


function draw() {
    for (var j = 0; j < w; j += stepWidth) {
        bgCtx.drawImage(canvasArr[(j / stepWidth) % steps], 
        j, 0, stepWidth, h, 
        j, 0, stepWidth, h);
    }

}

Draggable.create(fg, {type: "x",liveSnap: true,edgeResistance: 0.5,throwProps: true,bounds: window,
    snap:{
        x: function(endValue) {
        return Math.round(endValue/5 / stepWidth) * stepWidth;
    }}
});
