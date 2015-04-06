//d3.select('g').animate({duration: 500, 'transform':'translate(480,250)rotate(0)'}) //rotate pie

(function() {
    Extra = {
        ease: function(t) {//strong in-out
            var b = 0;
            var c = 1;
            var d = 1;
            t /= d / 2;
            if (t < 1)
                return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            t -= 2;
            return c / 2 * (Math.sqrt(1 - t * t) + 1) + b;
        }
    };

    // Create a function that returns a particular property of its parameter.
// If that property is a function, invoke it (and pass optional params).
    F = function(name) {
        var v, params = Array.prototype.slice.call(arguments, 1);
        return function(o) {
            return (typeof (v = o[name]) === 'function' ? v.apply(o, params) : v);
        };
    };

// Return the first argument passed in
    I = function(d) {
        return d;
    };

    d3.selection.prototype.animate = function(opts) {
        var dur = opts.duration ? opts.duration : 300;
        var ease = opts.ease ? opts.ease : Extra.ease;
        delete opts.duration;
        var t = this.transition()/*.ease(ease)*/.duration(dur).attr(opts);
        return t;
    };
})();

var mode = null;
var m = [20, 20, 20, 20],
        w = window.innerWidth - m[1] - m[3] - 50,
        h = window.innerHeight - m[0] - m[2] - 180;

var x,
        y,
        duration = 1000,
        delay = 500;


var svg = d3.select("body>#vis").append("svg:svg")
        .attr("width", w + m[1] + m[3])
        .attr("height", h + m[0] + m[2])
        .append("svg:g")
        .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

/*var svg2 = d3.select("body").append("svg:svg")
        .attr("width", w + m[1] + m[3])
        .attr("height", h + m[0] + m[2])
        .append("svg:g")
        .attr("transform", "translate(" + m[3] + "," + m[0] + ")");*/

//svg = d3.selectAll('svg');

// A line generator, for the dark stroke.
var line = d3.svg.line()
        .interpolate("basis")
        .x(function(d) {
    return x(d.date);
})
        .y(function(d) {
    return y(d.price);
});

// A line generator, for the dark stroke.
var axis = d3.svg.line()
        .interpolate("basis")
        .x(function(d) {
    return x(d.date);
})
        .y(h);

// A area generator, for the dark stroke.
var area = d3.svg.area()
        .interpolate("basis")
        .x(function(d) {
    return x(d.date);
})
        .y1(function(d) {
    return y(d.price);
});




init = function(data, svg) {
    // var parse = d3.time.format("%b %Y").parse;


    // Nest stock values by symbol.
    var symbols = d3.nest()
            .key(function(d) {
        return d.key;
    }).entries(data);



    // Parse dates and numbers. We assume values are sorted by date.
    // Also compute the maximum price per symbol, needed for the y-domain.


    symbols.forEach(function(s, i) {
        /*s.values.forEach(function(d) {
         d.amr = +d.price;
         });*/

        s.sumAmr = d3.sum(s.values, function(d) {
            return d.value;
        });
    });

    /*symbols = symbols.reduce(function(p, c, i, a) {
        if (i < 9) {
            p.push(c);
        } else if (i == 9) {
            //p.push({key: 'OTHERS', sumAmr: c.sumAmr});
        } else {
            p[p.length - 1].sumAmr += c.sumAmr;
        }
        return p;
    }, []);*/

    // Sort by maximum price, descending.
    symbols.sort(function(a, b) {
        return b.sumAmr - a.sumAmr;
    });

    var y0 = 0;
    symbols.forEach(function(s,i) {
        s.y0 = y0;
        s.y1 = y0 += s.sumAmr;
        s.i = i;
    });


    var g = svg.selectAll("g")
            .data(symbols)
            .enter().append("svg:g")
            .attr("class", "symbol");
    svg.bar();
}


