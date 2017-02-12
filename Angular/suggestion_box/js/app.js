var app = angular.module("SuggestionBox", ['ngRoute']);
app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('/home',{
        controller: "HomeController",
        templateUrl: "views/home.html"
    })
    .when('/suggestion/:id',{
        controller: "SuggestionController",
        templateUrl: "views/suggestion.html"
    })
    .when('/about', {
        controller: "AboutController",
        templateUrl: "views/about.html"
    })
    .otherwise({
        redirectTo: '/home'
    });
}]);