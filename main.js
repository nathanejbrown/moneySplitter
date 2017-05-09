function moneySplitter (total) {
  var valuesArray = divideIntoThree(total);
  console.log(validate(valuesArray, total, 0));
}

function divideIntoThree (initalValue) {
  var a = b = c = +((initalValue/3).toFixed(2));
  return [a, b, c];
}

function validate (array, total, xValue) {
  let operator = '';
  var sum = array.reduce(function add(a, b) {
    return a + b;
  }, 0);

  if (sum === total) {
    return array;
  }

  if (sum > total) {
    array[xValue] -= .01;
  } else if (sum < total) {
    array[xValue] += .01;
  }
  if (xValue === array.length) {
    xValue = 0;
  } else xValue++;
  return validate(array, total, xValue);
}

moneySplitter(800.0);
