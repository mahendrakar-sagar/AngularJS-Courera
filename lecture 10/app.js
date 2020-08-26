(function (){
   'use strict';

   angular.module('DependencyApp',[])

   .controller('DependencyController', DependencyController);

   DependencyController.$inject =['$scope','$filter'];
  
   function DependencyController($scope ,$filter){
   	$scope.name ="Sagarm";
      $scope.cookiecost= .23;

   	$scope.upper =function (){
   		var upCase =$filter('uppercase');
   		$scope.name= upCase($scope.name);
   	}
   }

      
}
)();