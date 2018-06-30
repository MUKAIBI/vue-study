new Vue({
    el: '#app',
    data: {
        price: 19800
    },
    filters: {
        round: function(val) {
            return Math.round(val * 100) / 100
        },
        radion: function(val) {
            return val * Math.PI / 100
        }
    }
})