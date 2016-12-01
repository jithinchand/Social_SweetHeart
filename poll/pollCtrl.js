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
        $scope.checked = true;
        $scope.nextQuestion = function() {
            $scope.checked = true;
            $scope.totalReward += $scope.reward;
            console.log($scope.totalReward);
            index++;
            if (index >= $scope.pollData.length) {
                index = 0;
                $scope.showQuestions = false;
                $scope.result = ($scope.totalReward * 100)/(10 * $scope.pollData.length);
                if ($scope.result >= 85) {
                    $scope.resultData = "BOOOOMM !! YOU are a SOCIAL SWEETHEART; Can't get better than this Mate !!" +
                        "- Hurry up and apply; The World doesn't wait for you !! Some One might occupy your seat in Social Sweetheart. You can find your matching job on the link below this web page.";
                }
                else if ($scope.result <= 85 && $scope.result >= 65) {
                    $scope.resultData = "Heyy, It's OHKAYY .... YOU are a Social SemiSweet Heart; You can Re-test and become SWEETER by clicking the button below !!" +
                        "- You may be the guy for the companies similar to Social Sweetheart, But not for the Social Sweetheart. There's a difference !!";
                }
                else {
                    $scope.resultData = "SORRY DUDEEE ... You are a Social Bitter Heart; and I hope you know the reason !!" +
                        "- The company has its offices in Dortmund and Munich. Please avoid visiting even the premises of Social sweetheart.";
                }
            }
            else {
                $scope.newQuestion = $scope.pollData[index].question;
                $scope.options = $scope.pollData[index].options;
            }
        };
        $scope.selectedResponse = function (reward) {
            $scope.checked = false;
            $scope.reward = reward;
            console.log(reward);
        }
        $scope.resetQuestion = function () {
            $scope.showQuestions = true;
            $scope.newQuestion = $scope.pollData[0].question;
            $scope.options = $scope.pollData[0].options;
        }
    });