angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  
  $scope.links = {};
  
  $scope.data = Links.getAll(links)
    .catch(function(error) {
      console.error(error);
    });
  
});
