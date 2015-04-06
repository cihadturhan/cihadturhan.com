
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
    
    var projects = CV.works;
    
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
