<div id="main" class="full-wh">
    <div class="main-container">
        <div id="container" class="main-pane left-pane"></div><div class="main-pane right-pane">
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
    <div class="menu skills-info">
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
        <a class="btn btn-next" href="#about">About Me<br><i class="icon-arrow-down"></i></a>
    </div>
</div>

<div id="about" class="full-wh">
    <div id="svg-container"></div>
    <svg id="love-hate-chart"> </svg>

    <div class="full-wh-footer">
        <a class="btn btn-next" href="#contact">Contact<br><i class="icon-arrow-down"></i></a>
    </div>
</div>