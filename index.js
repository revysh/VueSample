window.onload = function(){
    new Vue({
        el: '#raviapp',
        data: {
            name:'RaviLoad'
        },
        methods: {
            changeName: function(){
                this.name = 'Ravi Changed' 	
            }
        }
    });
}