var app = angular.module("myApp",['ngRoute','ui.bootstrap','firebase']);
app.config(function($routeProvider){
  $routeProvider
  .when('/teams',{
    templateUrl : "templates/teamsPage.html",
    controller :"teamController",
  })
  .when('/teams/:id',{
    templateUrl : "templates/playersPage.html",
    controller :"playerController",
  })
  .otherwise({
    redirectTo : '/teams'
  });
});

app.factory('firebaseRead', ['$firebase', function ($firebase) {

  var ref = new Firebase("https://ipl-team.firebaseio.com/");
  var sync = $firebase(ref);

  return {
    all: function() {
      return sync.$asArray();
    }

  }
}]);
