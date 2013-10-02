var passwordApp = angular.module("passwordApp", []);

passwordApp.directive("dumbPassword", function(){
    var anElement = angular.element('<div>{{model.input}}</div></div>');
    this.link = function(scope, element){
        scope.$watch("model.input", function(value){
            if(value==="password"){
                element.children(1).toggleClass("alert-box alert");
            };
        });
    }
    return {
        restrict: "E",
        replace: true,
        template: '<div>' +
            '<input type="text" ng-model="model.input"/>',

        compile: function(templateElement) {
            templateElement.append(anElement);
            return link;
        }
    }
});