new Vue({
    el: '#app',
    data: {
        modalActive: false,
    }, 
    methods: {
        toggle: function() {
            this.modalActive = !this.modalActive;
        }
    }
})