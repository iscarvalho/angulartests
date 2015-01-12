'use strict';

/**
 * @ngdoc function
 * @name apptestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the apptestApp
 */
angular.module('apptestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
