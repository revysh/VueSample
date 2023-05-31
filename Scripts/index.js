window.onload = function(){
    new Vue({
        el: '#raviapp1',
        data: {
            name:'RaviLoad',
            elements: []
        },
        methods: {
            changeName: function(){
                this.name = 'Ravi Changed' 	
            },
            addElement: function(){
                this.elements.push(this.elements.length+1);
            },
            getColor: function(number){
                return number % 2 == 0 ? 'red':'green'; 
            }
        }
    });

    new Vue({
        el: '#raviapp2',
        data: {
            message:'Second Vue App'
        }
    });
}