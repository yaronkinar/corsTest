'use strict';

/**
 * @ngdoc function
 * @name corsTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the corsTestApp
 */
angular.module('corsTestApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get("https://api.myjson.com/bins/b9pkl").then(function(response) {
      $scope.myData = response.data;
      console.log($scope.myData.data)

    });
   // https://api.myjson.com/bins/sja45

  });
