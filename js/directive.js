angular.module('TodoDirective',[]).directive('todoTable', function() {
  return {
    restrict: 'EA',  // EA = Element & Attribute
    templateUrl: 'templates/directives/todo-table.html'
  };
});