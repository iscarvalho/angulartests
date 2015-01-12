'use strict';

/**
 * @ngdoc function
 * @name apptestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the apptestApp
 */
angular.module('apptestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
