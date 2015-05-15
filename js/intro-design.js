
//TO-DO Make it thiefproof

HydrostatAnim = (function($) {

    //Let's select some beautiful colors
    var spectral = ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"];
    colorCount = 0;
    
    var settings = {
        interactive: false,
        darkTheme: true,
        headRadius: 0,
        thickness:  window.isMobile?10:20,
        tentacles: window.isMobile?20:50,
        friction: 0.001,
        gravity: 0,
        colour: spectral[7],
        length: window.isMobile?25:50,
        pulse: true,
        wind: -1,
        windDecay: 0.96,
        animDuration: 1000
    };
    
    var utils = {
        
        curveThroughPoints: function(points, ctx) {
            
            var i, n, a, b, x, y;
            
            for (i = 1, n = points.length - 2; i < n; i++) {
                
                a = points[i];
                b = points[i + 1];
                
                x = (a.x + b.x) * 0.5;
                y = (a.y + b.y) * 0.5;
                
                ctx.quadraticCurveTo(a.x, a.y, x, y);
            }
            
            a = points[i];
            b = points[i + 1];
            
            ctx.quadraticCurveTo(a.x, a.y, b.x, b.y);
        },randomColor: function() {
            return {
                h: (Math.random() * 360),
                s: (0.6 + 0.2 * Math.random()) * 100,
                v: (0.5 + 0.15 * Math.random()) * 100
            };
        },
        randomSpectral: function() {
            (++colorCount == spectral.length) && (colorCount = 0);
            return spectral[colorCount];
        }
    };
    
    var Node = function(x, y) {
        
        this.x = this.ox = x || 0.0;
        this.y = this.oy = y || 0.0;
        
        this.vx = 0.0;
        this.vy = 0.0;
    };
    
    var Tentacle = function(options) {
        
        this.length = options.length || 10;
        this.radius = options.radius || 10;
        this.spacing = options.spacing || 20;
        this.friction = options.friction || 0.8;
        this.color = options.color;
        
        this.shade = random(0.85, 1.1);
        
        this.nodes = [];
        this.outer = [];
        this.inner = [];
        this.theta = [];
        
        for (var i = 0; i < this.length; i++) {
            this.nodes.push(new Node());
        }
    };
    
    Tentacle.prototype = {
        
        move: function(x, y, instant) {
            
            this.nodes[0].x = x;
            this.nodes[0].y = y;
            
            if (instant) {
                
                var i, node;
                
                for (i = 1; i < this.length; i++) {
                    
                    node = this.nodes[i];
                    node.x = x;
                    node.y = y;
                }
            }
        },
        
        update: function() {
            
            var i, n, s, c, dx, dy, da, px, py, node, prev = this.nodes[0];
            var radius = this.radius * settings.thickness;
            var step = radius / this.length;
            
            for (i = 1, j = 0; i < this.length; i++, j++) {
                
                node = this.nodes[i];
                
                node.x += node.vx;
                node.y += node.vy;
                
                dx = prev.x - node.x;
                dy = prev.y - node.y;
                da = Math.atan2(dy, dx);
                
                px = node.x + cos(da) * this.spacing * settings.length;
                py = node.y + sin(da) * this.spacing * settings.length;
                
                node.x = prev.x - (px - node.x);
                node.y = prev.y - (py - node.y);
                
                node.vx = node.x - node.ox;
                node.vy = node.y - node.oy;
                
                node.vx *= this.friction * (1 - settings.friction);
                node.vy *= this.friction * (1 - settings.friction);
                
                node.vx += settings.wind;
                node.vy += settings.gravity;
                
                node.ox = node.x;
                node.oy = node.y;
                
                s = sin(da + HALF_PI);
                c = cos(da + HALF_PI);
                
                this.outer[j] = {
                    x: prev.x + c * radius,
                    y: prev.y + s * radius
                };
                
                this.inner[j] = {
                    x: prev.x - c * radius,
                    y: prev.y - s * radius
                };
                
                this.theta[j] = da;
                
                radius -= step;
                
                prev = node;
            }
        },
        
        draw: function(ctx) {
            
            var h, s, v, e;
            
            s = this.outer[0];
            e = this.inner[0];
            
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            utils.curveThroughPoints(this.outer, ctx);
            utils.curveThroughPoints(this.inner.reverse(), ctx);
            ctx.lineTo(e.x, e.y);
            ctx.closePath();

            
            ctx.fillStyle = this.color;
            ctx.fill();
            
            if (settings.thickness > 2) {
                
                v += settings.darkTheme ? -10 : 10;
                
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    };
    
    var demo = true;
    var ease = 0.1;
    var modified = false;
    var radius = settings.headRadius;
    var tentacles = [];
    var center = {x: 0,y: 0};
    var t = 0;
    
    var sketch = Sketch.create({
        
        container: document.getElementById('container'),
        fullscreen: false,
        width: $(window).width()/2,
        height: $(window).height(),
        setup: function() {
            
            t = this.millis;
            
            center.x = this.width;
            center.y = 0; //this.height;//this.height / 2;
            
            var tentacle;
            
            for (var i = 0; i < 100; i++) {
                
                tentacle = new Tentacle({
                    length: settings.length,
                    radius: random(0.05, 1.0),
                    spacing: random(0.2, 1.0),
                    friction: random(0.7, 0.88),
                    color: utils.randomSpectral()
                });
                
                tentacle.move(center.x, center.y, true);
                tentacles.push(tentacle);
            }
        },
        
        update: function() {
            
            
            var cx, cy, pulse;
            
            
            var diffT = this.millis - t;
            
            if (diffT > 4000 + settings.animDuration){
                var canvas = sketch.canvas;
                sketch.destroy();
                container.appendChild(canvas);
            }

            cx = this.width;
            cy = this.height;
            phase = HALF_PI;
            
            settings.wind = settings.wind * settings.windDecay
            
            if (diffT < settings.animDuration) {
                center.x = cx + 3 * cx / 4 * cos(-phase + diffT / settings.animDuration * (HALF_PI + phase));
                center.y = cy / 2 * sin(diffT / settings.animDuration * HALF_PI);
            }
            
            var px, py, theta, tentacle;
            var step = TWO_PI / settings.tentacles;
            
            for (var i = 0, n = settings.tentacles; i < n; i++) {
                
                tentacle = tentacles[i];
                
                theta = i * step;
                
                px = cos(theta) * radius;
                py = sin(theta) * radius;
                
                tentacle.move(center.x + px, center.y + py);
                tentacle.update();
            }
        },
        
        draw: function() {
            
            var h = settings.colour.h * 0.45;
            var s = settings.colour.s * 100 * 0.95;
            var v = settings.colour.v * 100 * 0.95;
            var w = v + (settings.darkTheme ? -10 : 10);
            
            this.beginPath();
            this.arc(center.x, center.y, radius + settings.thickness, 0, TWO_PI);
            this.lineWidth = settings.headRadius * 0.3;
            this.globalAlpha = 0.2;
            this.strokeStyle = settings.colour; // settings.colour; 'hsl(' + h + ',' + s + '%,' + w + '%)';
            this.stroke();
            
            this.globalAlpha = 1.0;
            
            for (var i = 0, n = settings.tentacles; i < n; i++) {
                tentacles[i].draw(this);
            }
            
            this.beginPath();
            this.arc(center.x, center.y, radius + settings.thickness, 0, TWO_PI);
            this.fillStyle = settings.colour;
            this.fill();
        }
    });

});