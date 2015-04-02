
//WORKS

function Works() {
    
    var card = $("#works .card");
    var background = $("#works .background");
    var loading = true;
    var ax = 0, ay = 0;
    
    var currentWorkNum = 0;
    
    TweenMax.to(card, 0, {rotationX: 0,rotationY: 179});
    TweenMax.to(background, 1, {opacity: 0})
    
    $(window).on('works-enter', function() {
        toFront();
    });
    
    function toFront() {
        TweenMax.fromTo(card, 1, {transform: card.css('transform')}, {rotationX: ax + "cw",rotationY: (360 + ay) + "cw",ease: Power4.easeInOut,onComplete: function() {
                loading = false;
            }});
        
        TweenMax.to(background, 1, {opacity: 1,ease: Power4.easeInOut})
    }
    
    function toBack(callback) {
        TweenMax.fromTo(card, 1, {transform: card.css('transform')}, {rotationX: 0,rotationY: 180,ease: Power4.easeInOut,onComplete: callback});
        TweenMax.to(background, 1, {opacity: 0,ease: Power4.easeInOut})
        loading = true;
    }
    
    $('#works .works-nav a[href="#works-next"]').on('click', function(e) {
        e.preventDefault();
        if (loading)
            return;
        
        if (++currentWorkNum == projects.length)
            currentWorkNum = 0;
        
        loadProject(currentWorkNum, +1);
    });
    
    $('#works .works-nav a[href="#works-prev"]').on('click', function(e) {
        e.preventDefault();
        if (loading)
            return;
        
        if (--currentWorkNum == -1)
            currentWorkNum = projects.length - 1;
        
        loadProject(currentWorkNum, -1);
    });

    /*$('#works').on('click', function(){
        if(loading){
            TweenMax.fromTo($("#works .card"), 1,{transform: $("#works .card").css('transform')}, { rotationX: ax+"cw", rotationY: (360+ay)+"cw", ease: Power4.easeInOut, onComplete:function(){
                loading = false;
            }});
        }else{
            TweenMax.fromTo($("#works .card"), 1,{transform: $("#works .card").css('transform')}, { rotationX: 0,  rotationY: 180, ease: Power4.easeInOut});
            loading = true;
        }
        //TweenMax.to(card, 3, {rotationY:360, ease: Power1.easeInOut, overwrite:"all"})
    });*/
    
    $('#works').on("mousemove", function(e) {
        ay = -($('#works').innerWidth() / 2 - e.clientX) / 20;
        ax = ($('#works').innerHeight() / 2 - e.clientY) / 10;
        if (loading)
            return;
        TweenMax.to(card, 0, {rotationX: ax,rotationY: ay})

        //card.attr("style", "transform: rotateY(" + ay + "deg) rotateX(" + ax + "deg);");
        e.preventDefault();
    });
    
    var projects = [
        {
            name: 'Disap',
            description: 'A Social Media Analitics web app built on custom developed module system to ensure high performance and stability.',
            timeSpent: 1200,
            startDate: 'Nov 2013',
            endDate: 'May 2014',
            tags: ['PHP', 'MySQL', 'Elasticsearch', 'jQuery', 'Angular.js', 'Bootstrap', 'Custom Modules', 'SVG', 'Canvas', 'Leaflet', 'Highcharts', 'Twitter API', 'D3.js', 'Google Maps', 'Slickgrid'],
            backgroundLink: 'img/works/disap-icon-blur.png',
            foregroundLink: 'img/works/disap.png',
            positions: [
                {
                    left: 0,
                    top: 0,
                    width: 900,
                    height: 600,
                    backgroundY: 0,
                    backgroundX: 0
                }, 
                {
                    left: 284,
                    top: 111,
                    width: 473,
                    height: 48,
                    backgroundX: -175,
                    backgroundY: -918,
                    z: 30
                }, 
                {
                    left: 7,
                    top: 39,
                    width: 136,
                    height: 453,
                    backgroundX: -10,
                    backgroundY: -625,
                    z: 40
                }, {
                    left: 163,
                    top: 66,
                    width: 717,
                    height: 38,
                    backgroundX: -173,
                    backgroundY: -1268,
                    z: 30
                }, {
                    left: 163,
                    top: 168,
                    width: 715,
                    height: 283,
                    backgroundX: -175,
                    backgroundY: -975,
                    z: 50
                },  //green
                {
                    left: 225,
                    top: 179,
                    width: 619,
                    height: 240,
                    backgroundX: -175,
                    backgroundY: -1321,
                    z: 60
                },  //yellow
                {
                    left: 188,
                    top: 194,
                    width: 650,
                    height: 218,
                    backgroundX: -173,
                    backgroundY: -1579,
                    z: 80
                },  //red
                {
                    left: 345,
                    top: 247,
                    width: 493,
                    height: 177,
                    backgroundX: -173,
                    backgroundY: -1812,
                    z: 100
                }, {
                    left: 163,
                    top: 460,
                    width: 715,
                    height: 142,
                    backgroundX: -175,
                    backgroundY: -625,
                    z: 30
                }
            ],
            backgroundImg: null,
            foregroundImg: null
        }, 
        {
            name: 'Sorate',
            description: 'An innovative hybrid web application which gathers and relates Twitter vs TV Ratings data.',
            timeSpent: 1000,
            startDate: 'Jun 2013',
            endDate: 'Oct 2014',
            tags: ['PHP', 'MySQL', 'jQuery', 'jQuery UI', 'Custom Modules', 'SVG', 'Canvas', 'Highcharts', 'Twitter API', 'D3.js', 'Transit.js'],
            backgroundLink: 'img/works/sorate-icon-blur.png',
            foregroundLink: 'img/works/sorate.png',
            positions: [
                {
                    left: 0,
                    top: 0,
                    width: 900,
                    height: 600,
                    backgroundY: 0,
                    backgroundX: 0
                }, 
                {
                    left: 2,
                    top: 47,
                    width: 104,
                    height: 527,
                    backgroundX: 0,
                    backgroundY: -612,
                    z: 40
                }, 
                {
                    left: 102,
                    top: 45,
                    width: 794,
                    height: 47,
                    backgroundX: -106,
                    backgroundY: -612,
                    z: 20
                }, 
                {
                    left: 857,
                    top: 50,
                    width: 33,
                    height: 42,
                    backgroundX: -109,
                    backgroundY: -664,
                    z: 40
                }, 
                {
                    left: 168,
                    top: 98,
                    width: 220,
                    height: 220,
                    backgroundX: -142,
                    backgroundY: -665,
                    z: 40
                }, 
                {
                    left: 388,
                    top: 99,
                    width: 220,
                    height: 220,
                    backgroundX: -358,
                    backgroundY: -665,
                    z: 60
                }, 
                {
                    left: 607,
                    top: 98,
                    width: 220,
                    height: 440,
                    backgroundX: -575,
                    backgroundY: -665,
                    z: 80
                }, 
                {
                    left: 166,
                    top: 319,
                    width: 440,
                    height: 220,
                    backgroundX: -141,
                    backgroundY: -879,
                    z: 100
                }, 
                {
                    left: 10,
                    top: 8,
                    width: 122,
                    height: 32,
                    backgroundX: -158,
                    backgroundY: -1104,
                    z: 40
                }
            ]
        }, {
            name: 'Eksenlive',
            description: 'First and unique Live TV Rating Measurement Platform in the world. It measures rating of more than 200 channels in realtime and provides live video streaming.',
            timeSpent: 1440,
            startDate: 'Jun 2012',
            endDate: 'Jan 2013',
            tags: ['PHP', 'MySQL', 'jQuery', 'Flotcharts', 'Highcharts', 'Video Streaming', 'Realtime'],
            backgroundLink: 'img/works/eksenlive-icon-blur.png',
            foregroundLink: 'img/works/eksenlive.png',
            positions: [
                {
                    left: 0,
                    top: 0,
                    width: 900,
                    height: 600,
                    backgroundX: 0,
                    backgroundY: 0
                }, {
                    left: 177,
                    top: 223,
                    width: 565,
                    height: 29,
                    backgroundX: -2,
                    backgroundY: -603,
                    z: 40
                }, {
                    left: 85,
                    top: 85,
                    width: 752,
                    height: 130,
                    backgroundX: 0,
                    backgroundY: -633,
                    z: 20
                }, {
                    left: 178,
                    top: 251,
                    width: 565,
                    height: 14,
                    backgroundX: -1,
                    backgroundY: -769,
                    z: 30
                }, {
                    left: 178,
                    top: 280,
                    width: 565,
                    height: 16,
                    backgroundX: -1,
                    backgroundY: -783,
                    z: 30
                }, {
                    left: 186,
                    top: 328,
                    width: 213,
                    height: 202,
                    backgroundX: -3,
                    backgroundY: -811,
                    z: 100
                }, {
                    left: 397,
                    top: 389,
                    width: 187,
                    height: 139,
                    backgroundX: -216,
                    backgroundY: -874,
                    z: 80
                }, {
                    left: 582,
                    top: 439,
                    width: 183,
                    height: 89,
                    backgroundX: -403,
                    backgroundY: -924,
                    z: 60
                }
            ]
        }, {
            name: 'Eksenplus',
            description: 'An experimental but unique web app which analyses previous and current status of any TV program and predicts the rating the future episodes. In addition, the app provides the reason why rating mesurement increased or decreased.',
            timeSpent: 480,
            startDate: 'Feb 2013',
            endDate: 'Apr 2013',
            tags: ['PHP', 'jQuery', 'SVG', 'Canvas', 'Highcharts', 'Twitter API', 'D3.js', 'Swiper'],
            backgroundLink: 'img/works/eksenplus-icon-blur.png',
            foregroundLink: 'img/works/eksenplus.png',
            positions: [
                {
                    left: 0,
                    top: 0,
                    width: 900,
                    height: 600,
                    backgroundX: 0,
                    backgroundY: 0
                }, {
                    left: 799,
                    top: 387,
                    width: 70,
                    height: 22,
                    backgroundX: -820,
                    backgroundY: -606,
                    z: 10
                }, {
                    left: 0,
                    top: 75,
                    width: 585,
                    height: 502,
                    backgroundX: -0,
                    backgroundY: -1058,
                    z: 20
                }, {
                    left: 12,
                    top: 83,
                    width: 585,
                    height: 502,
                    backgroundX: -0,
                    backgroundY: -600,
                    z: 40
                }, {
                    left: 29,
                    top: 104,
                    width: 585,
                    height: 473,
                    backgroundX: -0,
                    backgroundY: -1568,
                    z: 70
                }, {
                    left: 0,
                    top: 80,
                    width: 585,
                    height: 473,
                    backgroundX: -314,
                    backgroundY: -2026,
                    z: 130
                }
            ]
        }, {
            name: 'H**** S****',
            description: 'An upcoming web experiment which involves WebGL visualization and WebAudio signal processing. I and <a href="https://twitter.com/ademilter" target="_blank">@ademilter</a> collabrated on the frontend side.',
            timeSpent: 180,
            startDate: 'Feb 2015',
            endDate: 'Mar 2015',
            tags: ['WebGL', 'WebAudio API', 'jQuery', 'Polyfills'],
            backgroundLink: 'img/works/vdf-icon-blur.png',
            foregroundLink: 'img/works/vdf.png',
            positions: [
                {
                    left: 0,
                    top: 0,
                    width: 900,
                    height: 600,
                    backgroundX: 0,
                    backgroundY: 0
                }, {
                    left: 0,
                    top: 505,
                    width: 900,
                    height: 65,
                    backgroundX: -0,
                    backgroundY: -600,
                    z: 20
                }, {
                    left: 722,
                    top: 520,
                    width: 111,
                    height: 31,
                    backgroundX: 0,
                    backgroundY: -665,
                    z: 40
                }, {
                    left: 13,
                    top: 445,
                    width: 216,
                    height: 45,
                    backgroundX: -114,
                    backgroundY: -665,
                    z: 20
                }, {
                    left: 0,
                    top: 60,
                    width: 896,
                    height: 473,
                    backgroundX: 0,
                    backgroundY: -730,
                    z: 100
                }, {
                    left: 201,
                    top: 66,
                    width: 498,
                    height: 473,
                    backgroundX: 0,
                    backgroundY: -1212,
                    z: 70
                }, {
                    left: 260,
                    top: 113,
                    width: 381,
                    height: 379,
                    backgroundX: -520,
                    backgroundY: -1216,
                    z: 40
                }, {
                    left: 318,
                    top: 170,
                    width: 259,
                    height: 255,
                    backgroundX: -639,
                    backgroundY: -1600,
                    z: 10
                }, {
                    left: 204,
                    top: 102,
                    width: 490,
                    height: 394,
                    backgroundX: -0,
                    backgroundY: -1685,
                    z: 140
                }, {
                    left: 87,
                    top: 412,
                    width: 723,
                    height: 86,
                    backgroundX: -178,
                    backgroundY: -2157,
                    z: 160
                }
            ]
        }, {
            name: 'T****',
            description: 'Ongoing personal project which I\'m doing in my spare time. It will be an anonymous chat application and will be released in iOS platform. ',
            timeSpent: 100,
            startDate: 'Jan 2015',
            endDate: '-',
            tags: ['Swift', 'Node.js', 'Socket.io', 'Realtime'],
            backgroundLink: 'img/works/tickr-icon-blur.png',
            foregroundLink: 'img/works/tickr.png',
            positions: [
                {
                    left: 0,
                    top: 0,
                    width: 900,
                    height: 600,
                    backgroundX: 0,
                    backgroundY: 0
                }, {
                    left: 344,
                    top: 19,
                    width: 474,
                    height: 568,
                    backgroundX: 0,
                    backgroundY: -600,
                    z: 120
                }, {
                    left: 207,
                    top: 86,
                    width: 487,
                    height: 103,
                    backgroundX: 0,
                    backgroundY: -1168,
                    z: 140
                }, {
                    left: 339,
                    top: 289,
                    width: 224,
                    height: 224,
                    backgroundX: -477,
                    backgroundY: -603,
                    z: 150
                }, {
                    left: 76,
                    top: 20,
                    width: 527,
                    height: 580,
                    backgroundX: 0,
                    backgroundY: -1271,
                    z: 90
                }, {
                    left: 274,
                    top: 9,
                    width: 468,
                    height: 587,
                    backgroundX: 0,
                    backgroundY: -1851,
                    z: 60
                }, {
                    left: 0,
                    top: 0,
                    width: 521,
                    height: 600,
                    backgroundX: -379,
                    backgroundY: -2400,
                    z: 30
                }
            ]
        }, {
            name: 'More?',
            description: 'Of course there is more, <a href="#contact">contact</a> me if you are interested.',
            timeSpent: 1,
            startDate: 'Jan 2015',
            endDate: '',
            tags: ['...'],
            backgroundLink: 'img/works/more-icon-blur.png',
            foregroundLink: 'img/works/more.png',
            positions: [
                {
                    left: 0,
                    top: 0,
                    width: 900,
                    height: 600,
                    backgroundX: 0,
                    backgroundY: 0
                }, {
                    left: 378,
                    top: 80,
                    width: 144,
                    height: 393,
                    backgroundX: 0,
                    backgroundY: -600,
                    z: 20
                }, {
                    left: 378,
                    top: 80,
                    width: 144,
                    height: 393,
                    backgroundX: 0,
                    backgroundY: -600,
                    z: 20
                }, {
                    left: 378,
                    top: 80,
                    width: 144,
                    height: 393,
                    backgroundX: 0,
                    backgroundY: -600,
                    z: 21
                }, {
                    left: 378,
                    top: 80,
                    width: 144,
                    height: 393,
                    backgroundX: 0,
                    backgroundY: -600,
                    z: 22
                }, {
                    left: 378,
                    top: 80,
                    width: 144,
                    height: 393,
                    backgroundX: 0,
                    backgroundY: -600,
                    z: 23
                }, {
                    left: 378,
                    top: 80,
                    width: 144,
                    height: 393,
                    backgroundX: 0,
                    backgroundY: -600,
                    z: 24
                }, {
                    left: 378,
                    top: 80,
                    width: 144,
                    height: 393,
                    backgroundX: 0,
                    backgroundY: -600,
                    z: 25
                }
                
            ]
        }
    ];
    
    function assignContent(project, dir) {
        var width = $('#works .menu').width()*(-dir);
        var container = $('#works .menu-body');

        TweenMax.to(container, 1, {x: width, opacity: 0,  ease: Power4.easeInOut, onComplete: function() {
                $('#works .works-title').text(project.name);
                $('#works-description').html(project.description);
                
                $('#works-date').text(project.startDate + ' - ' + project.endDate);
                
                $('#works-coffee').empty();
                var litres = Math.ceil(project.timeSpent / 8 * 0.200);
                for (var i = 0; i < litres; i++) {
                    $('#works-coffee').append($('<span>').addClass('icon-coffee'));
                }
                
                $('#works-litres').text(litres);
                
                $('#works-tags').empty();
                project.tags.forEach(function(d) {
                    $('#works-tags').append($('<li>').text(d));
                });

                TweenMax.fromTo(container, 1, {opacity: 0, x: -width}, {opacity: 1, x:0, delay: 0.1, ease: Power4.easeInOut});
            }
        })
    
    
    }
    
    function loadProject(i, dir) {
        var project = projects[i];
        if (!project) 
        {
            console.log('Wrong project id');
            return;
        }

        assignContent(project, dir);
        
        toBack(function() {
            
            setPositions(project);
            
            setTimeout(toFront, 100);
        
        });
    
    }
    
    function setPositions(project) {
        background.css({
            'background-image': 'url("' + project.backgroundLink + '")'
        });
        
        card.empty();
        
        project.positions.forEach(function(d, i) {
            card.append(
            $('<div>').css({
                left: d.left + 'px',
                top: d.top + 'px',
                width: d.width + 'px',
                height: d.height + 'px',
                'background-position': d.backgroundX + 'px ' + d.backgroundY + 'px',
                transform: d.z ? 'translateZ(' + d.z + 'px)' : 'none',
                'background-image': 'url("' + project.foregroundLink + '")'
            })
            );
        });
    }
    
    assignContent(projects[0], 1);
    setPositions(projects[0]);
    toBack();
}
