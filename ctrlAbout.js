myApp.controller('ctrlAbout', function ($scope, $http, $location) {
    $scope.names = ['aaron', 'cui'];

    $scope.add = function () {
        if ($scope.names.includes($scope.addMe)) return;
        $scope.names.push($scope.addMe);
    }

    $scope.remove = function (x) {
        $scope.names.splice(x, 1);
    }
    
});