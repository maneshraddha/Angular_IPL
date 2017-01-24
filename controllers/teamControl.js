app.controller("teamController",function($scope,$location,$http,firebaseRead){
  $http.get('ipl2016_JSON.json')
  .success(function(response){
    $scope.teams = response.teams;
    console.log($scope.teams);
    $scope.myInterval = 3000;
  });

  // firebase fetch code
  
  // $scope.teams = firebaseRead.all();
  // console.log($scope.teams);
  // $scope.myInterval = 3000;

});
