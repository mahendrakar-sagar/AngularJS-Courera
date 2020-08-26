(function (){
   'use strict';

   angular.module('DependencyApp',[])

   .controller('DependencyController', DependencyController);
  
   function DependencyController($scope ,$filter, $injector){
   	$scope.name ="";

   	$scope.upper =function (){
   		var upCase =$filter('uppercase');
   		$scope.name= upCase($scope.name);
        
   	}
   	console.log($injector.annotate(DependencyController));
   }   


   function AnnotateMe(name ,job , something){
   	return "something";

   }
  // console.log(AnnotateMe.toString())

}



)

();