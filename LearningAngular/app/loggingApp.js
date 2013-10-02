var loggingApp = angular.module("loggingApp", []);

loggingApp.run(function($rootScope, $log){
    $rootScope.$log = $log;
})

loggingApp.controller("AppCtrl", function($scope){
    $scope.log = function(event){
        console.log(event);
    }
})