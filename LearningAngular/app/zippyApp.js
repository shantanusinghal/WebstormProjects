var zippyApp = angular.module("zippyApp", []);

zippyApp.run(function($templateCache){
    $templateCache.put("zippy.html", "<div><h3 ng-click='toggleContent()'>{{title}}</h3><div ng-show='isContentVisible' ng-transclude></div></div>");
})

zippyApp.directive("zippy", function($templateCache){
    console.log($templateCache.get("zippy.html"));
    return {
        restrict: "E",
        scope: {
            title: "@"
        },
        transclude: true,
        templateUrl: "zippy.html",

        link: function(scope){
            scope.isContentVisible = false;
            scope.toggleContent = function(){
                scope.isContentVisible = !scope.isContentVisible;
            }
        }
    };
});