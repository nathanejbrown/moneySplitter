function moneySplitter (total, count) {
  var valuesArray = divide(total, count);
  console.log(validate(valuesArray, total, 0));
}

function divide (initialValue, count) {
  var returnArray = [];
  for (x = 0; x < count; x++) {
    returnArray[x] = +((initialValue/count).toFixed(2));
  }
  return returnArray;
}

function validate (array, total, xValue) {
  var sum = 0;

  array.forEach((number) => {
    sum += number;
  })

  sum = +(sum.toFixed(2));

  if (sum == total) {
    return array;
  } else {
    if (sum > total) {
      array[xValue] = +((array[xValue] -.01).toFixed(2));
    } else if (sum < total) {
      array[xValue] = +((array[xValue] +.01).toFixed(2));
    }
    if (xValue === array.length) {
      xValue = 0;
    } else xValue++;
    return validate(array, total, xValue);
  }
}

moneySplitter(800.0, 3);
moneySplitter(800.0, 4);
moneySplitter(800.7, 3);
