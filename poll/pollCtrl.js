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
        $scope.pollData = pollData.data.questions;
        var index = 0;
        $scope.showQuestions = true;
        $scope.newQuestion = $scope.pollData[0].question;
        $scope.options = $scope.pollData[0].options;
        $scope.reward = 0;
        $scope.totalReward = 0;
        $scope.nextQuestion = function() {
            $scope.totalReward += $scope.reward;
            console.log($scope.totalReward);
            index++;
            if (index >= $scope.pollData.length) {
                $scope.showQuestions = false;
                $scope.result = ($scope.totalReward * 100)/(10 * $scope.pollData.length)
            }
            else {
                $scope.newQuestion = $scope.pollData[index].question;
                $scope.options = $scope.pollData[index].options;
            }
        };
        $scope.selectedResponse = function (reward) {
            $scope.reward = reward;
            console.log(reward);
        }
    });