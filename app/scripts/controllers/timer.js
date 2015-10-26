'use strict';

var app = angular.module('clockApp');

function TimerService($interval) {
  // 1 second (in millis)
  const TIMER_INTERVAL = 1000;

  let js_interval;
  let timer = {};

  function init(){
    timer.time_set = 20000;
    timer.time_left = timer.time_set;
    timer.hours = 6;
    timer.minutes = 10;
    timer.active = false;
    timer.paused = false;
  }

  init();

  function update_time(){
    timer.time_left -= TIMER_INTERVAL;

    if (timer.time_left <= 0) {
      timer.time_left = 0;
      timer.finished = true;
      $interval.cancel(js_interval);
    }
  }

  function start(){
    var service = this;

    js_interval = $interval(update_time.bind(service), TIMER_INTERVAL);
    timer.active = true;
  }

  function done(){
    $interval.cancel(js_interval);
    init();
  }

  function pause(){
    $interval.cancel(js_interval);
    timer.paused = true;
  }

  function resume(){
    timer.paused = false;
    start();
  }

  this.timer = timer;

  this.done = done;
  this.start = start;
  this.pause = pause;
  this.resume = resume;
}
TimerService.$inject = ['$interval'];
app.service('TimerService', TimerService);


function TimerController($scope, TimerService) {
  $scope.timer = TimerService.timer;

  $scope.onStart = function () {
    TimerService.start();
  };

  $scope.onPause = function () {
    TimerService.pause();
  };

  $scope.onDone = function () {
    TimerService.done();
  };

  $scope.onResume = function () {
    TimerService.resume();
  };
}
TimerController.$inject = ['$scope', 'TimerService'];
app.controller('TimerController', TimerController);
