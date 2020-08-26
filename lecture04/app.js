(function (){

	'use strict';
    //x="hello";
   angular.module('MyFirstApp',[])

   .controller('MyFirstController',function ($scope) {
   	        // console.log($scope)
           $scope.name="";
           $scope.totalValue=0;

           $scope.displayNumeric =function () {
           	var totalNameValue=calculateNumericForString($scope.name);
           	$scope.totalValue=totalNameValue;

           }

           function calculateNumericForString(string){
                  var totalStringValue =0;
                  for (var i=0; i < string.length; i++){
                  	totalStringValue +=string.charCodeAt(i);
                  }
              return totalStringValue;

           }

   });

})();