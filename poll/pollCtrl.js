angular
    .module('newPoll')
    .factory('newPollDataFactory', function ($http) {
        return {
            getNewPollData: function () {
                return $http.get('../data/data.json');
            }
        }
    })
    .controller('PollCtrl', function ($scope, pollData) {
        'use strict';
        console.log(pollData);
    });