$(function(){"use strict";$(".toggle-sidebar").on("click",function(){$(".content-area, .sidebar").toggleClass("no-sidebar")}),$(".toggle-submenu").on("click",function(){$(this).find(".fa-angle-right").toggleClass("down"),$(this).next(".child-links").slideToggle(600)})});const myMap=new Map,mySet=new Set;