angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  
  $scope.data = {};
  
  $scope.Init = function() {
    $scope.data.links = Links.getAll()
    .then(function (data) {
      $scope.data.links = data;
      console.log(data);
    })
    .catch(function(error) {
      console.error(error);
    });
  }();

  $scope.signout = function() {
    Auth.signout();
  };
  
});
