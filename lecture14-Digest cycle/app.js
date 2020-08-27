(function (){
   'use strict';

   angular.module('DependencyApp',[])

   .controller('DependencyController', DependencyController);
 

   DependencyController.$inject =['$scope'];
  
      function DependencyController($scope){
         $scope.onceCounter =0;
       //  console.log($scope)

       $scope.showNumberOfWatchers = function () {

        console.log("# of watchesrs: ", $scope.$$watchersCount);
       }

       $scope.countOnce = function (){
        $scope.onceCounter =1;
       }

       $scope.$watch('onceCounter',function(newValue , oldValue){
        console.log("old valus ::",oldValue);
        console.log("new value  :",newValue)
       });

      }
   
}
)();