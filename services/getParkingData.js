angular.module('getParkingData',['lumx'])
.factory('getParkingData', getParkingData)

function getParkingData($http, $scope) {


    var lotsUrl = "https://parking.api.smgov.net/lots";
    // make the API call
    return $http.get(lotsUrl, $scope)
      // success condition
      .then(function(response) {
        return response.data;
        })
      // error condition
      .catch(function(response) {
        console.log("error");
      })
    }
