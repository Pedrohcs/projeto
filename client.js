angular.module('meuApp', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: './templates/form.html',
            controller: 'mainController'
        }).otherwise( {
            redirectTo: '/'
        });
    });