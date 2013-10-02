var promiseApp = angular.module("promiseApp", []);

promiseApp.config(function($routeProvider){
    $routeProvider
        .when('/',
        {
            templateUrl: "app.html",
            controller: "AppCtrl"
        });
});

promiseApp.controller("AppCtrl", function($scope, $q){
    var defer = $q.defer();
    defer.promise
        .then(function(weapon){
            alert("You can have my " + weapon);
            return "bow";
        })
        .then(function(weapon){
            alert("And my " + weapon);
        })
        .then(function(){
            alert("Good luck killing the dragons (Y)");
        })
    defer.resolve("sword");

    $scope.model = { message: "This is a promise app!" };
});