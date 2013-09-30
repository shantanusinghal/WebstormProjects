var superApp = angular.module("superApp", []);

superApp.directive("superhero", function(){
    return {
        restrict: "E",
        scope: {},

        controller: function($scope){
            $scope.abilities = []

            this.addStrength = function(){
                $scope.abilities.push("strength");
            }

            this.addFlight = function(){
                $scope.abilities.push("flight");
            }

            this.addSpeed = function(){
                $scope.abilities.push("speed");
            }
        },

        link: function(scope, element){
            element.addClass("button");
            element.bind("mouseenter", function(){
                console.log(scope.abilities);
            });
        }
    }
});

superApp.directive("strength", function(){
    return {
        require: "superhero",
        link: function(scope, element, attrs, superheroCtrl){
            superheroCtrl.addStrength();
        }
    }
})

superApp.directive("flight", function(){
    return {
        require: "superhero",
        link: function(scope, element, attrs, superheroCtrl){
            superheroCtrl.addFlight();
        }
    }
})

superApp.directive("speed", function(){
    return {
        require: "superhero",
        link: function(scope, element, attrs, superheroCtrl){
            superheroCtrl.addSpeed();
        }
    }
})