app.controller("playerController",function($scope,$routeParams,$http,$location,firebaseRead){
  $http({
    url : 'ipl2016_JSON.json',
    params : {id:$routeParams.id},
    method : "get"
  })
  .success(function(response){
    $scope.teams = response.teams;
    $scope.players = response.teams[$routeParams.id].team_players;
    $scope.id = response.teams[$routeParams.id].id;
    $scope.backgroundImage = response.teams[$routeParams.id].team_background;

  });

  // firebase fetch code

  // $scope.teams = firebaseRead.all();
  // console.log("playercontrol",$scope.teams);
  // $scope.players =$scope.teams[$routeParams.id].team_players;
  // $scope.backgroundImage = $scope.teams[$routeParams.id].team_background;
});
