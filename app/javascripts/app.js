(function () {
  'use strict';

  // Create Angular Module
  var myApp = angular.module('myApp', []);

  myApp.controller('myCtrl', myCtrl);
  myCtrl.$inject = ['$scope', '$http', '$log'];

  function myCtrl($scope, $http, $log) {
    $scope.show = true;

    // First
    $http.get('/app/javascripts/data.json')
      .success(function (data) {
        $scope.movies = data;
      })
      .error(function (response, status) {
        $log.warn(response);
      });

    // // Second
    // $http({
    //     method : "GET",
    //     url : "/app/javascripts/data.json"
    // }).success(function (data) {
    //     $scope.movies = data;
    //   })
    //   .error(function (response, status) {
    //     $log.warn(response);
    //   });
  };

})();