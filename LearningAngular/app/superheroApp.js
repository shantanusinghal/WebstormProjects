var superheroApp = angular.module("superheroApp", []);

superheroApp.directive("hulk", function(){
    return {
        restrict:"A",
        link: function() {
            alert("I am stronger");
        }
    }
})

superheroApp.directive("flash", function(){
    return function() {
        alert("I am faster");
    }
})