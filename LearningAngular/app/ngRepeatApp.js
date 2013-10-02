var ngRepeatApp = angular.module("ngRepeatApp", []);

ngRepeatApp.controller("AppCtrl", function($scope){
    this.things = ["one", "two", "three"];
    return $scope.ctrl = this;
})