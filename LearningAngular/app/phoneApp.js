var phoneApp = angular.module("phoneApp", []);

phoneApp.controller("AppCtrl", function($scope){
    $scope.leaveMessage = function(number, message){
        alert("Number [" + number + "] says '" + message + "'.");
    };

    this.sayHi = function(){
        alert("Hi!")
    };

    return $scope.AppCtrl = this;
});

phoneApp.directive("panel", function(){
    return {
        restrict: "E",
        transclude: true,
        template: '<div class="panel" ng-transclude>This is a panel component</div>'
    }
});

phoneApp.directive("phone", function(){
    return {
        restrict: "E",
        scope: {
            number: "@",
            network: "=",
            call: "&"
        },

        template: '<div class="panel">Number: {{number}}</div>' +
            '<div class="panel">Network: <select ng-model="network" ng-options="net for net in networks"></select></div>' +
            '<input type="text" ng-model="value"/>' +
            '<div class="button" ng-click="call({number:number, message:value})">Call</div>',

        link: function(scope){
            scope.networks = ['Airtel', 'Vodafone', 'Reliance'];
            scope.network = scope.networks[0];
        }
    }
});