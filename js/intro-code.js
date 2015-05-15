CodeAnim = function() {
    var count = 0;
    var maxCount = window.isMobile ? 2 : 6;
    var glitchParent = $('.main-pane.right-pane');
    var glitchElem = $('.main-pane.right-pane>table');
    var glitchCount = 0;
    var _canvas = null;
    var _overlayCanvas = null;
    var that = this;
    
    var glitchImgDataArray = new Array(maxCount);
    
    function startTimer2() {
        var i = 0;
        var ctx = _canvas.getContext('2d');

        
        timer2 = setInterval(function() {
            if (i == maxCount) {
                glitchParent.find('canvas').hide();
                clearInterval(timer2);
                return;
            } else if(i == 0){
                glitchParent.find('canvas').show();
            }
            
            ctx.putImageData(glitchImgDataArray[i++], 0, 0);
        }, 30)
    
    }
    
    function glitchIt(count, callback) {
        var imgData;
        html2canvas(glitchElem, {onrendered: function(canvas) {
                var w = canvas.width, h = canvas.height;
                
                for (var i = 0; i < maxCount; i++) {
                    glitchImgDataArray[i] = glitch.glitchImage(canvas, (maxCount - count) / maxCount * 4 + 1);
                }
                
                $(canvas).addClass('glitch-canvas').hide();
                _canvas = canvas;
                
                _overlayCanvas = $('<canvas>').attr({width: w, height: h}).addClass('overlay-canvas').hide();
                var ctx = _overlayCanvas[0].getContext('2d');
                ctx.fillStyle = "rgb(10,10,10)";
                for (j = 0; j < h; j += 2) {
                    ctx.fillRect (0, j, w, 1);
                }

                glitchParent.append(_canvas);
                glitchParent.append(_overlayCanvas);
                
                callback();
            }});
    
    }
    
    
    return {
        init: function(callback) {
            callback = callback ? callback : function() {};
            glitchIt(0, callback);
        },
        start: function() {
            startTimer2();
            setTimeout(startTimer2, 1600);
        }
    }

}