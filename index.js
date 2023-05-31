window.onload = function(){
    new Vue({
        el: '#raviapp',
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
            }
        }
    });
}