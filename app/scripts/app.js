'use strict';

/**
 * @ngdoc overview
 * @name issouFrontApp
 * @description
 * # issouFrontApp
 *
 * Main module of the application.
 */
angular
  .module('issouFrontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
