function initListeners() {
    $w = $(window);
    
    $(window).on('hello-enter', Hello);
    $(window).on('contact-enter', Contact);

}

function scrollSpy() {
    var $window = $(window);
    
    $('.full-wh').on('scrollSpy:enter', function() {
        $(this).css('visibility', 'visible');
    });
    
    $('.full-wh').on('scrollSpy:exit', function() {
        $(this).css('visibility', 'hidden');
    });
    
    $('.full-wh').scrollSpy();
    
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
        var height = $window.height();
        var totalHeight = $('body').height() - height;
        var percent = scrollTop / totalHeight;
        var width = $('#fake-nav').width();
        var navLeft = percent * width * 7 - width;
        
        TweenMax.to($('#fake-nav'), 0, {x: navLeft});
        TweenMax.to($('#fake-nav>ul'), 0, {x: -navLeft});
        
        for (var i = 0, d; i < sections.length; i++) {
            d = sections[i];
            
            if (scrollTop + height > maxScroll && scrollTop + height > d.top + d.height * 0.50 && scrollTop + height < (d.top + d.height)) {
                
                $window.trigger(d.el.attr('id') + '-enter');
                
                maxScroll = d.top + d.height;
                
                break;
            }
        }
        
        if (scrollTop > maxScroll) {
            maxScroll = scrollTop + height;
        }
    });
}

function freeScroll() {
    
    TweenMax.to($('header'), 1, {y: 0,ease: Power4.easeOut});
    TweenMax.to($('#main .full-wh-footer'), 1, {y: 0,ease: Power4.easeOut});
    $('html').removeClass('no-scroll')
    
    var $window = $(window); //Window object
    var timer = null;
    
    var snapTime = 0.9;
    
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
    });

}



Portfolio = {

   
    start: function() {
        FastClick.attach(document.body);
        
        function welcome() {
            
            var $window = $(window); //Window object
            var scrollTime = 1.2; //Scroll time
            var finalScroll = $(window).height();
            
            $('.btn-next, nav>ul>li>a').click(function(e) {
                e.preventDefault();
                var href = $(this).attr('href');
                $window.trigger(href + '-click');
                var y = $(href).position().top;

                TweenMax.to($window, scrollTime, {
                    scrollTo: {y: y,autoKill: true},
                    ease: Strong.easeInOut,
                    autoKill: true,
                    overwrite: 5
                });
            });
            
            setTimeout(function() {
            
            }, scrollTime * 1000)
            
            
            TweenMax.to($window, scrollTime, {
                scrollTo: {y: finalScroll,autoKill: true},
                ease: Strong.easeInOut, //For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
                autoKill: true,
                delay: 1,
                overwrite: 5,
                onComplete: function() {
                    freeScroll();
                }
            });
        }
        
        initListeners();
        scrollSpy();
       
        TweenMax.to($('#main .full-wh-footer'), 0, {y: $('#main .full-wh-footer').height()});
        $('header').show();
        $('#main .full-wh-footer').show();

        welcome(); 
    
    }
};
