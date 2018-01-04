angular.module('appModule')
.factory('todoService', function() {
  var service = {};

  var todos = [
      {
        id : 1,
        task : 'Go round mums',
        description : '',
        completed : true
      },
      {
        id : 2,
        task : 'Get Liz back',
        description : '',
        completed : false
      },
      {
        id : 3,
        task : 'Sort life out',
        description : '',
        completed :  false
      }
    ];

	  service.index = function() {
	    return todos;
	  };
	  
	  var generateId = function() {
          return vm.todos[vm.todos.length-1].id + 1;
      };
      
      service.update = function(edittedTodo) {
    	  todos.forEach(function(todo, idx, array) {
              if (todo.id === edittedTodo.id) {
                  array.splice(idx, 1, edittedTodo);
              }
          });
          
      }
      
      service.destroy = function() {
    	  todos.forEach(function(todo, idx, array){
    		  
    	  })
      }

	  service.create = function(todo) {
		  console.log(todo);
          var todo = angular.copy(todo);
          todo.id = generateId();
          todo.description = '';
          todo.completed = false;
          todos.push(todo);
	  };
  
  return service;
})