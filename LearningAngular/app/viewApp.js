var viewApp = angular.module("viewApp", []);

viewApp.config(function($routeProvider){
    $routeProvider
        .when('/',
        {
            templateUrl: "app.html",
            controller: "AppCtrl",
            resolve: {
                viewApp: function($q){}

            }
        })
})

viewApp.controller("AppCtrl", function($scope){
    $scope.model = {
        message: "I'm a great scope"
    }
})