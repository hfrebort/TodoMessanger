'use strict';

/**
 * @ngdoc function
 * @name todoMessengerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoMessengerApp
 */
angular.module('todoMessengerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
