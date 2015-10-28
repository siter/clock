'use strict';

var app = angular.module('clockApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngTouch',
  'angularMoment',
  'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/worldclock");

  $stateProvider
    .state('worldclock', {
      url: '/worldclock',
      templateUrl: 'views/worldclock.html',
      controller: 'WorldClockController',
      controllerAs: 'vm'
    })
    .state('alarm', {
      url: '/alarm',
      templateUrl: 'views/alarm.html',
      controller: 'AlarmController',
      controllerAs: 'vm'
    })
    .state('stopwatch', {
      url: '/stopwatch',
      templateUrl: 'views/stopwatch.html',
      controller: 'StopWatchController',
      controllerAs: 'vm'
    })
    .state('timer', {
      url: '/timer',
      templateUrl: 'views/timer.html',
      controller: 'TimerController',
      controllerAs: 'vm'
    });

});
