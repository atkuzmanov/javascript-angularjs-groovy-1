// References:
// https://spring.io/guides/gs/consuming-rest-angularjs/
angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('https://spring.io/guides/gs/consuming-rest-angularjs/').
        then(function(response) {
            $scope.greeting = response.data;
        });
});
