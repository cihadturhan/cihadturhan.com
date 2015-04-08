Contact = function(){

    var contact = CV.contact;

    
var _nodes = contact.links;
var _passiveNodes = contact.passiveLinks;

var _links = [{source: 1, target: _nodes.length - 1}];

_nodes.forEach(function(d, i){
      (i!=0) && _links.push({source: 0, target: i}); 
      (i!=0 && i<_nodes.length-1) && _links.push({source: i, target: i+1});
});

_nodes = _nodes.concat(_passiveNodes);

var data = {
    nodes: [],
    links: []
};

$("#contact-cv").attr('href', contact.cv);

var width = $("#contact-svg-container").width(),
    height = $("#contact-svg-container").height(),
    root;

_nodes.forEach(function(d,i){
    if(i==0){
        d.x = width/2;
        d.y = height/2; 
        //d.fixed = 1;
    }else{
        var angle = 2*Math.PI*(i-1)/(_nodes.length - 1);
        d.x = width/2 + 250*Math.cos(angle)
        d.y = height/2 + 250*Math.sin(angle)
    }
})

var force = d3.layout.force()
    .nodes(data.nodes)
    .links(data.links)
    .gravity(0.1)
    .size([width, height])
    .linkDistance(function(d) {
        return d.source == 0 ? 300: 150; 
    })  
    .linkStrength(function(d) {
        return  d.source == 0 ? 0: 0.9; 
    }) 
    .charge(function(d, i){
        return i==0? 0 : -1000;
    })
    .on("tick", tick);

var svg = d3.select("#contact-svg-container").append("svg")
    .attr("width", width)
    .attr("height", height)

    svg.attr({
        'xmlns': 'http://www.w3.org/2000/svg',
        'xmlns:xmlns:xlink': 'http://www.w3.org/1999/xlink', 
        version: '1.1'
    });

var gLink = svg.append('g').attr('class', 'g-link');
var gNode = svg.append('g').attr('class', 'g-node');

var link = gLink.selectAll(".link"),
    node = gNode.selectAll(".node");

update();

function update() {

    force.start();

    link = link.data(data.links, function (d) {
        return d.source.index + '-' + d.target.index
    });

    link.enter().append("line")
        .attr("class", function (d) {
        return d.source.index == 0 ? "link parent-link" : 'link children-link'
    });

    link.exit().remove();
    
     node = node.data(data.nodes, function (d) {
        return d.index;
    })
     

    g = node.enter()
        .append("g")
        .attr('class', 'gnode')
        .attr("transform", function(d){ return "translate(" + d.x + "," + d.y + ")" })
        .call(force.drag)

    node.exit().remove();
        
    //circle
    g.append('circle').attr("class", "node")
        .attr("r", function (d) {
        return d.size;
    })
    .style('fill', function(d){
        return d.color;
    }).
    style('stroke', function(d){ return d3.rgb(d.color).darker(1.2)})
   .attr('title', function(d){
        return d.name
    })

  //icon+link
     g.append("svg:a")
    .attr("xlink:href", function(d){return d.href;})
    .attr("target", "_blank")
    .append("image")
      .attr("xlink:href", function(d){return d.icon})
      .attr("x", function (d) {
        return -d.size;
    })
      .attr("y", function (d) {
        return -d.size;
    })
      .attr("width", function(d){return 2*d.size})
      .attr("height",  function(d){return 2*d.size});

}

function tick() {
    link.attr("x1", function (d) {
        return d.source.x;
    })
        .attr("y1", function (d) {
        return d.source.y;
    })
        .attr("x2", function (d) {
            return d.target.x;
    })
        .attr("y2", function (d) {
        return d.target.y;
    });
    
    node.attr("transform", function(d){ return "translate(" + d.x + "," + d.y + ")" })
}

//update();
var max = _nodes.length,
    i = 0;
var timer = setInterval(function () {

    var _node = _nodes.shift();
    data.nodes.push(_node);

    var _link = _links.filter(function (d) {
        return d.target == i;
    });
    
    _link.forEach(function(d){
        data.links.push(d)
    });

    update();
    
    if (++i == max) {
        clearInterval(timer);
    }
}, 300)

}