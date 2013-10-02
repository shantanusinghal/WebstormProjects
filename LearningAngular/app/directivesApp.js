var directivesApp = angular.module("directivesApp", []);

directivesApp.directive("clock", function(){
    return {
        restrict: "E",
        scope: {
            timezone: "@"
        },
        template: '<div>12:00pm {{timezone}}</div>'
    }
})

directivesApp.directive("panel", function(){
    return {
        restrict: "E",
        transclude: true,
        scope: {
            title: "@"
        },
        template: '<div style="border: 3px solid #000000">' +
            '<div class="alert-box">{{title}}</div>' +
            '<div ng-transclude></div>' +
            '</div>'
    }
})