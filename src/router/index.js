import Vue from 'vue'
import VueRouter from 'vue-router'

import HeroViews from '../views/HeroViews'
import OurCoffeeView from '../views/OurCoffeeView'
import GoodsPageView from '../views/GoodsPageView'
import ContactUsView from  '../views/ContactUsView'
import ThanksPageView from '../views/ThanksPageView'

Vue.use(VueRouter)

const routes = [
    {path: '/', component: HeroViews},
    {path: '/our-coffee', component: OurCoffeeView},
    {path: '/goods-page', component: GoodsPageView},
    {path: '/contact-us', component: ContactUsView},
    {path: '/thanks-page', component: ThanksPageView}
]

const router = new VueRouter({
    mode: 'history',
    routes
})
export default router