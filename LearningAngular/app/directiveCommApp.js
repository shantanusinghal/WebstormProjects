var directiveCommApp = angular.module("directiveCommApp", []);

directiveCommApp.directive("country", function(){
    return {
        restrict: "E",
        controller: function(){
            this.makeAnnouncement = function(message){
                console.log("Country says: " + message);
            };
        }
    };
});

directiveCommApp.directive("state", function(){
    return {
        restrict: "E",
        require: "^country",
        controller: function(){
            this.makeLaw = function(law){
                console.log("Law is: " + law);
            };
        },
        link: function(scope, element, attrs, countryCtrl) {
            countryCtrl.makeAnnouncement("This state is awesome!");
        }
    };
});

directiveCommApp.directive("city", function(){
    return {
        restrict: "E",
        require: ["^country", "^state"],
        link: function(scope, element, attrs, ctrls){
            ctrls[0].makeAnnouncement("This city rocks \\m/");
            ctrls[1].makeLaw("Jump higher!");
        }
    };
});