d3.selection.prototype.stackedBar = function() {
    var This = this;
    var g = this.selectAll(".symbol");
    var x = d3.scale.ordinal()
            .rangeRoundBands([0, w], .3);

    var y = d3.scale.linear()
            .rangeRound([h, 10]);

    x.domain(g.data().map(function(d) {
        return d.key;
    }));

    y.domain([0, d3.max(g.data(), function(d) {
            return d.y1;
        })]);


    if (This.attr('data-mode') == 'bar') {
        g.select('rect')
                .animate({
            y: function(d) {
                return y(d.y1);
            },
            height: function(d) {
                return y(d.y0) - y(d.y1);
            },
            duration: duration,
            x: (w - x.rangeBand()) / 2,
            width: x.rangeBand()
        });
        g.select('text')
                .animate({
            duration: duration,
            dx: function(d) {
                return (w - x.rangeBand()) / 2 + x.rangeBand() + 30 + (d.i*d.i)*0.3;
            },
            dy: function(d) {
                return (y(d.y1) + y(d.y0)) / 2;
            }
        });
    } else if (This.attr('data-mode') == 'donut') {

        g.selectAll("path")
                .transition()
                .duration(duration)
                .tween("arc", reverseArcTween)
                .each("end", function(d) {
                    d3.select(this.nextSibling).remove();
                    createStackedBar(this.parentNode, d.data);
                    d3.select(this).remove();
                });

        function reverseArcTween(d) {
            var arc = d3.svg.arc();
            var path = d3.select(this),
                    text = d3.select(this.parentNode.appendChild(this.nextSibling)),
                    x0 = (w - x.rangeBand()) / 2,
                    y0 = y(d.data.y0) - y(d.data.y1),
                    y1 = y(d.data.y0),
                    cc = d3.interpolateHsl('black', 'white');

            return function(t) {
                t = 1 - t;
                var r = h / 2 / Math.min(1, t + 1e-3),
                        a = Math.cos(t * Math.PI / 2),
                        xx = (-r + (a) * (x0 + x.rangeBand()) + (1 - a) * (w + h) / 2),
                        yy = (a * y1 + (1 - a) * h / 2),
                        f = {
                    innerRadius: (r - x.rangeBand()) * a + (r - 65) * (1 - a),
                    outerRadius: r,
                    startAngle: a * (Math.PI / 2 - y0 / r) + (1 - a) * (d.startAngle - Math.PI),
                    endAngle: a * (Math.PI / 2) + (1 - a) * (d.endAngle - Math.PI)
                };

                path.attr("transform", "translate(" + xx + "," + yy + ")");
                path.attr("d", arc(f));
                text.attr('fill', cc(t))
                        .attr("transform", "translate(" + arc.centroid(f) + ")translate(" + (xx + a * (x.rangeBand() / 2 + 30+ (d.data.i*d.data.i)*0.3)) + "," + (yy - a * 5) + ")rotate(" + ((f.startAngle + f.endAngle) / 2 + 3 * Math.PI / 2) * 180 / Math.PI + ")");
            };
        }


    } else {

        g.each(function(p,i) {
            createStackedBar(this, p);
        });

        function createStackedBar(g, p) {

            var that = d3.select(g);
            var r = that.selectAll("rect")
                    .data(function(d) {
                return [d];
            }).enter().append("rect")
                    .attr({
                x: (w - x.rangeBand()) / 2,
                height: function(d) {
                    return 0;
                },
                width: x.rangeBand()
            })
                    .style("fill", function(d){return color(d.i); });
            if (!This.attr('data-mode')) {
                r.attr('y', function(d) {
                    return y(0);
                }).transition().duration(duration);
            }
            r.attr({
                y: function(d) {
                    return y(d.y1);
                },
                height: function(d) {
                    return y(d.y0) - y(d.y1);
                }
            });

            var t = that.selectAll("text")
                    .data(function(d) {
                return [d];
            })
                    .enter().append("svg:text")
                    .text(function(d) {
                return d.key;
            })
                    .style('font-size', '10')
                    .attr('font-weight', 'bold')
                    .attr('dx', function(d) {
                return (w - x.rangeBand()) / 2 + x.rangeBand() + 30  + (d.i*d.i)*0.3;
            })
                    .attr('font-weight', 'bold')
                    .attr('text-anchor', 'middle');
            if (!This.attr('data-mode')) {
                t = t.attr('dy', function(d) {
                    return y(0);
                }).transition().duration(duration);
            }

            t.attr('dy', function(d) {
                return (y(d.y1) + y(d.y0)) / 2;
            });

        }
    }


    this.attr('data-mode', 'stackedbar');

};

