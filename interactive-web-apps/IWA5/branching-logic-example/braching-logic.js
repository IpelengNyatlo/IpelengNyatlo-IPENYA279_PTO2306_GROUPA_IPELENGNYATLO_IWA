// These are global constants (Upper case and use underscores instead of space)
const MAX_NUMBER = 15;
const MIN_NUMBER = -5;
const STEP_AMOUNT = 5;

// Don't use classes for styling in JS, better use IDs or Data attributes (allow you to add custom attributes to your html that isn't part of   specification)
// select any attribute using square brackets 'use this selector to find this element in html'
const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');

// The below are event handlers and they can be declared as a function.

// use =, brackets,arrow and curly brackets to assign a behaviour, use = if you want to assign value to a piece of memory.
const subtractHandler = () => {
  const newValue = parseInt(number.value) - STEP_AMOUNT;
  number.value = newValue;

  // the add.disabled is > or = 15 and you subtract, remove the disabled from false. (i.e if its at max value, when you subtract, the disable behaviour is no longer applicable)
  if (add.disabled === true) {
    add.disabled = false;
  }

  if (newValue <= MIN_NUMBER) {
    subtract.disabled = true;
  }
};

// 'number.value + 1 means the current value number +1
const addHandler = () => {
  const newValue = parseInt(number.value) + STEP_AMOUNT;
  number.value = newValue;

  //   If new value is greater or = to max number...
  if (subtract.disabled === true) {
    subtract.disabled = false;
  }

  if (newValue >= MAX_NUMBER) {
    add.disabled = true;
  }

  //   number.value = number.value + 1;
};

// 'event listeners says: if this event happens, do this. Starts with a verb'
subtract.addEventListener("click", subtractHandler);
add.addEventListener("click", addHandler);

// console.log(user);
// const user = "Ipeleng";

// const id = faoahtaht;

// /**Link to id would {@link id} */

// throw new error("something wrong");
