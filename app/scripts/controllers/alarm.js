'use strict';

/**
 * @ngdoc function
 * @name clockApp.controller:AlarmController
 * @description
 * # AlarmController
 * Controller of the clockApp
 */
angular.module('clockApp')
  .controller('AlarmController', function () {
    this.alarms = [
      { time: '05:40', enabled: true },
      { time: '17:00', enabled: false }
    ];

    this.active_alarm = 0;
  });