d3.selection.prototype.bar = function() {
    var This = this;
    var g = this.selectAll(".symbol");

    var cc = d3.interpolateHsl('black', 'white');

    var _x = d3.scale.ordinal()
            .domain(g.data().map(function(d) {
        return d.key;
    }));

    var x = _x.rangeRoundBands([0, w], .3);
    var x1 = _x.rangeBand();

    var y = d3.scale.linear().range([h, 10])
            .domain([0, d3.max(g.data().map(function(d) {
            return d.sumAmr;
        }))]);

    if (This.attr('data-mode') === 'donut') {

        g.selectAll("path")
                .transition()
                .duration(duration)
                .tween("arc", reverseArcTween)
                .each("end", function(d) {
            d3.select(this.nextSibling).remove();
            createBar(this.parentNode, d.data);
            d3.select(this).remove();
        });

        function reverseArcTween(d) {
            var arc = d3.svg.arc();
            var path = d3.select(this),
                    text = d3.select(this.parentNode.appendChild(this.nextSibling)),
                    x0 = x(d.data.key),
                    y0 = h - y(d.data.sumAmr);

            return function(t) {
                t = 1 - t;
                var r = h / 2 / Math.min(1, t + 1e-3),
                        a = Math.cos(t * Math.PI / 2),
                        xx = (-r + (a) * (x0 + x.rangeBand()) + (1 - a) * (w + h) / 2),
                        yy = ((a) * h + (1 - a) * h / 2),
                        f = {
                    innerRadius: (r - x.rangeBand()) * a + (r - 65) * (1 - a),
                    outerRadius: r,
                    startAngle: a * (Math.PI / 2 - y0 / r) + (1 - a) * (d.startAngle - Math.PI),
                    endAngle: a * (Math.PI / 2) + (1 - a) * (d.endAngle - Math.PI)
                };

                path.attr("transform", "translate(" + xx + "," + yy + ")");
                path.attr("d", arc(f));
                text.attr('fill', cc(t))
                        .attr("transform", "translate(" + arc.centroid(f) + ")translate(" + xx + "," + (yy - (y0 / 2 + 15) * a) + ")rotate(" + ((f.startAngle + f.endAngle) / 2 + 3 * Math.PI / 2) * 180 / Math.PI + ")");
            };
        }
    } else if (This.attr('data-mode') === 'stackedbar') {


        g.select('rect')
                .animate({
            duration: duration,
            x: function(d) {
                return x(d.key);
            },
            y: function(d) {
                return y(d.sumAmr);
            },
            width: x1,
            height: function(d, i) {
                return  h - y(d.sumAmr);
            }
        });

        g.select('text')
                .animate({
            duration: duration,
            dx: function(d) {
                return x(d.sumAmr) + x1 / 2;
            },
            dy: function(d) {
                return y(d.sumAmr) - 10;
            }
        });
    } else {
        g.each(function(p) {
            createBar(this, p);
        });
    }

    function createBar(g, p) {
        var that = d3.select(g);
        var r = that.selectAll("rect")
                .data(function(d) {
            return [d];
        })
                .enter().append("svg:rect")
                .attr("x", function(d) {
            return x(d.key);
        })
                .attr("width", x1)
                .style("fill", function(d){return color(d.i)})
                .style("fill-opacity", 1);

        if (!This.attr('data-mode')) {
            r = r.attr("y", function(d) {
                return y(0);
            })
                    .attr("height", function(d) {
                return 0;
            }).transition().duration(duration);
        }
        r.attr("height", function(d) {
            return  h - y(d.sumAmr);
        }).attr('y', function(d) {
            return y(d.sumAmr);
        });

        var t = that.selectAll("text")
                .data(function(d) {
            return [d];
        })
                .enter().append("svg:text")
                .text(function(d) {
            return d.key;
        })
                .style('font-size', '10')
                .attr('font-weight', 'bold')
                .attr('dx', function(d) {
            return x(d.sumAmr) + x1 / 2;
        })
                .attr('text-anchor', 'middle');
        if (!This.attr('data-mode')) {
            t = t.attr('dy', function(d) {
                return y(0);
            }).transition().duration(duration)
        }
        t.attr('dy', function(d) {
            return y(d.sumAmr) - 10;
        });

    }

    this.attr('data-mode', 'bar');
}

