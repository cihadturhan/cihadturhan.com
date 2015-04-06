<?php
require 'config.php';
$json = load_package_config();

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
			var _jsDirs = <?php echo json_encode($json['dirs']['js'][DIR]); ?>;
			var _cssDirs = <?php echo json_encode($json['dirs']['css'][DIR]); ?>;
		</script>
		<script type="text/javascript" src="js/lib/PxLoader.min.js"></script>
		<script type="text/javascript" src="js/lib/pxloader-images.min.js"></script>
		<script type="text/javascript" src="js/lib/lazyload.js"></script>
    </head>
    <body>
    	<header style="display:none;">
			<div id="logo-container">
				<img id="logo" src="img/logo/logo.svg"> </img>
			</div> 

			<!-- Yeah, it's kind of strange to put NAV inside HEADER but they say it's valid. ¯\_(ツ)_/¯
				http://stackoverflow.com/questions/4870955/in-html5-should-the-main-navigation-be-inside-or-outside-the-header-element 
			-->
			<nav> 
				<ul>
					<li> <a href="#main" class="active"> INTRO </a></li><li> <a href="#skills"> SKILLS </a></li><li> <a href="#works"> WORKS </a></li><li> <a href="#about"> ABOUT </a></li><li> <a href="#lab"> LAB </a></li><li> <a href="#contact"> CONTACT </a></li>
				</ul>
			</nav>

			<nav id="fake-nav"> 
				<ul>
					<li> <a href="#main" class="active"> INTRO </a></li><li> <a href="#skills"> SKILLS </a></li><li> <a href="#works"> WORKS </a></li><li> <a href="#about"> ABOUT </a></li><li> <a href="#lab"> LAB </a></li><li> <a href="#contact"> CONTACT </a></li>
				</ul>
			</nav>
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

        <div id="main" class="full-wh">
			<div class="main-container">
				<div class="overlay">
					<h1 class="intro-text"><span>Hi</span></h1>

					<h2 class="intro-text"><span>I'm Cihad</span></h2>

					<h2 class="intro-text"><span>I'm a <i>Creative Web Developer</i></span></h2>

					<h2 class="intro-text"><span>I stand on a sweet spot where <i>Design</i> and <i>Code</i> intersects.</span></h2>
				</div>
            <div id="container" class="main-pane left-pane"> </div><div class="main-pane right-pane">
