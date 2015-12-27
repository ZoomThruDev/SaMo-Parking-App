angular.module('table',['getParkingData','lumx'])

.controller('tableCtrl', tableCtrl)

function tableCtrl($scope, $http) {
  $scope.preLoader = true;
  getParkingData($http, $scope)
     .then(function(data){
       console.log(data);
       $scope.lots = data;
       $scope.preLoader = false;
       // data.url = $sce.trustAsResourceUrl(data.url);
     }, function (error){
       console.log("promise rejected");
     });

     // Tutorial for search and order from https://scotch.io/tutorials/sort-and-filter-a-table-using-angular
     $scope.sortType     = 'available_spaces'; // set the default sort type
     $scope.sortReverse  = true;  // set the default sort order
     $scope.searchLots   = '';     // set the default search/filter term



}