d3.selection.prototype.donut = function() {
    var This = this;

    var cc = d3.interpolateHsl('black', 'white');

    var g = this.selectAll(".symbol");


    if (This.attr('data-mode') === 'bar') {
        var _x = d3.scale.ordinal()
                .domain(g.data().map(function(d) {
            return d.key;
        }));

        var x = _x.rangeRoundBands([0, w], .3);
        //var x1 = _x.rangeBand();

        var y = d3.scale.linear().range([h, 10])
                .domain([0, d3.max(g.data().map(function(d) {
                return d.sumAmr;
            }))]);

        g.selectAll("rect").remove();
    } else if (This.attr('data-mode') == 'stackedbar') {

        var x = d3.scale.ordinal()
                .rangeRoundBands([0, w], .3);

        var y = d3.scale.linear()
                .rangeRound([h, 10]);

        x.domain(g.data().map(function(d) {
            return d.key;
        }));

        y.domain([0, d3.max(g.data(), function(d) {
                return d.y1;
            })]);

        g.selectAll("rect").remove();
    }

    var pie = d3.layout.pie()
            .value(function(d) {
        return d.sumAmr;
    });

    var arc = d3.svg.arc();

    var p = g.append("svg:path")
            .style("fill", function(d,i) {
        return color(i);
    })
            .data(function() {
        return pie(g.data());
    })
            .transition()
            .duration(duration);

    if (This.attr('data-mode') == 'bar') {
        p.tween("arc", arcTween);
    } else if (This.attr('data-mode') == 'stackedbar') {
        p.tween("arc", arcStTween);
    }

    g.select("text").transition()
            .duration(duration)
            .attr("dy", ".31em");

    this.select("line").transition()
            .duration(duration)
            .attr("y1", 2 * h)
            .attr("y2", 2 * h)
            .remove();


    function arcTween(d) {
        var path = d3.select(this),
                text = d3.select(this.parentNode.appendChild(this.previousSibling)),
                x0 = x(d.data.key),
                y0 = h - y(d.data.sumAmr);
        text.attr({
            dx: 0,
            dy: 0,
            'font-weight': 'bold'
        });

        return function(t) {
            var r = h / 2 / Math.min(1, t + 1e-3),
                    a = Math.cos(-t * Math.PI / 2),
                    xx = (-r + (a) * (x0 + x.rangeBand()) + (1 - a) * (w + h) / 2),
                    yy = ((a) * h + (1 - a) * h / 2),
                    f = {
                innerRadius: (r - x.rangeBand()) * a + (r - 65) * (1 - a),
                outerRadius: r,
                startAngle: a * (Math.PI / 2 - y0 / r) + (1 - a) * (d.startAngle - Math.PI),
                endAngle: a * (Math.PI / 2) + (1 - a) * (d.endAngle - Math.PI)
            };

            path.attr("transform", "translate(" + xx + "," + yy + ")");
            path.attr("d", arc(f));
            text.attr('fill', cc(t)).attr("transform", "translate(" + arc.centroid(f) + ")translate(" + xx + "," + (yy - (y0 / 2 + 10) * a) + ")rotate(" + ((f.startAngle + f.endAngle) / 2 + 3 * Math.PI / 2) * 180 / Math.PI + ")");
        };
    }


    function arcStTween(d) {
        var arc = d3.svg.arc();
        var path = d3.select(this),
                text = d3.select(this.parentNode.appendChild(this.previousSibling)),
                x0 = (w - x.rangeBand()) / 2,
                y0 = y(d.data.y0) - y(d.data.y1),
                y1 = y(d.data.y0);
        text.attr({
            dx: 0,
            dy: 0,
            fill: '#eee',
            'font-weight': 'bold'
        });

        return function(t) {
            var r = h / 2 / Math.min(1, t + 1e-3),
                    a = Math.cos(t * Math.PI / 2),
                    xx = (-r + a * (x0 + x.rangeBand()) + (1 - a) * (w + h) / 2),
                    yy = (a * y1 + (1 - a) * h / 2),
                    f = {
                innerRadius: (r - x.rangeBand()) * a + (r - 65) * (1 - a),
                outerRadius: r,
                startAngle: a * (Math.PI / 2 - y0 / r) + (1 - a) * (d.startAngle - Math.PI),
                endAngle: a * (Math.PI / 2) + (1 - a) * (d.endAngle - Math.PI)
            };

            path.attr("transform", "translate(" + xx + "," + yy + ")");
            path.attr("d", arc(f));

            text.attr('fill', cc(t))
                    .attr("transform", "translate(" + arc.centroid(f) + ")translate(" + (xx + a * (x.rangeBand() / 2 + 30 + (d.data.i*d.data.i)*0.3)) + "," + (yy - a) + ")rotate(" + ((f.startAngle + f.endAngle) / 2 + 3 * Math.PI / 2) * 180 / Math.PI + ")");
        };
    }

    //setTimeout(donutExplode, duration + delay);
    this.attr('data-mode', 'donut');
};

