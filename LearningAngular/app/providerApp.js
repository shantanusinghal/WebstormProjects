var providerApp = angular.module("providerApp", []);

providerApp.provider("game", function(){
    var type;
    return {
        setType: function(value){
            type = value;
        },
        $get: function(){
            return {
                title: type + "Craft"
            }
        }
    };
});

providerApp.config(function(gameProvider){
    gameProvider.setType("War")
})

providerApp.controller("AppCtrl", function($scope, game){
    $scope.title = game.title;
});