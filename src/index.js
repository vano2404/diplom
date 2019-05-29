// window.addEventListener('DOMContentLoaded', function(){
//     'use strict';
//     let calc = require('./parts/calc.js'),
//         forms = require('./parts/forms.js'),
//         furnishTabs= require ('./parts/furnishTabs.js'),
//         modalImage = require('./parts/modal.js'),
//         timer = require('./parts/timer.js'),
//         widnowTabs = require('./parts/windowTabs.js');
    
    
// });
import calc from './parts/calc';
import forms from './parts/forms';
import furnishTabs from './parts/furnishTabs';
import modalImage from './parts/modal';
import timer from './parts/timer';
import windowTabs from './parts/windowTabs';

window.addEventListener("DOMContentLoaded", function () {

    "use strict";

    
	calc();
    forms();
    furnishTabs();
    modalImage();
    timer();
    windowTabs();
});