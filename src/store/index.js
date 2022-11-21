import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import links from './links'
import bestsellers from './bestsellers'
import coffee from './coffee'
import goods from './goods'
// import goodsItem from './goodsItem'

const store = new Vuex.Store({
     
    modules: {
        links,
        bestsellers,
        coffee,
        goods,
        // goodsItem
    }

})
export default store