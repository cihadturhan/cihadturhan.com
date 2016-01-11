<?php
require_once 'Mobile_Detect.php';
require 'config.php';
$detect = new Mobile_Detect;
$json = load_package_config();
$isMobile = $detect->isMobile();
?>

<!DOCTYPE html>
<html class="no-scroll">
    <head>
        <title>Portfolio of Cihad Turhan - Web Designer & Developer</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- SEO -->
        <meta name="author" content="Cihad Turhan">
        <meta name="description" content="Portfolio of Cihad Turhan - Web Designer & Developer">
        <meta name="keywords" content="cihad, turhan, cihad turhan, web design, web development, javascript, WebGL, D3, devigner, creative technologist">
        <link rel="canonical" href="http://www.cihadturhan.com/index.php">


        <!-- Social: Twitter -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@cihadturhan">
        <meta name="twitter:creator" content="@cihadturhan">
        <meta name="twitter:title" content="Portfolio of Cihad Turhan - Web Designer & Developer">
        <meta name="twitter:description" content="Interactive portfolio of Cihad Turhan which includes WebGL, D3, CSS3 and other visual demos">
        <meta name="twitter:image:src" content="http://www.cihadturhan.com/img/site-intro.png">

        <!-- Social: Facebook / Open Graph -->
        <meta property="og:url" content="http://www.cihadturhan.com/index.php">
        <meta property="og:type" content="article">
        <meta property="og:title" content="Portfolio of Cihad Turhan - Web Designer & Developer">
        <meta property="og:image" content="http://www.cihadturhan.com/img/site-intro.png">
        <meta property="og:description" content="Interactive portfolio of Cihad Turhan which includes WebGL, D3, CSS3 and other visual demos">
        <meta property="og:site_name" content="Portfolio of Cihad Turhan">
        <meta property="article:author" content="https://www.facebook.com/cihad.turhan">
        <meta property="article:publisher" content="https://www.facebook.com/cihad.turhan">

        <link rel="author" href="https://plus.google.com/+cihadturhan/">
        <link rel="publisher" href="https://plus.google.com/+cihadturhan/">
        <meta itemprop="name" content="Portfolio of Cihad Turhan - Web Designer & Developer">
        <meta itemprop="description" content="Interactive portfolio of Cihad Turhan which includes WebGL, D3, CSS3 and other visual demos.">
        <meta itemprop="image" content="http://www.cihadturhan.com/img/site-intro.png">

        <link rel="stylesheet" href="css/intro.css"/>
        <script>
            var _jsDirs = <?php echo json_encode($json[ $isMobile?'jsMobile':'js'][DIR]); ?>;
            var _cssDirs = <?php echo json_encode($json['css'][DIR]); ?>;
        </script>
        <script type="text/javascript" src="js/lib/PxLoader.min.js"></script>
        <script type="text/javascript" src="js/lib/pxloader-images.min.js"></script>
        <script type="text/javascript" src="js/lib/lazyload.js"></script>
		<script>
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
		</script>
    </head>
    <body>

        <header style="display:none;">
            <div id="logo-container">
                <img id="logo" src="img/logo/logo.svg"> </img>
            </div> 

            <!-- Yeah, it's kind of strange to put NAV inside HEADER but they say it's valid. ¯\_(ツ)_/¯
                    http://stackoverflow.com/questions/4870955/in-html5-should-the-main-navigation-be-inside-or-outside-the-header-element 
            -->
            <?php if(!$isMobile):?>
            <nav> 
                <ul>
                    <li><a href="#hello" class="active"> HELLO </a></li><li><a href="#main" class="active"> INTRO </a></li><li> <a href="#skills"> SKILLS </a></li><li> <a href="#works"> WORKS </a></li><li> <a href="#lab"> LAB </a></li><li> <a href="#about"> ABOUT </a></li><li> <a href="#contact"> CONTACT </a></li>
                </ul>
            </nav>

            <nav id="fake-nav"> 
                <ul>
                    <li><a href="#hello" class="active"> HELLO </a></li><li><a href="#main" class="active"> INTRO </a></li><li> <a href="#skills"> SKILLS </a></li><li> <a href="#works"> WORKS </a></li><li> <a href="#lab"> LAB </a></li><li> <a href="#about"> ABOUT </a></li><li> <a href="#contact"> CONTACT </a></li>
                </ul>
            </nav>
            <?php endif ?>
        </header>

        <div id="intro" class="full-wh" >
            <svg xmlns="http://www.w3.org/2000/svg" id="goo-svg" version="1.1" width="800">
            <defs>
            <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"></feGaussianBlur>
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 12 -6" result="goo"></feColorMatrix>
                <feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite>
            </filter>
            </defs>
            </svg>

            <div id="loading-spinner-container">
                <div class="autocenter">
                    <svg id="loading-circle-svg" width="200" height="200"> 
                    <circle id="loading-circle" cx="0" cy="0" r="70" transform="translate(100 100) rotate(-90)"></circle>
                    </svg>

                    <div class="middle-wrapper"> 
                        <div class="middle"></div>
                    </div> 

                    <div class="particle-wrapper"> 
                        <div class="particle even"> </div>
                    </div>

                    <div class="particle-wrapper deg-60"> 
                        <div class="particle even"> </div>
                    </div>

                    <div class="particle-wrapper deg-120"> 
                        <div class="particle even"> </div>
                    </div>

                    <div class="particle-wrapper  deg-180"> 
                        <div class="particle even"> </div>
                    </div>

                    <div class="particle-wrapper  deg-240"> 
                        <div class="particle even"> </div>
                    </div>

                    <div class="particle-wrapper  deg-300"> 
                        <div class="particle even"> </div>
                    </div>

                    <div class="pie first"></div>
                    <div class="pie second"></div>
                    <div class="pie mask"></div>
                </div>
            </div>

            <svg version="1.1" id="loading-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1920px" height="270px" viewBox="0 0 1920 270" enable-background="new 0 0 1920 270" xml:space="preserve">
            <path class="intro-ring" d="M0,0h835
                  c0,69.036,55.964,125,125,125c69.036,0,125-55.964,125-125h835" transform="translate(0,137)" style="stroke-dasharray: 2062.75537109375px, 2062.75537109375px;"></path>
            <path class="intro-ring" d="M0,0h835
                  c0,69.036,55.964,125,125,125c69.036,0,125-55.964,125-125h835" transform=" translate(960,0) rotate(180) translate(-960,-133)" style="stroke-dasharray: 2062.75537109375px, 2062.75537109375px;"></path>    
            </svg>

            <h3 class="loading-text">LOADING</h3>

        </div>
    </div>

    <div id="hello" class="full-wh">
        
        <div class="overlay">
            <div class="table-cell">
                <h1 class="intro-text"><span>HELLO</span></h1>
                <p class="intro-text">
                    <span style="color: hsl(340, 100%, 62%);">I'M CİHAD</span><br>
                    <span style="color: hsl(278, 100%, 68%);">I'M A CREATIVE WEB DEVELOPER</span><br>
                    <span style="color: hsl(226, 93%, 66%);padding-bottom: 0;">I STAND ON A SWEET SPOT WHERE</span>
                    <span style="color: hsl(226, 93%, 66%);padding-bottom: 0;"><strong style="color: hsl(226, 83%, 56%);">DESIGN</strong> &amp; <strong style="color: hsl(226, 83%, 56%);">CODE</strong></span>
                    <span style="color: hsl(226, 93%, 66%);">INTERSECTS.</span>
                </p></div>
        </div>
        <div class="full-wh-footer">
            <?php if($isMobile): ?>
              <a class="btn btn-next" href="#contact">Contact<br><i class="icon-arrow-down"></i></a>
            <?php else: ?>
              <a class="btn btn-next" href="#main">Intro<br><i class="icon-arrow-down"></i></a>
            <?php endif ?>    
        </div>
    </div>
    <?php 
    if(!$isMobile){
        require 'content.php';
    }
    ?>

    <div id="contact" class="full-wh">
        <div id="contact-svg-container"></div>

        <div class="full-wh-footer">
            <h3> This portfolio is rendered by a single javascript file. Download it from <a id="contact-cv" href="#" target="_blank">this link</a>. </h3>
        </div>
    </div>
    
    <?php if ($isMobile):?>
    <script type="text/javascript" src="app.mobile.js"></script>
    <?php else:?>
    <script type="text/javascript" src="app.js"></script>
    <?php endif ?>
</body>
</html>
