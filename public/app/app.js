angular.module("app", []);

angular.module("app").controller("testCtrl", function($scope) {
    $scope.jobs = [{
        title: "Sales Manager",
        description: "lorem ipsum"
    }, {
        title: "CEO",
        description: "The Boss"
    },{
        title: "CFO",
        description: "The Bean Counter"
    }];
});