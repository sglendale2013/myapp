var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $http.get("todos.php").then(function(response) {
    $scope.myData = response.data.tasks;
  });
});

//To invoke a directive use <app1></app1> this can be used standalone (as an element), as an attribute  (<div app1></div>) or as a class
//<div class = "app1"></div>
