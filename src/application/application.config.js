(function () {

  'use strict';

  angular
        .module('application')
        .config([
          '$locationProvider',
          configureLocationProvider
        ])
        .config([
          '$urlRouterProvider',
          configureUrlRouterProvider
        ])
        .config([
          '$stateProvider',
          configureStateProvider
        ]);

  function configureLocationProvider($locationProvider) {
    $locationProvider.html5Mode(true);
  }

  function configureUrlRouterProvider($urlRouterProvider) {
    $urlRouterProvider.when('/', '/periods');
  }

  function configureStateProvider($stateProvider) {

    $stateProvider

                  .state('application', {
                    abstract: true,
                    url: '/',
                    views: {
                      'applicationContainer': {
                        component: 'application'
                      }
                    }
                  })

                  .state('application.periods', {
                    url: 'periods',
                    views: {
                      'application@application': {
                        component: 'periodList'
                      }
                    }
                  })

                  .state('application.lost', {
                    url: '*path',
                    views: {
                      'application@application': {
                        component: 'lost'
                      }
                    }
                  });
  }
})();
