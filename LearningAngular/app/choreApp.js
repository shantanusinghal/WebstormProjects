var choreApp = angular.module("choreApp", []);

choreApp.controller("ChoreCtrl", function($scope){
    $scope.logChore = function(chore){
        alert(chore + " is done.")
    }
})

choreApp.directive("kid", function(){
    return {
        restrict: "E",
        scope: {
            done: "&"
        },
        template: '<input type="text" ng-model="chore"/> ' +
            '{{chore}} ' +
            '<div class="button" ng-click="done({chore:chore})">I\'m done!</div>'
    }
})