var intro = (function() {

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
    'css/main.css',
    'css/skills.css',
    'css/works.css',
    'css/lab.css',
    'css/about.css',
    'css/contact.css',
    'css/icomoon/style.css'
    ];
    
    var jsList = [
    'https://cdnjs.cloudflare.com/ajax/libs/sketch.js/1.0.0/sketch.min.js',
    'js/lib/entropy.js',
    'https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.5/d3.min.js',

    'js/lib/URLParser.js',

    'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/three.js/r70/three.min.js',
    'js/lib/ConvexGeometry.js',
    'js/lib/CopyShader.js',
    'js/lib/RGBShiftShader.js',

    'js/lib/EffectComposer.js',
    'js/lib/RenderPass.js',
    'js/lib/MaskPass.js',
    'js/lib/ShaderPass.js',

    'js/lib/GeometryUtils.js',
    'js/lib/TrackballControls.js',
    'res/droid_sans/regular.js',

    'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.0/TweenMax.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.0/plugins/ScrollToPlugin.min.js',

    'https://cdnjs.cloudflare.com/ajax/libs/ace/1.1.8/ace.js',
    'https://cdnjs.cloudflare.com/ajax/libs/ace/1.1.8/theme-github.js',
    
    'js/lib/html2canvas.min.js',
    'js/lib/glitch.js',
    
    /*'js/intro-code.js',
    'js/intro-design.js',
    'js/skills.js',
    'js/works.js',
    'js/lab.js',
    'js/about.js',
    'js/contact.js',

    'js/main.js'*/

    'js/all.min.js'
    ];
    
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
        'img/works/more-icon-blur.png'

    ];

    // delay each image and append the timestamp to prevent caching 
    var baseUrl = 'http://localhost/side/works-page/img/works/disap.png'; //?time=' + +new Date, 
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
    
    var jsCount = 0;
    LazyLoad.js(jsList, function() {
        jsProgress = 30*(++jsCount)/jsList.length;
        //console.log('JS: ' + jsProgress)
        updateProgress();
    });
    
    var cssCount = 0;
    LazyLoad.css(cssList, function() {
        cssProgress = 20*(++cssCount)/cssList.length;
        //console.log('CSS: ' + cssProgress)
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

