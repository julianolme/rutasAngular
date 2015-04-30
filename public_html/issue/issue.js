
app.config(['$routeProvider',function($routeProvider) {
        
    $routeProvider.when('/issue/list', {
        templateUrl: "issue/issue-list.html",
        controller: "ListIssuesController",
        controllerAs: "listIssuesController"
    });
    
    $routeProvider.when('/issue/new', {
        templateUrl: "issue/issue-detail.html",
        controller: "NewIssueController",
        controllerAs: "detailIssueController"
    });
    
    $routeProvider.when('/issue/edit/:number', {
        templateUrl: "issue/issue-detail.html",
        controller: "EditIssueController",
        controllerAs: "detailIssueController"
    });
    
    $routeProvider.when('/issue/delete', {
        templateUrl: "issue/issue-detail.html",
        controller: "DeleteIssueController",
        controllerAs: "detailIssueController"
    });
        
}]);

function ListIssuesController($http) {
    var that = this;
    
    $http({
    method: 'GET', 
    url: 'https://api.github.com/repos/julianolme/hospital/issues'
  }).success(function(data, status, headers, config) {
      that.issues=data;
  }).error(function(data, status, headers, config) {
      alert("Ha fallado la petición. Estado HTTP:"+status);
  });
    
}

function EditIssueController ($http, $routeParams) {
    var that = this;
    var number;
    
    $http({
    method: 'GET', 
    url: 'https://api.github.com/repos/julianolme/hospital/issues/'+$routeParams.number
  }).success(function(data, status, headers, config) {
      that.issue=data;
  }).error(function(data, status, headers, config) {
      alert("Ha fallado la petición. Estado HTTP:"+status);
  });
}

function NewIssueController () {
    
}

function DeleteIssueController () {
    
}

app.controller("ListIssuesController", ListIssuesController);

app.controller("NewIssueController", NewIssueController);

app.controller("EditIssueController", EditIssueController);

app.controller("DeleteIssueController", DeleteIssueController);