var twitterApp = angular.module("twitterApp", []);

twitterApp.controller("AppCtrl", function($scope){
    $scope.loadMoreTweets = function(){
        alert("Loading more tweets");
    }
})

twitterApp.directive("enter", function(){
    return function(scope, element, attrs){
        element.bind("mouseenter", function(){
            scope.$apply(attrs.enter);
        })
    }
})