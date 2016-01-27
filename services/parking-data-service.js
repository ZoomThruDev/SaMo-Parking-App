angular.module('parking-data.service',['lumx'])
.factory('parkingDataService', parkingDataService)

function parkingDataService($http, $q) {

  var getData = function(){
    var lotsUrl = "https://parking.api.smgov.net/lots";//"https://parking.api.smgov.net/lots"
    // make the API call
    return $http.get(lotsUrl)
    // success condition
    .then(function(response) {
      return response.data;
    }, function(error){
      console.log(error);
      return $q.reject(error);
    })
  }

  return {
    getData: getData
  }


}
