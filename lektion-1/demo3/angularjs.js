let app = angular.module("demoApp", ["ngRoute"])

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "views/home.html",
        controller: "homeController",
        activetab: "home"
    })
    .when("/about", {
        templateUrl: "views/about.html",
        controller: "aboutController",
        activetab: "about"
    })
    .when("/contact", {
        templateUrl: "views/contact.html",
        controller: "contactController",
        activetab: "contact"
    })
})

app.controller("homeController", function($scope) {
    $scope.pageTitle = "Home";
})
.controller("aboutController", function($scope) {
    $scope.pageTitle = "About";
})
.controller("contactController", function($scope) {
    $scope.pageTitle = "Contact";
})