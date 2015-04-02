<?php
date_default_timezone_set('EET');
$left = mktime(0, 0, 0, 4, 1, 2015) - time();
//$left = mktime(23,49,23, 3, 23, 2015) - time();
?>

<!DOCTYPE html>
<html lang="en-US">
 <head>
  <title>Portfolio of Cihad Turhan will be here soon.</title>
  <meta charset="UTF-8">

  <!-- SEO -->
  <meta name="author" content="Cihad Turhan">
  <meta name="description" content="Portfolio of Cihad Turhan. Will be released at 01.04.2015 23:59:59 EET">
  <link rel="canonical" href="http://www.cihadturhan.com/index.php">

  <!-- Social: Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@cihadturhan">
  <meta name="twitter:creator" content="@cihadturhan">
  <meta name="twitter:title" content="Portfolio of Cihad Turhan. Will be released at 01.04.2015 23:59:59 EET">
  <meta name="twitter:description" content="Just challenged myself. I'm planning to release my portfolio in one week filled with a bunch of interactive WebGL, D3, CSS3 and other fancy technologies. Let's keep in touch. ">
  <meta name="twitter:image:src" content="http://www.cihadturhan.com/img/site-intro.png">

  <!-- Social: Facebook / Open Graph -->
  <meta property="og:url" content="http://www.cihadturhan.com/index.php">
  <meta property="og:type" content="article">
  <meta property="og:title" content="Portfolio of Cihad Turhan is being released in one week.">
  <meta property="og:image" content="http://www.cihadturhan.com/img/site-intro.png">
  <meta property="og:description" content="Just challenged myself. I'm planning to release my portfolio in one week filled with a bunch of interactive WebGL, D3, CSS3 and other fancy technologies. Let's keep in touch. ">
  <meta property="og:site_name" content="Portfolio of Cihad Turhan">
  <meta property="article:author" content="https://www.facebook.com/cihad.turhan">
  <meta property="article:publisher" content="https://www.facebook.com/cihad.turhan">

  <link rel="author" href="https://plus.google.com/+cihadturhan/">
  <link rel="publisher" href="https://plus.google.com/+cihadturhan/">
  <meta itemprop="name" content="Portfolio of Cihad Turhan. Will be released at 01.04.2015 23:59:59 EET">
  <meta itemprop="description" content="Just challenged myself. I'm planning to release my portfolio in one week filled with a bunch of interactive WebGL, D3, CSS3 and other fancy technologies. Let's keep in touch.">
  <meta itemprop="image" content="http://www.cihadturhan.com/img/site-intro.png">


  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/fonts.css"/>
  <link rel="stylesheet" href="js/lib/harvest/tick.css"/>
  <link rel="stylesheet" href="css/soon.css"/>

  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js">
  </script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js">
  </script>
  <script src="js/lib/harvest/tick.js">
  </script>

  <script src="js/lib/html2canvas.min.js">
  </script>
  <script src="js/lib/glitch.js">
  </script>

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
  <script>
      $(document).ready(function () {

          $('.tick').ticker({
              delay: 1000,
              incremental: -1,
              separators: true
          });

          var sto = window.setTimeout;
          var rand = function (s, e) {
              return s + ~~(Math.random() * (e - s))
          };
          glitch = function () {
              $(".glitchable").glitch({
                  amount: 3,
                  complete: function (canvas) {
                      $(".glitchable").after(canvas);
                      sto(function () {
                          $(canvas).remove();
                      }, rand(60, 200))
                  }
              });
          }

          var randomGlitchTimeout = function () {

              sto(function () {
                  glitch();
                  sto(glitch, rand(60, 200))
                  /*sto(glitch,rand(32,34))
                   sto(glitch,rand(48,50))*/
                  randomGlitchTimeout();
              }, rand(5000, 9000))

          };
          randomGlitchTimeout();
          sto(glitch, 1000);

          $('#video-link').click(function (e) {
              e.preventDefault();
              $('.hd720p').removeClass('hidden');
              var iframe = $('.hd720p>iframe');
              var ww = $(window).width();

              if (ww < 540) {
                  iframe.attr({width: 480, height: 320})
              } else if (ww < 720) {
                  iframe.attr({width: 640, height: 480})
              } else if (ww < 1280) {
                  iframe.attr({width: 1024, height: 768})
              }

              if (!iframe.attr('src')) {
                  iframe.attr('src', iframe.attr('data-src'));
              }
              return false;
          })

          $('body').click(function () {
              if (!$('.hd720p').hasClass('hidden')) {
                  $('.hd720p').addClass('hidden');
              }
          })
      });

      $(".sendgrid-subscription-widget").on("success", function (e) {
          $(this).find(".response").addClass("success").html("<img src=\"colon/d/face.png\" alt=\"YAY!\"> " + e.detail);
      });

      $(".sendgrid-subscription-widget").on("error", function (e) {
          $(this).find(".response").addClass("error").html("<img src=\"sad/panda/face.png\" alt=\"D:\"> " + e.detail);
      });

      $(".sendgrid-subscription-widget").on("sent", function () {
          $(this).addClass("loading")
                  .append("<img src=\"my/super/cool/loading.gif\" alt=\"Loading...\">");
          $(this).find("input[type=submit").attr("disabled", "disabled");

          $(".sendgrid-subscription-widget").on("success error", function () {
              $(this).removeClass("loading")
              $(this).find("img").remove();
              $(this).find("input[type=submit").removeAttr("disabled");
          });
      });

  </script>

 </head>
 <body>
  <header>
   <div id="img-container">
    <img class="glitchable" src="img/logo/logo.png">
   </div>
  </header>

  <article class="table">
   <div class="table-cell-center">
    <h1> Wait for it! </h1>
    <h2> My full interactive portfolio will be ready in </h2><br/>
    <p id="ticker">
     <span class="tick tick-flip"><?php echo number_format($left, 0, '.', ','); ?></span>
    </p>
    <h2> seconds </h2><br/>
    <h2> Meanwhile, you can watch beta <a id="video-link" href="#">video</a>. </h2>
   </div>
  </article>

  <footer> 
   Wanna be notified first?
   <div class="sendgrid-subscription-widget" data-css="false" data-token="a%2FvBD9DUFGdCv2JkaT2IbBa245Rs4%2BX2jJf53ZcYmzxI5kXQgdFf5x8kqY2YaEJ3"></div><script>!function (d, s, id) {
           var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? "http" : "https";
           if (!d.getElementById(id)) {
               js = d.createElement(s);
               js.id = id;
               js.src = p + "://s3.amazonaws.com/subscription-cdn/0.2/widget.min.js";
               fjs.parentNode.insertBefore(js, fjs);
           }
       }(document, "script", "sendgrid-subscription-widget-js");</script>
<!--             <div class="sendgrid-subscription-widget" data-css="false" data-token="a%2FvBD9DUFGdCv2JkaT2IbOAsD5YgmilSRbq%2BNO93hpYFDSOgbVKQJabZsLHCN3hI9G99Gh90tcvmzs3uGerRUQ%3D%3D"></div><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://s3.amazonaws.com/subscription-cdn/0.2/widget.min.js";fjs.parentNode.insertBefore(js,fjs);}}(document, "script", "sendgrid-subscription-widget-js");</script> -->
  </footer>

  <div class="hd720p hidden">
   <iframe width="1280" height="720" data-src="https://www.youtube.com/embed/QyxgpjkLAx8?controls=0&color=white&theme=white&autoplay=1&vq=HD720"  frameborder="0" allowfullscreen></iframe>
  </div>

 </body>
</html>
