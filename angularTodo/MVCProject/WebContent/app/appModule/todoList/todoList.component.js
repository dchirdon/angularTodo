angular.module('appModule')
.component('todoList', {
    templateUrl : 'app/appModule/todoList/todoList.component.html',
    controller : function(todoService) {
        var vm = this;
        
        
        vm.selected = null;
        
        vm.editTodo = null;

        vm.todos = [];
         
        vm.todos = todoService.index();
        
        vm.updateTodo = function(edittedTodo) {
                todoService.update(edittedTodo);
                vm.todos = todoService.index();
                vm.selected = vm.editTodo; 
                vm.editTodo = null;
        }
        
        vm.deleteTodo = function(id) {
        	todoService.destroy(id);
        	vm.todos = todoService.index();
        }
        
        vm.setEditTodo = function() {
                vm.editTodo = angular.copy(vm.selected);
        }
        
        vm.displayTable = function() {
            vm.selected = null;
        }
        
        vm.displayTodo = function(todo) {
                vm.selected = todo;
        }
        
        vm.countTodos = function() {
            return vm.todos.length;
        }
        
       vm.addTodo = function(todo) {
    	   todoService.create(todo);
    	   vm.todos = todoService.index();
       }
        
        
    },
    controllerAs : 'vm'
});