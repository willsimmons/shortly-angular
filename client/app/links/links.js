angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  
  $scope.data = {};
  
  $scope.loading = function() {
    $scope.data.links = Links.getAll()
    .catch(function(error) {
      console.error(error);
    });
  }();
  
});