var gdpData = [{"key":"US","value":14624.18},{"key":"CN","value":5745.13},{"key":"JP","value":5390.9},{"key":"DE","value":3305.9},{"key":"FR","value":2555.44},{"key":"GB","value":2258.57},{"key":"IT","value":2036.69},{"key":"BR","value":2023.53},{"key":"CA","value":1563.66},{"key":"RU","value":1476.91},{"key":"IN","value":1430.02},{"key":"ES","value":1374.78},{"key":"AU","value":1219.72},{"key":"MX","value":1004.04},{"key":"KR","value":986.26},{"key":"NL","value":770.31},{"key":"TR","value":729.05},{"key":"ID","value":695.06},{"key":"CH","value":522.44},{"key":"BE","value":461.33},{"key":"SE","value":444.59},{"key":"PL","value":438.88},{"key":"SA","value":434.44},{"key":"TW","value":426.98},{"key":"NO","value":413.51},{"key":"AT","value":366.26},{"key":"ZA","value":354.41},{"key":"AR","value":351.02},{"key":"IR","value":337.9},{"key":"TH","value":312.61}];

var colors = colorbrewer.Spectral[11];

var heatmapColour = d3.scale.linear()
                        .domain(d3.range(0.0, 1.01, 1 / (colors.length - 1)))
                        .range(colors).interpolate(d3.interpolateHsl);

var c = d3.scale.linear().domain([gdpData.length - 1, 0]).range([0, 1]);

var color = function(d){
    return heatmapColour(c(d));
}
/*var color = d3.scale.ordinal()
        .range(colorbrewer.Spectral[11])
        .domain(
        d3.nest()
        .key(function(d) {
    return d.channel
})
        .entries(gdpData)
        .map(function(d) {
    return d.key;
}));//.concat('OTHERS'));*/

init(gdpData, svg);
//init(data2, svg2);