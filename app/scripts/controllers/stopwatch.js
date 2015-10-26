'use strict';

var app = angular.module('clockApp');

function StopWatchService($interval) {
  let state = {
    total: 0,
    laps: [],
    current_lap: 0,
    running: false
  };

  this.state = state;

  let timer_interval = 10;
  let current_timer = null;

  function update_time(){
    state.current_lap += timer_interval;
    state.total += timer_interval;
  }

  state.start = function (){
    var service = this;

    state.running = true;
    current_timer = $interval(update_time.bind(service), timer_interval);
  };

  state.stop = function (){
    state.running = false;
    $interval.cancel(current_timer);
  };

  state.lap = function (){
    var this_lap = state.current_lap;
    state.current_lap = 0;
    state.laps.unshift(this_lap);
  };
}

StopWatchService.$inject = ['$interval'];
app.service('StopWatchService', StopWatchService);

function StopWatchController($scope, StopWatchService) {
  $scope.timer = StopWatchService.state;
}

StopWatchController.$inject = ['$scope','StopWatchService'];
app.controller('StopWatchController', StopWatchController);
