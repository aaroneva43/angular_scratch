var app = angular.module('angularApp', []);
app.controller('mainCtrl', function ($scope, $http, $location) {
    console.log($location.absUrl());
    $http.get("welcome.html")
        .then(function (response) {
            console.log(response.data)
        });

    $scope.names = ['aaron', 'cui'];

    $scope.add = function () {
        if ($scope.names.includes($scope.addMe)) return;
        $scope.names.push($scope.addMe);
    }

    $scope.remove = function (x) {
        $scope.names.splice(x, 1);
    }
});