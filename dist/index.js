

var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "../pages/home.html",
    })
    .when("/home", {
      templateUrl: "../pages/home.html",
    })
    .when("/contact", {
      templateUrl: "../pages/contact.html",
    })
    .when("/map", {
      templateUrl: "../pages/map.html",
    })
    .when("/services", {
      templateUrl: "../pages/services.html",
    })
    .when("/admin", {
      templateUrl: "../pages/adminlogin.html",
    })
    .otherwise({
      redirectTo: "../pages/home.html",
    });
});
