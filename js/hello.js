Hello = function(){
    $("#hello .intro-text>span").addClass('slabtext');
    $("#hello .intro-text").slabText();
    TweenMax.to($(".overlay"), 1, {opacity: 1, delay: 0.3});
}