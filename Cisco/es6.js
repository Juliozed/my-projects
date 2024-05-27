// ES6 Module = an external file that contains reusable code that can be imported innto other js files. Write reusable code for many different apps.Can contain variables, classes, functions ... and more Introduced as pasrt of ECMAscript 2015.

import { PI, getCircumference, getArea, getVolume } from "./es6Examples.js";

console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm2`);
console.log(`${volume.toFixed(2)}cm3`);
