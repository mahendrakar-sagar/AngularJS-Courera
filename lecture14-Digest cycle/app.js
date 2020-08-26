(function (){
   'use strict';

   angular.module('DependencyApp',[])

   .controller('DependencyController', DependencyController)
   .filter('loves',LovesFilter)
   .filter('truth',TruthFilter);

   DependencyController.$inject =['$scope','lovesFilter'];
  
   function DependencyController($scope, lovesFilter){

       $scope.sayMessage = function () {
      var msg =" sagar likes biryani food and special items.";
      return msg;
    }
    $scope.sayLovesMessage = function () {
      var msg =" sagar likes biryani food and special items.";
      msg= lovesFilter(msg);
      return msg;
    }
   }
    function LovesFilter() {
      return function (input){
         input =input || "";
         input=input.replace("likes","loves");
         return input;
      }
    }

    function TruthFilter() {
      return function(input,target,replace){
         input =input || "";
         input=input.replace(target, replace);
         return input;
      }
    }
}
)();