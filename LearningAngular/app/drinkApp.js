var drinkApp = angular.module("drinkApp", []);

drinkApp.controller("AppCtrl", function($scope){
    $scope.ctrlFlavor = "blackberry"
});

drinkApp.directive("drink", function(){
    return {
        scope: {
            flavor:"="
        },
        template: '<input type="text" ng-model="flavor"/>'
    }
})
