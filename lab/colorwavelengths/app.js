window.onload = function() {
    //var r = Raphael("holder", 700, 700);
    var r = d3.select('#holder').append('svg')
            .attr({
                width: 800,
                height: 600
            });

    var g1 = r.append('g');

    for (var i = -1; i < 3; i++) {
        g1.append('path')
                .attr({
                    d: 'M' + (113 + i * 250) + ',420c0-69,56-125,125-125c69,0,125,56,125,125',
                    fill: 'none',
                    stroke: 'black',
                    'stroke-width': 10
                });

        setInterval(function() {
            g1.attr('transform', 'translate(0,0)')
                    .transition()
                    .duration(1000)
                    .ease(d3.ease('linear'))
                    .attr('transform', 'translate(-250,0)')
        }, 1000);
    }
}