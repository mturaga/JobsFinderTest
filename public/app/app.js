angular.module("app", []);

angular.module("app").controller("testCtrl", function($scope) {
    $scope.jobs = [{
        title: "Sales Manager",
        description: "lorem ipsum",
        tags: ["Sales","Talking Bs"]
    }, {
        title: "CEO",
        description: "The Boss",
        tags: ["Boss"]
    },{
        title: "CFO",
        description: "The Bean Counter",
        tags: ["count it","Hell"]
    }];
});