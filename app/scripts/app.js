'use strict';
var ref = new Firebase('https://seedsofwisdom.firebaseio.com/');

/**
 * @ngdoc overview
 * @name gameofloveApp
 * @description
 * # gameofloveApp
 *
 * Main module of the application.
 */
angular
  .module('gameofloveApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'firebase'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('root', {
        url: '',
        templateUrl: 'views/root.html'
      })

      .state('podcasts', {
        url: '/podcasts',
        templateUrl: 'views/podcasts.html',
        controller: 'PodcastsCtrl'
      })

      .state('feedback', {
        url: '/feedback',
        templateUrl: 'views/feedback.html',
        controller: 'FeedbackCtrl'
      })
  })


  // .config(function ($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'views/main.html',
  //       controller: 'MainCtrl'
  //     })
  //     .when('/about', {
  //       templateUrl: 'views/about.html',
  //       controller: 'AboutCtrl'
  //     })
  //     .otherwise({
  //       redirectTo: '/'
  //     });
  // });
