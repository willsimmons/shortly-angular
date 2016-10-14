angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  
  $scope.data = {};
  
  $scope.Init = function() {
    $scope.data = Links.getAll()
    .catch(function(error) {
      console.error(error);
    });
    console.log('scope', $scope.data);
  };
  
});
