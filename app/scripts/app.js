'use strict';

/**
 * @ngdoc overview
 * @name clockApp
 * @description
 * # clockApp
 *
 * Main module of the application.
 */
angular
  .module('clockApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/worldclock', {
        templateUrl: 'views/worldclock.html',
        controller: 'WorldClockController',
        controllerAs: 'vm'
      })
      .when('/alarm', {
        templateUrl: 'views/alarm.html',
        controller: 'AlarmController',
        controllerAs: 'vm'
      })
      .when('/stopwatch', {
        templateUrl: 'views/stopwatch.html',
        controller: 'StopWatchController',
        controllerAs: 'vm'
      })
      .when('/timer', {
        templateUrl: 'views/timer.html',
        controller: 'TimerController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/worldclock'
      });
  });
