var viewApp = angular.module("viewApp", []);

viewApp.config(function($routeProvider){
    $routeProvider
        .when('/',
        {
            templateUrl: "app.html",
            controller: "ViewCtrl",
            resolve: {
                loadData: appCtrl.loadData
            }
        })
        .when('/pizza/:crust/:topping', {
            redirectTo: function(routeParams, path, search){
                return '/' + routeParams.crust
            }
        })
        .when('/deep', {
            template: '<div class="panel">Deep dish pizza served here</div>'
        })
        .otherwise({
            redirectTo: '/'
        })

})

viewApp.directive("error", function($rootScope){
    return {
        restrict: "E",
        template: '<div class="alert alert-box" ng-show="isError">Error: {{errorMessage}}</div>',
        link: function(scope){
            $rootScope.$on("$routeChangeError", function(event, current, previous, rejection){
                scope.isError = true;
                scope.errorMessage = rejection;
            })
        }
    }
})

var appCtrl = viewApp.controller("AppCtrl", function($rootScope){
    $rootScope.$on("$routeChangeError", function(event, current, previous, rejection){
        console.log(rejection);
    });
})

var viewCtrl = viewApp.controller("ViewCtrl", function($scope, $route){
    console.log($route);
    $scope.model = {
        message: "I'm a great scope"
    }
})

appCtrl.loadData = function($q, $timeout){
    var defer = $q.defer();
    $timeout(function(){
        defer.reject("Your network is down!");
    }, 3000);
    return defer.promise;
};