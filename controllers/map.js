angular.module('map',['getParkingData','uiGmapgoogle-maps','lumx'])

.controller('mapCtrl', mapCtrl)

function mapCtrl($scope, $http, LxNotificationService) {
  $scope.preLoader = true;

  lotsData = getParkingData($http, $scope)
  .then(function(data){
    // loop to attach correct icon to data
    for (x in data){
      if(data[x].available_spaces < 25){
        data[x].icon = "images/red.png";
    } else if(data[x].available_spaces >= 25 && data[x].available_spaces <=150) {
        data[x].icon = "images/orange.png";
    } else if(data[x].available_spaces >= 150 && data[x].available_spaces <=300) {
        data[x].icon = "images/green.png";
    } else {
      data[x].icon = "images/blue.png";
    }
  }
    // update the information on the page
    $scope.lots = data;
    $scope.preLoader = false;
    $scope.map = { center: { latitude: 34.012590, longitude: -118.493004 }, zoom: 14 }; //34.012590, -118.493004
    // LxNotificationService.success('Data Loaded'); disabled as not always necessary

    // data.url = $sce.trustAsResourceUrl(data.url); // not necessary for this application
  }, function (error){
    $scope.preLoader = false;
    console.log("promise rejected");
    LxNotificationService.error('Data Error'); // this function also called by getParkingData service on failure
  });

}

/*
http://www.raymondcamden.com/2012/12/01/Simple-Google-Maps-demo-with-Custom-Markers
add different versions of markers based on parking status
*/
