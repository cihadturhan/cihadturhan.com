var reader = new FileReader();
var images = [

];


function start() {
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
    images.forEach(function(img, i) {
        var tempCanvas = document.createElement('canvas');
        tempCanvas.width = w;
        tempCanvas.height = h;
        var ctx = tempCanvas.getContext('2d');
        
        ctx.drawImage(img, 0, 0, img.width, img.height);
        canvasArr[i] = tempCanvas;
    });
    
    draw();
    
    function draw() {
        for (var j = 0; j < w; j += stepWidth) {
            bgCtx.drawImage(canvasArr[(j / stepWidth) % steps], 
            j, 0, stepWidth, h, 
            j, 0, stepWidth, h);
        }
    
    }
    
    Draggable.create(fg, {type: "x",liveSnap: true,edgeResistance: 0.5,throwProps: true,bounds: window,
        snap: {
            x: function(endValue) {
                return Math.round(endValue / 5 / stepWidth) * stepWidth;
            }}
    });
}

function onDrop(e) {
    
    e.preventDefault();
    var $elem = $(e.target);
    var index = $elem.index();
    
    var file = e.dataTransfer.files[0];
    var img = new Image();
    var url;
    
    reader.readAsDataURL(file);
    reader.onload = function(ev) {
        url = ev.target.result;
        img.src = url;
        img.onload = function() {
            images[index] = this;
            console.log('Image ' + index + ' set');
            
            $elem
            .after($elem.removeClass('drop-active').clone())
            .css('background-image', 'url(' + url + ')')
        };
    };
}

function onDragOver(e) {
    e.preventDefault();
    $(e.target).addClass('drop-active')
}

function onDragLeave(e) {
    $(e.target).removeClass('drop-active')
}
