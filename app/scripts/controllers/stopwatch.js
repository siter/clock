
'use strict';

/**
 * @ngdoc function
 * @name clockApp.controller:StopwatchController
 * @description
 * # StopwatchController
 * Controller of the clockApp
 */
angular.module('clockApp')
  .controller('StopWatchController', StopWatchController);

function StopWatchController($interval) {
  var vm = this;

  vm.total = 0;

  vm.laps = [];
  vm.current_lap = 0;

  vm.running = false;

  vm.start = start;
  vm.stop = stop;
  vm.lap = lap;
  vm.reset = reset;

  var current_timer = null;
  var timer_interval = 10;

  function update_time(){
    vm.current_lap += timer_interval;
    vm.total += timer_interval;
  }

  function start(){
    vm.running = true;
    current_timer = $interval(update_time, timer_interval);
  }

  function stop(){
    vm.running = false;
    $interval.cancel(current_timer);
    vm.lap();
  }

  function lap(){
    var this_lap = vm.current_lap;
    vm.laps.unshift(this_lap);
    vm.current_lap = 0;
  }

  function reset(){
    vm.total = 0;
    vm.laps = [];
  }

}

StopWatchController.$inject = ['$interval'];
