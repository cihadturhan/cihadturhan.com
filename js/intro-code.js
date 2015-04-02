CodeAnim = function() {
    var count = 0;
    var maxCount = 6;
    var glitchParent = $('.main-pane.right-pane');
    var glitchElem = $('.main-pane.right-pane>table');
    var glitchCount = 0;
    
    function startTimer2() {
        var i = 0;
        
        glitchElem.hide();
        
        timer2 = setInterval(function() {
            glitchParent.find('canvas').hide();
            
            if (i == glitchParent.find('canvas').length) {
                clearInterval(timer2);
                glitchElem.show();
                return;
            }
            
            glitchParent.find('canvas:eq(' + i++ + ')').show();
        }, 32)
    
    }
    ;
    
    function glitchIt(count, callback) {
        if (count > maxCount) {
            callback();
            return;
        }
        
        glitchElem.glitch({
            amount: (maxCount - count) / maxCount * 4 + 1,
            complete: function(canvas) {
                console.log(+new Date(), count);
                canvas.style.display = "none";
                glitchParent.append(canvas);
                glitchIt(++count, callback)
                
            }
        });
    
    }
    
    return {
        init: function(callback) {
            callback = callback ? callback : function(){};
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
    })

    /*setTimeout(function() {
        $('.overlay').css({
            opacity: 0.9
        })
    }, 2000)*/
    
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
