describe('mainController', function () {

      beforeEach(module('myApp.components.main'));

      var controllerInjector, myController;

      beforeEach(inject(function($controller){
        controllerInjector = $controller;
      }));

      describe('moneySplitter', function () {

        it('should divide 800 by 4', function () {
          var $scope = {};
          myController = controllerInjector('mainController', { $scope: $scope });
          expect($scope.moneySplitter(800.0, 4)).toEqual([200, 200, 200, 200]);
        });

        it('should divide 800 by 3', function () {
          var $scope = {};
          myController = controllerInjector('mainController', { $scope: $scope });
          expect($scope.moneySplitter(800.0, 3)).toEqual([266.66, 266.67, 266.67]);
        })
    });

});
