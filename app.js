var intro = (function() {

    function hasWebGL() {
        //return false;
        try {
            return !!window.WebGLRenderingContext && !!document.createElement('canvas').getContext('experimental-webgl');
        } catch (e) {
            return false;
        }
    }

    (function (i, s, o, g, r, a, m) {
          i['GoogleAnalyticsObject'] = r;
          i[r] = i[r] || function () {
              (i[r].q = i[r].q || []).push(arguments)
          }, i[r].l = 1 * new Date();
          a = s.createElement(o),
                  m = s.getElementsByTagName(o)[0];
          a.async = 1;
          a.src = g;
          m.parentNode.insertBefore(a, m)
      })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

      ga('create', 'UA-61108250-1', 'auto');
      ga('send', 'pageview');

    /*INTRO */
    window.scrollTo(0,0);

    if(window.innerWidth < 1025 || !hasWebGL() )
        return;
    
    var keyframeCount = 30;
    var currKeyframe = 0;

    var lines = document.querySelectorAll('.intro-ring');
    var totalLength =  lines[0].getTotalLength();

    var timer = setInterval(function(){
        if(currKeyframe == keyframeCount)
            clearInterval(timer);
         
        lines[1].style.strokeDasharray = lines[0].style.strokeDasharray = (currKeyframe++/keyframeCount*totalLength)+'px, ' + totalLength+ 'px';
 
    }, 16)
    
    /*d3.selectAll('.intro-ring').style('stroke-dasharray', function() {
        return '0px, ' + this.getTotalLength() + 'px';
    }).animate({duration: 800,ease: 'expo-out'})
    .style('stroke-dasharray', function() {
        return this.getTotalLength() + 'px, ' + this.getTotalLength() + 'px'
    })*/
    
    setTimeout(function() {
        lazyProcess();
    }, 800);
})();

var lazyProcess = (function() {
    var jsProgress = 0.0, 
    cssProgress = 0.0, 
    imgProgress = 0.0;
    
    
    var cssList = [
    'css/fonts.css',
    'css/icomoon/style.css',    
    ];

    for(var key in _cssDirs){
       cssList.push.apply(cssList, _cssDirs[key])
    }
    
    var jsList = [
    'https://cdnjs.cloudflare.com/ajax/libs/sketch.js/1.0.0/sketch.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.5/d3.min.js',

    'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/three.js/r70/three.min.js',

    'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.0/TweenMax.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.0/plugins/ScrollToPlugin.min.js',

    'https://cdnjs.cloudflare.com/ajax/libs/ace/1.1.8/ace.js',
    'https://cdnjs.cloudflare.com/ajax/libs/ace/1.1.8/theme-github.js'
    ]
    
    for(var key in _jsDirs){
       jsList.push.apply(jsList, _jsDirs[key])
    }
    
    var imgList = [
        'img/love-hate.svg',
        'img/works/disap.png', 
        'img/works/disap-icon-blur.png',
        'img/works/sorate.png', 
        'img/works/sorate-icon-blur.png',
        'img/works/eksenlive.png', 
        'img/works/eksenlive-icon-blur.png',
        'img/works/eksenplus.png', 
        'img/works/eksenplus-icon-blur.png',
        'img/works/vdf.png', 
        'img/works/vdf-icon-blur.png',
        'img/works/tickr.png', 
        'img/works/tickr-icon-blur.png',
        'img/works/more.png', 
        'img/works/more-icon-blur.png',
        'img/lab/gravitional-lensing.png',
        'img/lab/h-atom.png',
        'img/lab/charttransition.png',
        'img/lab/cssplane.png',
        'img/lab/jquery-aim.png',
        'img/lab/rating-analysis.png',
        'img/lab/yesno.png',
        'img/lab/colorwavelengths.png',
    ];

    // delay each image and append the timestamp to prevent caching
    loader = new PxLoader();

    
    for (var i = 0; i < imgList.length; i++) {
        var pxImage = new PxLoaderImage(imgList[i]);
        pxImage.imageNumber = i + 1;
        loader.add(pxImage);
    }
    
    var pathLength = 440;
    var circleSvg = document.getElementById('loading-circle');
    
    loader.addProgressListener(function(e) {
        //console.log(e.resource.getName() + ' Loaded\r');
        imgProgress = (e.completedCount / e.totalCount) * 50;
        updateProgress();
    });
    
    loader.start();

    var cssCount = 0;
    LazyLoad.css(cssList, function() {
        cssProgress = 20*(++cssCount)/cssList.length;
        //console.log('CSS: ' + cssProgress)
        updateProgress();
    });
    
    var jsCount = 0;
    LazyLoad.js(jsList, function() {
        jsProgress = 30*(++jsCount)/jsList.length;
        //console.log('JS: ' + jsProgress)
        updateProgress();
    });
    
    
    function updateProgress(){
        var totalRatio = cssProgress + jsProgress + imgProgress;
        if( Math.abs(totalRatio - 100) < 0.05 ){
            Portfolio.start();
        }
        var currLength = pathLength - pathLength * totalRatio/100;
        circleSvg.style.strokeDasharray = pathLength + 'px, ' + currLength + 'px'
    }


    window.res = {
        js: jsList,
        css: cssList,
        img: imgList
    }

});

