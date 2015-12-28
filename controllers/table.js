angular.module('table',['getParkingData','lumx'])

.controller('tableCtrl', tableCtrl)

function tableCtrl($scope, $http, LxNotificationService) {
  $scope.preLoader = true;

  //fetch the data
  getParkingData($http, $scope)
     .then(function(data){
       console.log(data);
       $scope.lots = data;
       $scope.preLoader = false;
       // alert success
       // LxNotificationService.success('Data Loaded'); disabled as not always necessary 

       // data.url = $sce.trustAsResourceUrl(data.url);
     }, function (error){
       $scope.preLoader = false;
       console.log("promise rejected");
       LxNotificationService.error('Data Error'); // this function also called by getParkingData service on failure
     });

     // Tutorial for search and order from https://scotch.io/tutorials/sort-and-filter-a-table-using-angular
     $scope.sortType     = 'available_spaces'; // set the default sort type
     $scope.sortReverse  = true;  // set the default sort order
     $scope.searchLots   = '';     // set the default search/filter term



}
