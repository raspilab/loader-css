'use strict';

var drops = document.querySelectorAll('.drop'),
    loadButton = document.getElementById('load'),
    doTheClassThing = function() { 
      [].forEach.call(drops, function(el, ind) {
        if (el.classList.contains('spinning')) {
          el.classList.remove('spinning');
        } else {
          el.classList.add('spinning');
        }
      })
    };

setInterval(doTheClassThing, 3000);