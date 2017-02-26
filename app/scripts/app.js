'use strict';

/**
 * @ngdoc overview
 * @name corsTestApp
 * @description
 * # corsTestApp
 *
 * Main module of the application.
 */
angular
  .module('corsTestApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider,$httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
    $httpProvider.defaults.useXDomain = true;

  });
