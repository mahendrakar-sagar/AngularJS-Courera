(function (){
   'use strict';

   angular.module("DependencyApp",[])

   .controller('DependencyController', DependencyController);
   

   function DependencyController($scope){
   	$scope.name ="Sagar";
   }   


}



)

();