// These are global constants (Upper case and use underscores instead of space)
const MAX_NUMBER = 15;
const MIN_NUMBER = -5;
const STEP_AMOUNT = 5;

// const is used to store things in memory so that they can be recalled later on
// Don't use classes for styling in JS, better use IDs or Data attributes (allow you to add custom attributes to your html that isn't part of   specification)
// select any attribute using square brackets 'use this selector to find this element in html'
const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');

console.log(typeof "123" + typeof 123, typeof true);

// In JS, everything from the dom is a string = strings are characters (numbers,words,). They need to be put in quotation marks

// Console log confirms whether it find the values of the html elements you put in the memory/box/const
// console.log(number, subtract, add);

// The below are event handlers and they can be declared as a function.

// use =, brackets,arrow and curly brackets to assign a behaviour, use = is you want to assign value to a piece of memory.

// 'event listeners says: if this event happens, do this. Starts with a verb'
subtract.addEventListener("click", subtractHandler);
add.addEventListener("click", addHandler);
