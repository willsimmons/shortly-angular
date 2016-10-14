angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.shorten = function() {
    Links.create($scope.link)
      .then(function () {
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };// Your code here
});
