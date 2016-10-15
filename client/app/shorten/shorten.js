angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  
  $scope.link = {};

  $scope.addLink = function() { 
    Links.addOne($scope.link)
      .then(function () {
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signout = function() {
    Auth.signout();
  };

});
