angular.module('myApp')
.controller('mainCtrl', function($scope) {
    $scope.alertThis = function(toBeAlerted) {
        alert(toBeAlerted);
    }
    $scope.logThis = function(toBeLogged) {
        console.log(toBeLogged);
    }
})