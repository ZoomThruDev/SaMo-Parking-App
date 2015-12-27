var samoPark = angular.module('samoPark', ['ngRoute', 'lumx','about','map','table'])

samoPark.controller('mainCtrl', mainCtrl)
samoPark.config(function ($routeProvider) {
    $routeProvider.when('/map', {
      templateUrl: 'views/map.html',
      controller: 'mapCtrl'
    });
    $routeProvider.when('/table', {
      templateUrl: 'views/table.html',
      controller: 'tableCtrl'
    });
    $routeProvider.when('/about', {
      templateUrl: 'views/about.html',
      controller: 'aboutCtrl'
    });
    $routeProvider.otherwise({
      templateUrl: 'views/table.html',
      controller: 'tableCtrl'
    });
  });



function mainCtrl($http, $scope) {
    
}
