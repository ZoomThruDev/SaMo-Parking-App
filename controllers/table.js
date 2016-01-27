angular.module('table',['parking-data.service','lumx'])

.controller('tableCtrl', tableCtrl)

function tableCtrl($scope, LxNotificationService, parkingDataService) {
  $scope.preLoader = true;

  //fetch the data
  parkingDataService.getData()
     .then(function(data){
       console.log(data);
       $scope.lots = data;
       $scope.preLoader = false;
       // LxNotificationService.success('Data Loaded'); disabled as not always necessary
     }, function (error){
       $scope.preLoader = false;
       console.log("promise rejected");
       LxNotificationService.error('Data Error');
     });

     $scope.sortType     = 'available_spaces'; // set the default sort type
     $scope.sortReverse  = true;  // set the default sort order
     $scope.searchLots   = '';     // set the default search/filter term



}
