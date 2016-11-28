angular.module('gui', ['ngRoute', 'newPoll'])
    .config(function ($routeProvider) {
        'use strict';
        $routeProvider
            .when('/poll', {
                controller : 'PollCtrl',
                templateUrl: 'poll/poll.html',
                resolve: {
                    pollData: function (newPollDataFactory) {
                        return newPollDataFactory.getNewPollData();
                    }
                }
            })
            .otherwise({
                redirectTo : 'index.html'
            });
    });