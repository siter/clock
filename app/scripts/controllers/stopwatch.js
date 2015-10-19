'use strict';

/**
 * @ngdoc function
 * @name clockApp.controller:StopwatchController
 * @description
 * # StopwatchController
 * Controller of the clockApp
 */
angular.module('clockApp')
  .controller('StopwatchController', function StopwatchController() {
    this.laps = [ '05:40', '17:00' ];

    this.running = false;

    this.start = start;

    function start(){
      this.running = true;
    }

    function lap(){

    }

  });
