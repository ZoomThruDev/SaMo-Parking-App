angular.module('getParkingData',['lumx'])
.factory('getParkingData', getParkingData)

function getParkingData($http, $scope, LxNotificationService) {


    var lotsUrl = "https://parking.api.smgov.net/lots";//"https://parking.api.smgov.net/lots"
    // make the API call
    return $http.get(lotsUrl, $scope)
      // success condition
      .then(function(response) {
        return response.data;
        })
      // error condition
      .catch(function(response) {
        console.log("$http get error");
        LxNotificationService.error('Data Error'); // this also called by map and table controllers on failure
      })
    }
