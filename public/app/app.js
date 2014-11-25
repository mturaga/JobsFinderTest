(function() {
    angular.module("app", ['app-directives', 'mdb-directives']);
    

    angular.module("app").controller("testCtrl", function($scope) {
        $scope.jobs = [{
            title: "Sales Manager",
            description: "lorem ipsum",
            tags: ["Sales", "Talking Bs"]
        }, {
            title: "CEO",
            description: "The Boss",
            tags: ["Boss"]
        }, {
            title: "CFO",
            description: "The Bean Counter",
            tags: ["count it", "Hell"]
        }];


        $scope.categories = [{
            ID: 1,
            Name: "Cat1"
        }, {
            ID: 2,
            Name: "Cat2"
        }, {
            ID: 3,
            Name: "Cat3"
        }];
    });
})();