var app = angular.module('app_form_validation', ['ngRoute']);

app.controller('BasicFormValidation',['$scope', '$http', function($scope, $http){

        $scope.frequencies = [{"name" : "ABC", "id" : 23},{"name" : "DEF", "id" : 22}];

}]);

