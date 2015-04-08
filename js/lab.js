Lab = function($, TweenMax) {
    var animDuration = 1;
    var ease = Power4.easeInOut;
    var currentLabNum = 0;
    var parser = new URLParser({convert: false});
    
    $(window).on('lab-enter', function() {
        loadLab(currentLabNum);
    })
    
    var iconAttr = {
        image: {class: 'icon-image-outline',title: 'Image'},
        src: {class: 'icon-code-outline',title: 'Source Code'},
        doc: {class: 'icon-document-text',title: 'Article'},
        video: {class: 'icon-film',title: 'Video'}
    }
    
    var labs = CV.labs;
    
    $('#lab a[href="#lab-next"]').click(function(e) {
        e.preventDefault();
        if (++currentLabNum == labs.length)
            currentLabNum = 0;
        loadLab(currentLabNum, +1);
    });
    
    $('#lab a[href="#lab-prev"]').click(function(e) {
        e.preventDefault();
        if (--currentLabNum == -1)
            currentLabNum = labs.length - 1;
        loadLab(currentLabNum, -1);
    });
    
    function assignContent(currentLab, dir) {
        var width = $('#lab .menu').width() * (-dir);
        var container = $('#lab .menu-body');
        
        TweenMax.to(container, 1, {x: width,opacity: 0,ease: Power4.easeInOut,onComplete: function() {
                
                var diff = currentLab.difficulty;
                
                $('#lab .lab-title').text(currentLab.name);
                $('#lab-description').html(currentLab.description)
                
                
                $('#lab-tags').empty();
                currentLab.tags.forEach(function(d) {
                    $('#lab-tags').append($('<li>').text(d));
                });
                
                $('#lab-reflist').empty();
                currentLab.refs.forEach(function(d, i) {
                    $('#lab-reflist').append($('<li>').append(
                    $('<span>').addClass(iconAttr[d.type].class).attr('title', iconAttr[d.type].title), 
                    $('<a>').attr({href: d.url,target: '_blank'}).text(parser.parse(d.url).host)
                    ));
                });

                TweenMax.fromTo(container, 1, {opacity: 0,x: -width}, {opacity: 1,x: 0,delay: 0.1,ease: Power4.easeInOut, onComplete: function(){
                    d3.select('#lab-difficulty-mask').animate().attr({width: (111 - 4 * 4) * diff / 5 + parseInt(diff) * 4});
                }});

            }
        });
    
    
    }
    
    
    function loadLab(i, dir) {
        var currentLab = labs[i];
        
        $('#lab-background').remove();
        var img = $('<img>').appendTo('#lab')
        .attr({
            src: currentLab.backgroundLink,
            id: 'lab-background',
            height: $('#lab-foreground').height(),
        })
        .load(function() {
            var offset = parseInt(($('#lab-foreground').width() - $('#lab-background').width()) / 2);
            
            $('#lab-foreground-img').attr({src: currentLab.backgroundLink}).css({left: offset})
            
            img.attr({
                'data-offset-left': offset,
                'data-offset-top': 0,
            });
            
            $('#lab-background')[0].closePixelate([
                {shape: 'diamond',resolution: 12,size: 12}, 
                {shape: 'diamond',resolution: 12,offset: 6}, 
                {resolution: 12,alpha: 0.5}]
            );
        });
        
        $('#lab-foreground').find('a').attr('href', currentLab.url)
        
        assignContent(currentLab, dir);
    
    }


}
