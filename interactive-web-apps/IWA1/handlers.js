// When you get to the main file, they would import the below functions as import {addHandler, subtractHandler} from './handlers.js'
export const subtractHandler = () => {
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
export const addHandler = () => {
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
