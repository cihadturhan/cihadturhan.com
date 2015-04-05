CodeAnim = function() {
    var count = 0;
    var maxCount = 6;
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
        }, 50)
    
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
            callback = callback ? callback : function() {
            };
            glitchIt(0, callback);
        },
        start: function() {
            startTimer2();
            setTimeout(startTimer2, 1600);
        }
    }

}

_CodeAnim = (function($) {
    
    var myObj = {};
    var iterationList = [];
    var maxIteration = 2;
    var textDuration = 4000;
    var noDelay = true;
    
    var newObj = {};
    
    
    $('.js-file-line-container').find('td').each(function(i) {
        var elem = $(this);
        setTimeout(function() {
            elem.css({
                opacity: 1
            });
        }, i * 30)
    });
    
    $('.js-file-line-container>tbody>tr>td').each(function(i) {
        var id = $(this).attr('id');
        myObj[id] = this.childNodes;
    });
    
    console.log(+new Date)
    
    var firstIteration = {};
    for (var key in myObj) {
        
        
        var nodeTexts = Array.prototype.reduce.call(myObj[key], function(p, c, i) {
            p[i] = c.textContent;
            return p
        }, {});
        firstIteration[key] = [];
        
        for (var j in nodeTexts) {
            firstIteration[key][j] = nodeTexts[j];
        }
        
        
        newObj[key] = {
            entropy: Entropy.watch(nodeTexts, 3)
        };
    }
    
    iterationList.push(firstIteration);
    
    for (var i = 0; i < maxIteration; i++) {
        var currIteration = {};
        for (var key in newObj) {
            currIteration[key] = [];
            for (var j in newObj[key].entropy) {
                currIteration[key][j] = newObj[key].entropy[j];
            }
        }
        iterationList.push(currIteration);
    }
    
    var count = maxIteration - 1;
    changeCode(count--);
    noDelay = false;
    
    var timer = setInterval(function() {
        
        if (count < 0) {
            clearInterval(timer);
            return;
        }
        
        changeCode(count);
        count--;
    
    }, textDuration);
    
    function changeLine(c, id, that) {
        if (noDelay) {
            for (var i = 0; i < that.childNodes.length; i++) {
                that.childNodes[i].textContent = iterationList[c][id][i];
            }
        } else {
            setTimeout(function() {
                for (var i = 0; i < that.childNodes.length; i++) {
                    that.childNodes[i].textContent = iterationList[c][id][i];
                }
            }, ~~(Math.random() * textDuration))
        }
    }
    
    function changeCode(count) {
        $('.js-file-line-container>tbody>tr>td').each(function(index) {
            var id = $(this).attr('id');
            var that = this;
            changeLine(count, id, that)
        });
    }
    
    console.log(+new Date)

});


IntroTextAnim = function() {
    setTimeout(function() {
        $(".overlay").css('display', 'block');
        $(".overlay").css('display');
        $(".overlay").css({opacity: 1})
    }, 4000)
}
