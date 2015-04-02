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
    
    var labs = [{
            name: 'Hydrogen Atom',
            description: 'A WebGL experiment which visualizes probablity distribution of Hydrogen atom calculated by its wavefunction. To summarize, the probablity of an electron to be at a point depends on the density of the dots when the core of atom is placed at origin of the grid. Zoom in and out to see seperation of probablities.',
            difficulty: 4.5,
            tags: ['jQuery', 'Custom Modules', 'SVG', 'canvas', 'Leaflet', 'highcharts', 'twitter api', 'D3.js', 'Angular.js', 'Bootstrap'],
            backgroundLink: 'img/works/disap-icon-blur.png',
            refs: [
                {type: 'src',url: 'https://github.com/cihadturhan/h-prob-density'}, 
                {type: 'image',url: 'http://en.wikipedia.org/wiki/File:Hydrogen_Density_Plots.png'}, 
                {type: 'doc',url: 'http://physicsworld.com/cws/article/news/2013/may/23/quantum-microscope-peers-into-the-hydrogen-atom'}, 
            ],
            url: 'http://cihadturhan.github.io/h-prob-density/'
        }, 
        {
            name: 'Rating Analysis',
            description: 'A small side project made with D3 to visualize daily top 100 TV ratings ordered by AMR%.',
            difficulty: 3,
            tags: ['D3', 'TV', 'Rating'],
            backgroundLink: 'img/works/disap-icon-blur.png',
            refs: [
                {type: 'doc',url: 'http://sbtanaliz.com/news.php?nid=4'}
            ],
            url: '../sortedbars/'
        }, 
        {
            name: 'Gravional Lensing',
            description: 'A simple canvas demo to show how a supermassive blackhole warps the vision when it\'s floating in the space.  Here is a <a href="http://iopscience.iop.org/0264-9381/32/6/065001/pdf/0264-9381_32_6_065001.pdf" target="_blank"> an article (pdf) </a> if you are interested. Examine the images instead of reading boring long scientific stuff. <br/>It works slow in iframe so it\'s better to open in new tab to run smoothly.',
            difficulty: 2.5,
            tags: ['jQuery', 'Astronomy', 'Canvas', 'Image Processing'],
            backgroundLink: 'img/works/disap-icon-blur.png',
            refs: [
                {type: 'video',url: 'http://youtu.be/FCoxYlpJq9s?t=1m13s'}, 
                {type: 'image',url: 'http://upload.wikimedia.org/wikipedia/commons/d/d6/BlackHole_Lensing.gif'}
            ],
            url: '../Blackhole/gravitional-lensing/'
        }, 
        {
            name: 'Jquery Aim',
            description: 'A proof of concept that anticipates user intent in lieu of rollovers or clicks. See references for code and article',
            difficulty: 2.0,
            tags: ['jQuery', 'UX', 'Fitts\' Law'],
            backgroundLink: 'img/works/disap-icon-blur.png',
            refs: [
                {type: 'doc',url: 'https://medium.com/@cihadturhan/a-ux-idea-i-know-where-you-are-aiming-3e00d152afb2'}, 
                {type: 'src',url: 'https://github.com/cihadturhan/jquery-aim'}
            
            ],
            url: 'http://cihadturhan.github.io/jquery-aim/examples/dropdown.html'
        }
    ];
    
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
        
        TweenMax.to(container, 1, {x: width, opacity: 0, ease: Power4.easeInOut, onComplete: function() {
                
                var diff = currentLab.difficulty;
                
                $('#lab .lab-title').text(currentLab.name);
                $('#lab-description').html(currentLab.description)
                d3.select('#lab-difficulty-mask').animate().attr({width: (111 - 4 * 4) * diff / 5 + parseInt(diff) * 4});
                
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
                
                $('#lab-external').attr('href', currentLab.url);
                
                TweenMax.fromTo(container, 1, {opacity: 0, x: -width}, {opacity: 1, x: 0, delay: 0.1, ease: Power4.easeInOut});
            }
        });
    
    
    }
    
    
    function loadLab(i, dir) {
        var currentLab = labs[i];
        $('#lab>iframe').attr('src', currentLab.url);
        
        assignContent(currentLab, dir);
    
    }
    
    $('#lab a[href="#maximize"]').click(function() {
        
        if ($(this).hasClass('maximized')) {
            TweenMax.to($('header'), animDuration, {y: 0,ease: ease});
            TweenMax.to($('#lab .menu-right'), animDuration, {x: 0,ease: ease});
            TweenMax.to($('#lab .full-wh-footer'), animDuration, {y: 0,ease: ease});
            
            $(this).removeClass('maximized');
        } else {
            TweenMax.to($('header'), animDuration, {y: -$('header').height(),ease: ease});
            TweenMax.to($('#lab .menu-right'), animDuration, {x: +$('#lab .menu-right').width(),ease: ease});
            TweenMax.to($('#lab .full-wh-footer'), animDuration, {y: $('#lab .full-wh-footer').height(),ease: ease});
            $(this).addClass('maximized');
        }
    });


}
