$(function() {
'use strict'
var winh   = $(window).height(),
    upperh = $('.upper-bar').innerHeight(),
    navh   = $('.navbar').innerHeight();

    $('.carousel-item').height(winh-(upperh + navh))

})
