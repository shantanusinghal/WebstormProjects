var copyApp = angular.module("copyApp", []);

copyApp.factory("contacts", function(){
    return [
        {"firstName": "Shantanu", "lastName": "Singhal", "phone": "9028000182"},
        {"firstName": "Shivam", "lastName": "Singhal", "phone": "9019283299"},
        {"firstName": "Bill", "lastName": "Clinton", "phone": "123-123-4323"}
    ];
});

copyApp.controller("AppCtrl", function($scope, contacts){
    this.contacts = contacts;
    this.selectedContact = null;
    this.contactContact = null;

    this.selectContact = function(contact){
        this.selectedContact = contact;
        this.contactCopy = angular.copy(contact);
    };

    this.saveContact = function(){
        this.selectedContact.firstName = this.contactCopy.firstName;
    }

    return $scope.appCtrl = this;
})