(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope'];

  function mainController($scope) {

    $scope.alert='';

    $scope.moneySplitter = function(total, count) {
        var valuesArray = $scope.divide(total, count);
        var answer = $scope.validate(valuesArray, total, 0);
        $scope.alert = `The answer is: [${answer}]`;
        return answer;
    }

    $scope.divide = function(initialValue, count) {
      var returnArray = [];
      for (var x = 0; x < count; x++) {
        returnArray[x] = +((initialValue/count).toFixed(2));
      }
      return returnArray;
    }

    $scope.validate = function(array, total, xValue) {
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
        return $scope.validate(array, total, xValue);
      }
    }

  }

})();
