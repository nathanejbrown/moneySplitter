function moneySplitter (total) {
  var valuesArray = divideIntoThree(total);
}

function divideIntoThree (initalValue) {
  var a = b = c = +((initalValue/3).toFixed(2));
  return [a, b, c];
}
