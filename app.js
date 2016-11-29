angular.module('gui', ['ngRoute', 'newPoll'])
    .config(function ($routeProvider) {
        'use strict';
        $routeProvider
            .when('/home', {
                templateUrl: 'home/home.html'
            })
            .when('/poll', {
                controller : 'PollCtrl',
                templateUrl: 'poll/poll.html',
                resolve: {
                    pollData: function (newPollDataFactory) {
                        return newPollDataFactory.getNewPollData();
                    }
                }
            })
            .when('/about', {
                templateUrl: 'about/about.html'
            })
            .otherwise({
                redirectTo : '/home'
            });
    });