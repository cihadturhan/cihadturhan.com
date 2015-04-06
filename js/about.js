 //PERSONAL

About = function() {
    // TO-DO
    // DON'T FORGET TO ADD COLOR CHANGING FROM RED/GREEN TO BLACK GRADUALLY
    // AND DRAW SOME F*CKING ICONS
    
    var vis = d3.select('#love-hate-chart');
    var imported;

    //Import the plane
    d3.xml("img/love-hate.svg", "image/svg+xml", function(xml) {
        var importedNode = document.importNode(xml.documentElement, true);
        document.getElementById('svg-container').appendChild(importedNode);
        imported = d3.select('#love-hate-icons');
        initVis();
    });
    
    
    var titles = {
        love: [{name: 'What I Love',id: 'love'}],
        hate: [{name: 'What I Hate',id: 'hate'}]
    };
    
    var data = CV.about;
    
    
    function initVis() {
        
        var loveHate = {};
        
        var width = window.innerWidth / 2 * 0.9, height = Math.min(window.innerHeight * 0.8, 900);
        var rectHeight = 10 + parseInt(height / 720 * 30);
        var offsetY = rectHeight + 15;
        
        var barOffset = 100 + parseInt(width / 960 * 400);
        var textOffset = 90;
        var iconOffset = 20;
        
        var margin = {
            top: 10,
            left: 15,
            botom: 10,
            right: 15
        }
        
        
        F = function(name) {
            var v, params = Array.prototype.slice.call(arguments, 1);
            return function(o) {
                return (typeof (v = o[name]) === 'function' ? v.apply(o, params) : v);
            };
        };
        
        I = function(d) {
            return d;
        };
        
        strongInOut = function(t) {
            var b = 0;
            var c = 1;
            var d = 1;
            t /= d / 2;
            if (t < 1)
                return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            t -= 2;
            return c / 2 * (Math.sqrt(1 - t * t) + 1) + b;
        }
        
        
        d3.selection.prototype.animate = function(opts) {
            !opts && (opts = {})
            var dur = opts.duration ? opts.duration : 1500;
            var ease = opts.ease ? opts.ease : d3.ease('exp-out');
            var delay = opts.delay ? opts.delay : 0;
            delete opts.duration;
            var t = this.transition().ease(ease).duration(dur).delay(delay);
            return t;
        };
        
        vis.attr({
            width: width * 2,
            height: height
        });
        
        imported.attr({
            width: width * 2,
            height: height,
            viewBox: '0 0 ' + (width * 2) + ' ' + height
        });
        
        
        var parentDelay = 300;
        var parentDuration = 1000;
        
        var childrenDelay = 1500;
        var preChildrenDelay = childrenDelay - 400;
        var childrenDuration = 1500;
        var textDuration = 1500;
        
        var maxElemObj = data.love.length > data.hate.length ? data.love : data.hate;
        
        var y = d3.scale.ordinal()
        .rangeRoundBands([offsetY, height], .2)
        .domain(d3.keys(maxElemObj));


        //Vertical Line
        vis.append('line').attr({
            class: 'vertical-line',
            x1: width,
            y1: 0,
            x2: width,
            y2: 0
        }).animate({
            delay: parentDelay + parentDuration + preChildrenDelay
        }).attr({
            y2: height
        })
        
        
        for (var key in data) {
            var offset = width - barOffset;
            var title = titles[key];
            
            data[key].sort(function(a, b) {
                return b.value - a.value;
            })
            var subData = data[key].map(F('value'));
            var left = key == 'hate';
            
            var elem = vis.append('g').attr({class: key});
            loveHate[key] = elem;
            
            var sum = d3.sum(subData);
            
            var x = d3.scale.linear()
            .domain([0, d3.max(subData)])
            .rangeRound([0, width]).nice()
            
            var w = d3.scale.linear()
            .domain([0, sum])
            .rangeRound([0, width - barOffset])
            //.nice()

            //Titles
            var titleText = elem.append('g')
            .selectAll('.' + key + '-text')
            .data(title);
            
            var titleTextEnter = titleText.enter().append('text');
            titleTextEnter.attr({
                class: key + '-text title',
                dy: function(d, i) {
                    var elem = imported.select('#svg-' + d.id);
                    var w = elem.node().getBoundingClientRect().width, h = elem.node().getBoundingClientRect().height;
                    var x = left ? barOffset - w - iconOffset : 2 * width - barOffset + iconOffset;
                    elem.attr('transform', 'translate(' + x + ',' + (y.range()[0] - offsetY + rectHeight / 2 - h / 2) + ')')
                    .style({visibility: 'visible',opacity: 0})
                    .animate({
                        duration: textDuration,
                        delay: function(d, i) {
                            return parentDelay + parentDuration
                        },
                        ease: 'linear'
                    })
                    .style({
                        opacity: 1
                    });
                    return (y.range()[0] - offsetY + rectHeight / 2 - h / 2);
                },
                'dominant-baseline': 'hanging ',
                dx: width,
                opacity: 0,
                'text-anchor': function(d) {
                    return left ? 'end' : 'begin';
                }
            }).text(function(d) {
                return d.name
            })
            
            titleTextEnter
            .animate({
                duration: parentDuration,
                delay: function(d, i) {
                    return parentDelay
                }
            })
            .attr({
                dx: function(d) {
                    return left ? barOffset - textOffset : 2 * width - barOffset + textOffset;
                },
                opacity: 1
            });




            //Parents
            var parentRect = elem
            .append('g')
            .append('rect')
            .attr({
                class: key + '-item ' + key + '-parent',
                width: 0,
                y: y.range()[0] - offsetY,
                height: rectHeight,
                x: width,
                fill: 'none'
            }).animate({
                ease: strongInOut,
                duration: parentDuration,
                delay: parentDelay
            })
            .attr({
                x: left ? barOffset : width,
                width: w(sum)
            });




            //Rectangles
            var rects = elem.append('g')
            .selectAll('.' + key + '-item')
            .data(subData);
            
            var enter = rects.enter().append('rect');
            enter.attr({
                class: key + '-item',
                width: 0,
                y: y.range()[0] - offsetY,
                height: rectHeight,
                x: width
            })

            //Rectangles first animation
            enter.animate({
                ease: strongInOut,
                duration: parentDuration,
                delay: parentDelay
            })
            .attr({
                x: function(d) {
                    var val;
                    
                    if (left) {
                        val = width - offset;
                        offset -= w(d);
                    } else {
                        offset -= w(d);
                        val = width + offset
                    }
                    
                    return val;
                },
                width: w
            
            })

            //Rectangles second animation
            enter.animate({
                delay: childrenDelay + parentDuration + parentDelay
            })
            .attr({
                y: function(d, i) {
                    return y(i)
                }
            
            })

            //Names
            var texts = elem.append('g')
            .selectAll('.' + key + '-text')
            .data(data[key]);
            
            var textEnter = texts.enter().append('text');
            textEnter.attr({
                class: key + '-text',
                dy: function(d, i) {
                    var elem = imported.select('#svg-' + d.id);
                    var w = elem.node().getBoundingClientRect().width, h = elem.node().getBoundingClientRect().height;
                    var x = left ? barOffset - w - iconOffset : 2 * width - barOffset + iconOffset;
                    elem.attr('transform', 'translate(' + x + ',' + (y(i) - h / 2 + rectHeight / 2) + ')')
                    .style({visibility: 'visible',opacity: 0})
                    .animate({
                        duration: textDuration,
                        delay: function(d, i) {
                            return parentDelay + parentDuration + preChildrenDelay + textDuration + i * 40
                        },
                        ease: 'linear'
                    })
                    .style({
                        opacity: 1
                    });
                    return y(i);
                },
                'dominant-baseline': 'hanging ',
                dx: width,
                opacity: 0,
                'text-anchor': function(d) {
                    return left ? 'end' : 'begin';
                }
            }).text(function(d) {
                return d.name
            })
            
            textEnter
            .animate({
                duration: textDuration,
                delay: function(d, i) {
                    return parentDelay + parentDuration + preChildrenDelay + i * 40
                }
            })
            .attr({
                dx: function(d) {
                    return left ? barOffset - textOffset : 2 * width - barOffset + textOffset;
                },
                opacity: 1
            });

            //Descriptions
            var descs = elem.append('g')
            .selectAll('.' + key + 'desc-text')
            .data(data[key]);
            
            
            var descEnter = descs.enter().append('text');
            
            descEnter.attr({
                class: key + 'desc-text',
                dy: function(d, i) {
                    return y(i);
                },
                'dominant-baseline': 'hanging',
                dx: function(d) {
                    return left ? barOffset - textOffset : 2 * width - barOffset + textOffset;
                },
                opacity: 0,
                'text-anchor': function(d) {
                    return left ? 'end' : 'begin';
                }
            }).text(function(d) {
                return d.desc
            })
            
            descEnter
            .animate({
                delay: function(d, i) {
                    return parentDelay + parentDuration + preChildrenDelay + textDuration + i * 40
                }
            })
            .attr({
                dy: function(d, i) {
                    return y(i) + rectHeight / 2;
                },
                opacity: 1
            });
        
        }
    }

}
