 //TO-DO Make it thiefproof

function adjustEditor(editor) {
    
    editor.setHighlightActiveLine(false);
    editor.setShowPrintMargin(false);
    editor.setReadOnly(true); // false to make it editable
    editor.setTheme("ace/theme/github");
    editor.renderer.setShowGutter(false);
    editor.getSession().setMode("ace/mode/javascript");
    editor.session.selection.clearSelection();
    editor.setBehavioursEnabled(false)
    editor.renderer.setStyle("disabled", true);
    editor.setOption("dragEnabled", false);
    editor.blur();

}

function greetings() {
    console.log('୧༼ ͡◉ل͜ ͡◉༽୨');
    console.log('Hello!');
    console.log('Are you here for the source code?');
    console.log('Don\'t waste your time digging minified code.');
    console.log('Just send mail to contact@cihadturhan.com. I\'ll send you finished version.');
    console.log('Have a nice day. Cheers');

//TO-DO uncomment
/*for(var key in console){
        console[key] = function(){};
    }*/

}

d3.selection.prototype.animate = function(opts) {
    !opts && (opts = {})
    var dur = opts.duration ? opts.duration : 1500;
    var ease = opts.ease ? opts.ease : d3.ease('exp-out');
    var delay = opts.delay ? opts.delay : 0;
    delete opts.duration;
    var t = this.transition().ease(ease).duration(dur).delay(delay);
    return t;
};

function initListeners() {
    $w = $(window);
    $(window).on('about-enter', About);
    $(window).on('contact-enter', Contact);

}

function freeScroll() {
   
   $('.full-wh').on('scrollSpy:enter', function() {
        $(this).css('visibility', 'visible');
    });

    $('.full-wh').on('scrollSpy:exit', function() {
        $(this).css('visibility', 'hidden');
    });

    $('.full-wh').scrollSpy();


    TweenMax.to($('header'), 1, {y: 0, ease: Power4.easeOut});
    TweenMax.to($('#main .full-wh-footer'), 1, {y: 0, ease: Power4.easeOut});
    $('html').removeClass('no-scroll')

    var $window = $(window); //Window object
    var timer = null;
    
    var scrollTime = 0.3; //Scroll time
    var scrollDistance = 300; //Distance. Use smaller value for shorter scroll and greater value for longer scroll
    var scrollDistanceMac = 60;
    var snapTime = 0.9;
    
    var sections = [];
    
    $('body>.full-wh').each(function() {
        sections.push({
            top: $(this).position().top,
            height: $(this).height(),
            el: $(this)
        });
    });
    
    var maxScroll = sections[1].top;
    
    $window.on("scroll", function() {
        var scrollTop = $window.scrollTop();
        var height = $(window).height();
        var totalHeight = $('body').height() - height;
        var percent = scrollTop / totalHeight;
        var width = $('#fake-nav').width();
        var navLeft = percent * width * 6 - width;
        
        TweenMax.to($('#fake-nav'), 0, {x: navLeft});
        TweenMax.to($('#fake-nav>ul'), 0, {x: -navLeft});
        
        for (var i = 0, d; i < sections.length; i++) {
            d = sections[i];
            
            if (scrollTop + height > maxScroll && scrollTop + height > d.top + d.height * 0.50 && scrollTop + height < (d.top + d.height)) {
                
                $window.trigger(d.el.attr('id') + '-enter')
                console.log(d.el.attr('id') + '-enter');
                
                maxScroll = d.top + d.height;
                
                break;
            }
        }
        
        if (scrollTop > maxScroll) {
            maxScroll = scrollTop + height;
        }
    });
    
    
    $window.on("mousewheel DOMMouseScroll", function(event) {

        var delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
        var scrollTop = $window.scrollTop();
        
        if (scrollTop <= $window.height() && delta > 0)
            return false;
        
        clearInterval(timer);
        timer = setTimeout(function() {
            var sTop = $window.scrollTop();
            var height = $window.height()
            var loc = Math.round(sTop / height);
            var snappedCoord = loc * height;
            
            TweenMax.to($window, snapTime, {
                scrollTo: {y: snappedCoord,autoKill: true},
                ease: Power1.easeOut,
                autoKill: true,
                overwrite: 5
            });
        
        }, 600);
        
        /*if (!isMac) {
            
            event.preventDefault();
            
            (finalScroll < $window.height()) && (finalScroll = $window.height())
            
            TweenMax.to($window, scrollTime, {
                scrollTo: {y: finalScroll,autoKill: true},
                ease: Power1.easeOut, //For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
                autoKill: true,
                overwrite: 5
            });
        
        } else {
            $(window).scrollTop(scrollTop - delta * scrollDistanceMac)
        }*/
    });

}
;



Portfolio = {
    start: function() {
        TweenMax.to($('header'), 0, {y: -$('header').height()});
        TweenMax.to($('#main .full-wh-footer'), 0, {y: $('#main .full-wh-footer').height()});
        $('header').show();
        $('#main .full-wh-footer').show();

        greetings(window);
        
        var _codeIntro = CodeAnim(jQuery);
        
        var _skills = Skills(window, jQuery);
        var _works = Works();
        var _lab = Lab(jQuery, TweenMax);
        
        _codeIntro.init(function() {
            
            var $window = $(window); //Window object
            var scrollTime = 1.2; //Scroll time
            var finalScroll = $(window).height();
            
            $('.btn-next, nav>ul>li>a').click(function(e) {
                e.preventDefault();
                var href = $(this).attr('href');
                $(window).trigger(href + '-click');
                var y = $(href).position().top;
                console.log(y);
                TweenMax.to($window, scrollTime, {
                    scrollTo: {y: y,autoKill: true},
                    ease: Strong.easeInOut,
                    autoKill: true,
                    overwrite: 5
                });
            });

            setTimeout(function(){
                HydrostatAnim(jQuery)
                IntroTextAnim(jQuery);
            }, scrollTime*1000)
            
            
            TweenMax.to($window, scrollTime, {
                scrollTo: {y: finalScroll,autoKill: true},
                ease: Strong.easeInOut, //For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
                autoKill: true,
                delay: 1,
                overwrite: 5,
                onComplete: function() {
                    $('#intro').css('visibility', 'hidden');
                    CodeAnim(jQuery);
                    setTimeout(_codeIntro.start, 2500);
                    setTimeout(freeScroll, 4000);
                    initListeners();
                }
            });
        });
    }
};
