window.onload = function(){
    new Vue({
        el: '#app',
        data: {
            todos: [],
            userInput:''
        },
        methods: {
            addTodo: function(){
                if(this.userInput != ''){
                    var newTodo = {"id":_.uniqueId(), "value": this.userInput};
                    this.todos.push(newTodo);
                    console.log(this.todos);
                    }    	
            },
            removeTodo: function(todo){
                this.todos = _.remove(this.todos,function(eachTodo) {
                    return eachTodo.id != todo.id;
                });                
            }
        }
    });
}