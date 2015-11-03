'use strict';

var app = angular.module('clockApp');

function TimerService($interval) {
  // 1 second (in milliseconds)
  const UPDATE_INTERVAL = 100;

  let js_interval;
  let t = {
    hours: 0,
    minutes: 3,
    seconds: 0
  };

  function init(){
    t.active = false;
    t.paused = false;

    init_time();
  }

  function init_time() {
    t.countdown = t.set = (t.minutes * 60 + t.hours * 60 * 60 ) * 1000;
  }

  init();

  function update_time(){
    t.countdown -= UPDATE_INTERVAL;

    if (t.countdown <= 0) {
      t.countdown = 0;
      $interval.cancel(js_interval);
    }
  }

  function start(){
    init();
    t.active = true;

    js_interval = $interval(() => {
      update_time();
    }, UPDATE_INTERVAL);
  }

  function done(){
    $interval.cancel(js_interval);
    init();
  }

  function pause(){
    $interval.cancel(js_interval);
    t.paused = true;
  }

  function resume(){
    t.paused = false;
    start();
  }

  this.timer = t;

  this.done = done;
  this.start = start;
  this.pause = pause;
  this.resume = resume;
}
TimerService.$inject = ['$interval'];
app.service('TimerService', TimerService);


function TimerController($scope, $injector) {

  let TimerService = $injector.get('TimerService');
  let moment = $injector.get('moment');

  $scope.timer = TimerService.timer;
  $scope.moment = moment;

  $scope.onStart = () => {
    TimerService.start();
  };

  $scope.onPause =
    () => TimerService.pause();

  $scope.onDone =
    () => TimerService.done();

  $scope.onResume =
    () => TimerService.resume();

  $scope.format =
    time => moment(time).utc().format("HH:mm:ss.S");
}
TimerController.$inject = ['$scope', '$injector'];
app.controller('TimerController', TimerController);
