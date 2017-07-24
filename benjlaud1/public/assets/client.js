console.log('client');
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
    .when('/main', {
        templateUrl: '../views/routes/main.html',
        controller: 'mainController',
        controllerAs: 'mc'
    })
    .when('/code', {
        templateUrl: '../views/routes/code.html',
        controller: 'codeController',
        controllerAs: 'cc'
    })
    .when('/react', {
    })
    .otherwise('/main');
    $locationProvider.html5Mode(true);
}]); // end myApp.config