<table class="js-file-line-container">
      <tbody>
      <tr>
        
        <td id="LC5" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        
        <td id="LC6" class="blob-code js-file-line"><span class="pl-s">var</span> d3_geo_clipAntimeridian <span class="pl-k">=</span> d3_geo_clip(</td>
      </tr>
      <tr>
        
        <td id="LC7" class="blob-code js-file-line">    d3_true,</td>
      </tr>
      <tr>
        
        <td id="LC8" class="blob-code js-file-line">    d3_geo_clipAntimeridianLine,</td>
      </tr>
      <tr>
        
        <td id="LC9" class="blob-code js-file-line">    d3_geo_clipAntimeridianInterpolate,</td>
      </tr>
      <tr>
        
        <td id="LC10" class="blob-code js-file-line">    [<span class="pl-k">-</span>π, <span class="pl-k">-</span>π / <span class="pl-c1">2</span>]);</td>
      </tr>
      <tr>
        
        <td id="LC11" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        
        <td id="LC12" class="blob-code js-file-line"><span class="pl-c">// Takes a line and cuts into visible segments. Return values:</span></td>
      </tr>
      <tr>
        
        <td id="LC17" class="blob-code js-file-line"><span class="pl-st">function</span> <span class="pl-en">d3_geo_clipAntimeridianLine</span>(<span class="pl-vpf">listener</span>) {</td>
      </tr>
      <tr>
        
        <td id="LC18" class="blob-code js-file-line">  <span class="pl-s">var</span> λ<span class="pl-c1">0</span> <span class="pl-k">=</span> <span class="pl-c1">NaN</span>,</td>
      </tr>
      <tr>
        
        <td id="LC19" class="blob-code js-file-line">      φ<span class="pl-c1">0</span> <span class="pl-k">=</span> <span class="pl-c1">NaN</span>,</td>
      </tr>
      <tr>
        
        <td id="LC20" class="blob-code js-file-line">      sλ<span class="pl-c1">0</span> <span class="pl-k">=</span> <span class="pl-c1">NaN</span>,</td>
      </tr>
      <tr>
        
        <td id="LC21" class="blob-code js-file-line">      clean; <span class="pl-c">// no intersections</span></td>
      </tr>
      <tr>
        
        <td id="LC22" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        
        <td id="LC23" class="blob-code js-file-line">  <span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        
        <td id="LC24" class="blob-code js-file-line">    <span class="pl-en">lineStart</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        
        <td id="LC25" class="blob-code js-file-line">      listener.lineStart();</td>
      </tr>
      <tr>
        
        <td id="LC26" class="blob-code js-file-line">      clean <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        
        <td id="LC27" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        
        <td id="LC28" class="blob-code js-file-line">    <span class="pl-en">point</span>: <span class="pl-st">function</span>(<span class="pl-vpf">λ1</span>, <span class="pl-vpf">φ1</span>) {</td>
      </tr>
      <tr>
        
        <td id="LC29" class="blob-code js-file-line">      <span class="pl-s">var</span> sλ<span class="pl-c1">1</span> <span class="pl-k">=</span> λ<span class="pl-c1">1</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> π <span class="pl-k">:</span> <span class="pl-k">-</span>π,</td>
      </tr>
      <tr>
        
        <td id="LC30" class="blob-code js-file-line">          dλ <span class="pl-k">=</span> <span class="pl-s3">abs</span>(λ<span class="pl-c1">1</span> <span class="pl-k">-</span> λ<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        
        <td id="LC31" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-s3">abs</span>(dλ <span class="pl-k">-</span> π) <span class="pl-k">&lt;</span> ε) { <span class="pl-c">// line crosses a pole</span></td>
      </tr>
      <tr>
        
        <td id="LC32" class="blob-code js-file-line">        listener.point(λ<span class="pl-c1">0</span>, φ<span class="pl-c1">0</span> <span class="pl-k">=</span> (φ<span class="pl-c1">0</span> <span class="pl-k">+</span> φ<span class="pl-c1">1</span>) / <span class="pl-c1">2</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> halfπ <span class="pl-k">:</span> <span class="pl-k">-</span>halfπ);</td>
      </tr>
      <tr>
        
        <td id="LC33" class="blob-code js-file-line">        listener.point(sλ<span class="pl-c1">0</span>, φ<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        
        <td id="LC34" class="blob-code js-file-line">        listener.lineEnd();</td>
      </tr>
      <tr>
        
        <td id="LC35" class="blob-code js-file-line">        listener.lineStart();</td>
      </tr>
      <tr>
        
        <td id="LC36" class="blob-code js-file-line">        listener.point(sλ<span class="pl-c1">1</span>, φ<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        
        <td id="LC37" class="blob-code js-file-line">        listener.point(λ<span class="pl-c1">1</span>, φ<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        
        <td id="LC38" class="blob-code js-file-line">        clean <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        
        <td id="LC39" class="blob-code js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span> (sλ<span class="pl-c1">0</span> <span class="pl-k">!==</span> sλ<span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> dλ <span class="pl-k">&gt;=</span> π) { <span class="pl-c">// line crosses antimeridian</span></td>
      </tr>
      <tr>
        
        <td id="LC40" class="blob-code js-file-line">        <span class="pl-c">// handle degeneracies</span></td>
      </tr>
      <tr>
        
        <td id="LC41" class="blob-code js-file-line">        <span class="pl-k">if</span> (<span class="pl-s3">abs</span>(λ<span class="pl-c1">0</span> <span class="pl-k">-</span> sλ<span class="pl-c1">0</span>) <span class="pl-k">&lt;</span> ε) λ<span class="pl-c1">0</span> <span class="pl-k">-=</span> sλ<span class="pl-c1">0</span> <span class="pl-k">*</span> ε;</td>
      </tr>
      <tr>
        
        <td id="LC42" class="blob-code js-file-line">        <span class="pl-k">if</span> (<span class="pl-s3">abs</span>(λ<span class="pl-c1">1</span> <span class="pl-k">-</span> sλ<span class="pl-c1">1</span>) <span class="pl-k">&lt;</span> ε) λ<span class="pl-c1">1</span> <span class="pl-k">-=</span> sλ<span class="pl-c1">1</span> <span class="pl-k">*</span> ε;</td>
      </tr>
      <tr>
        
        <td id="LC43" class="blob-code js-file-line">        φ<span class="pl-c1">0</span> <span class="pl-k">=</span> d3_geo_clipAntimeridianIntersect(λ<span class="pl-c1">0</span>, φ<span class="pl-c1">0</span>, λ<span class="pl-c1">1</span>, φ<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        
        <td id="LC44" class="blob-code js-file-line">        listener.point(sλ<span class="pl-c1">0</span>, φ<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        
        <td id="LC45" class="blob-code js-file-line">        listener.lineEnd();</td>
      </tr>
      <tr>
        
        <td id="LC46" class="blob-code js-file-line">        listener.lineStart();</td>
      </tr>
      <tr>
        
        <td id="LC47" class="blob-code js-file-line">        listener.point(sλ<span class="pl-c1">1</span>, φ<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        
        <td id="LC48" class="blob-code js-file-line">        clean <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        
        <td id="LC49" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        
        <td id="LC50" class="blob-code js-file-line">      listener.point(λ<span class="pl-c1">0</span> <span class="pl-k">=</span> λ<span class="pl-c1">1</span>, φ<span class="pl-c1">0</span> <span class="pl-k">=</span> φ<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        
        <td id="LC51" class="blob-code js-file-line">      sλ<span class="pl-c1">0</span> <span class="pl-k">=</span> sλ<span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        
        <td id="LC52" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        
        <td id="LC53" class="blob-code js-file-line">    <span class="pl-en">lineEnd</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        
        <td id="LC54" class="blob-code js-file-line">      listener.lineEnd();</td>
      </tr>
      <tr>
        
        <td id="LC55" class="blob-code js-file-line">      λ<span class="pl-c1">0</span> <span class="pl-k">=</span> φ<span class="pl-c1">0</span> <span class="pl-k">=</span> <span class="pl-c1">NaN</span>;</td>
      </tr>
      <tr>
        
        <td id="LC56" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        
        <td id="LC57" class="blob-code js-file-line">    <span class="pl-c">// if there are intersections, we always rejoin the first and last segments.</span></td>
      </tr>
      <tr>
        
        <td id="LC58" class="blob-code js-file-line">    <span class="pl-en">clean</span>: <span class="pl-st">function</span>() { <span class="pl-k">return</span> <span class="pl-c1">2</span> <span class="pl-k">-</span> clean; }</td>
      </tr>
      <tr>
        
        <td id="LC59" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        
        <td id="LC60" class="blob-code js-file-line">}</td>
      </tr>
      <tr>
        
        <td id="LC61" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        
        <td id="LC62" class="blob-code js-file-line"><span class="pl-st">function</span> <span class="pl-en">d3_geo_clipAntimeridianIntersect</span>(<span class="pl-vpf">λ0</span>, <span class="pl-vpf">φ0</span>, <span class="pl-vpf">λ1</span>, <span class="pl-vpf">φ1</span>) {</td>
      </tr>
      <tr>
        
        <td id="LC63" class="blob-code js-file-line">  <span class="pl-s">var</span> cosφ<span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        
        <td id="LC64" class="blob-code js-file-line">      cosφ<span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        
        <td id="LC65" class="blob-code js-file-line">      sinλ0_λ<span class="pl-c1">1</span> <span class="pl-k">=</span> <span class="pl-s3">Math</span>.<span class="pl-s3">sin</span>(λ<span class="pl-c1">0</span> <span class="pl-k">-</span> λ<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        
        <td id="LC66" class="blob-code js-file-line">  <span class="pl-k">return</span> <span class="pl-s3">abs</span>(sinλ0_λ<span class="pl-c1">1</span>) <span class="pl-k">&gt;</span> ε</td>
      </tr>
</tbody>
</table>
            
            </div>
        </div>
        <div class="full-wh-footer" style="display:none;">
        	<a class="btn btn-next" href="#skills">Skills<br><i class="icon-arrow-down"></i></a>
		</div>
        </div>

        <div id="skills" class="full-wh">
			<div class="skills-info">
				<div class="editor">

				</div>
			</div>

			<div class="skills-canvas">

			</div>

			<div class="full-wh-footer">
				<a class="btn btn-next" href="#works">Works<br><i class="icon-arrow-down"></i></a>
			</div>
        </div>

		<div id="works" class="full-wh">
			<div class="background"></div>
			<div class="full">
				<div class="card"></div>
			</div>

			<div class="works-info menu menu-right">
				<div class="works-nav menu-nav"> 
					<a href="#works-prev" class="icon-arrow-left"></a>
					<div class="title works-title"> Project 1 </div>
					<a href="#works-next" class="icon-arrow-right"> </a>
				</div>

				<div class="menu-body">
					
					<h1> About </h1>
					<p id="works-description"> Lorem ipsum dolor sit amet </p>

					<h1> Project Date </h1>
					<p id="works-date"></p>

					<h1> Coffee Consumed</h1>
					<p id="works-coffee"> <span class="icon-coffee"> </span> <span class="icon-coffee"> </span> <span class="icon-coffee"> </span> </p>
					<p> <span id="works-litres">123</span> litres </p>

					<h1> Tags </h1>
					<ul id="works-tags" class="menu-tags">  
					  <li> jQuery </li>
					  <li> Angular.js </li>
					</ul>

				</div>
			</div>

			<div class="full-wh-footer">
				<a class="btn btn-next" href="#about">About Me<br><i class="icon-arrow-down"></i></a>
			</div>
		</div>

		<div id="about" class="full-wh">
			<div id="svg-container"></div>
			<svg id="love-hate-chart"> </svg>
		
			<div class="full-wh-footer">
				<a class="btn btn-next" href="#lab">Lab<br><i class="icon-arrow-down"></i></a>
			</div>
		</div>

		<div id="lab" class="full-wh">

			<div class="menu menu-right">


				<div class="lab-nav menu-nav"> 
					<a href="#lab-prev" class="icon-arrow-left"></a>
					<div class="title lab-title">  </div>
					<a href="#lab-next" class="icon-arrow-right"> </a>
				</div>

				<div class="menu-body">
					
					
					<h1> About </h1>
					<p id="lab-description"> Lorem ipsum dolor sit amet </p>

					<h1> Difficulty </h1>
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="110.776px" height="21.5px" viewBox="0 0 110.776 21.5" enable-background="new 0 0 110.776 21.5" xml:space="preserve" class="menu-difficulty">
						<g>
							<polygon class="star" points="55.556,0.29 58.405,6.063 64.776,6.989 60.166,11.483 61.254,17.829 55.556,14.833 49.857,17.829 
								50.945,11.483 46.335,6.989 52.707,6.063 	"></polygon>
							<polygon class="star" points="78.556,0.29 81.405,6.063 87.776,6.989 83.166,11.483 84.254,17.829 78.556,14.833 72.857,17.829 
								73.945,11.483 69.335,6.989 75.707,6.063 	"></polygon>
							<polygon class="star" points="101.556,0.29 104.405,6.063 110.776,6.989 106.166,11.483 107.254,17.829 101.556,14.833 
								95.857,17.829 96.945,11.483 92.335,6.989 98.707,6.063 	"></polygon>
							<polygon class="star" points="32.556,0.29 35.405,6.063 41.776,6.989 37.166,11.483 38.254,17.829 32.556,14.833 26.857,17.829 
								27.945,11.483 23.335,6.989 29.707,6.063 	"></polygon>
							<polygon class="star" points="9.556,0.29 12.405,6.063 18.776,6.989 14.166,11.483 15.254,17.829 9.556,14.833 3.857,17.829 
								4.945,11.483 0.335,6.989 6.707,6.063 	"></polygon>
						</g>
						<g class="overlay" style="display: block; opacity: 1;">
							<defs>
								<rect id="lab-difficulty-mask" width="78.4" height="18"></rect>
							</defs>
							<clipPath id="SVGID_2_">
								<use xlink:href="#lab-difficulty-mask" overflow="visible"></use>
							</clipPath>
							<g clip-path="url(#SVGID_2_)">
								<polygon class="star" points="55.556,0.29 58.405,6.063 64.776,6.989 60.166,11.483 61.254,17.829 55.556,14.833 49.857,17.829 
									50.945,11.483 46.335,6.989 52.707,6.063 		"></polygon>
								<polygon class="star" points="78.556,0.29 81.405,6.063 87.776,6.989 83.166,11.483 84.254,17.829 78.556,14.833 72.857,17.829 
									73.945,11.483 69.335,6.989 75.707,6.063 		"></polygon>
								<polygon class="star" points="101.556,0.29 104.405,6.063 110.776,6.989 106.166,11.483 107.254,17.829 101.556,14.833 
									95.857,17.829 96.945,11.483 92.335,6.989 98.707,6.063 		"></polygon>
								<polygon class="star" points="32.556,0.29 35.405,6.063 41.776,6.989 37.166,11.483 38.254,17.829 32.556,14.833 26.857,17.829 
									27.945,11.483 23.335,6.989 29.707,6.063 		"></polygon>
								<polygon class="star" points="9.556,0.29 12.405,6.063 18.776,6.989 14.166,11.483 15.254,17.829 9.556,14.833 3.857,17.829 
									4.945,11.483 0.335,6.989 6.707,6.063 		"></polygon>
							</g>
						</g>
					</svg>

					<h1> Tags </h1>
					<ul id="lab-tags" class="menu-tags">  
					  <li> jQuery </li>
					  <li> Angular.js </li>
					  <li> Rating </li>
					  <li> Quantum </li>
					</ul>

					<h1> References </h1>
					<ul id="lab-reflist" class="menu-reflist">
					  <li> <span class="icon-image-outline"> </span> <a href="http://asdfa.com" target="_blank"> #1 </a> </li>
					  <li> <span class="icon-code-outline"> </span> <a href="http://asdfa.com" target="_blank"> #2 </a> </li>
					  <li> <span class="icon-document-text"> </span> <a href="http://asdfa.com" target="_blank"> #3 </a> </li>
					  <li> <span class="icon-film"> </span> <a href="http://asdfa.com" target="_blank"> #4 </a> </li>
					</ul>

				</div>
				
			</div>

<!-- 			<iframe frameborder="0" src=""> </iframe> -->
			
			<img id="lab-background"/>

			<div id="lab-foreground">
				<img id="lab-foreground-img" src=""/>
				
				<div class="table-cell">
					<a href="#" target="_blank"> Launch Experiment </a>
				</div>
			</div>

			<div class="full-wh-footer">
				<a class="btn btn-next" href="#contact">Contact<br><i class="icon-arrow-down"></i></a>
			</div>
		</div>

		<div id="contact" class="full-wh">
			
  			<table id="contact-table">
          
              <thead> <tr><th>  Hear from me </th>
                <th> Let me hear from you </th> 
                 
              </tr></thead>
              <tbody>
                
                  <tr><td> Find me on <a href="https://twitter.com/CihadTurhan" target="_blank" id="contact-twitter">Twitter</a> </td> <td style="vertical-align: middle;" rowspan="4"> Send a mail to <a href="mailto:contact@cihadturhan.com">me</a> if you have an interesting project or else. </td></tr>
                  <tr><td> I rarely write on <a href="https://medium.com/@cihadturhan" target="_blank" id="contact-medium">Medium</a>, follow for the next article </td></tr>
                  <tr><td> Sometimes, I fiddle on <a href="http://codepen.io/cihadturhan/" target="_blank" id="contact-codepen"> Codepen </a> to make something interesting. </td></tr>
                  <tr><td> You can find me on <a href="https://news.layervault.com/u/1959/cihad-turhan" target="_blank" id="contact-medium">Designer News</a> commenting on a random post. </td></tr>
                
                
                
              </tbody>
              
  			</table>
  
			

			

			<div class="full-wh-footer">
				
			</div>
		</div>
		

        <script type="text/javascript" src="app.js">







</script>
    </body>
</html>
