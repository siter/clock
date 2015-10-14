'use strict';

/**
 * @ngdoc function
 * @name clockApp.controller:WorldClockController
 * @description
 * # WorldClockController
 * Controller of the clockApp
 */
angular.module('clockApp')
  .controller('WorldClockController', function () {
    this.cities = [
      'Chisinau',
      'Montreal',
      'Canton',
      'Moscow',
      'Novosibirsk',
      'Sydney'
    ];
  });
