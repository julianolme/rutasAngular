
app.config(['$routeProvider',function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl:'main/main.html',
            controller:'MainController',
            controllerAs:'mainController'
        });
}]);

function MainController ($http) {
    var that = this;
    
    that.nombre = "Pepe";
}


app.controller("MainController", MainController);
