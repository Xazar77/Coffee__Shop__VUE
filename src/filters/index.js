import Vue from 'vue'

Vue.filter('addCurrent', (value) => {
    return value + '$'
})