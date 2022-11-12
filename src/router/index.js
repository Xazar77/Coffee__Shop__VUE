import Vue from 'vue'
import VueRouter from 'vue-router'

import HeroViews from '../views/HeroViews'
import OurCoffeeView from '../views/OurCoffeeView'
import ForYourPleasureView from '../views/ForYourPleasureView'
import ContactUsView from '../views/ContactUsView'
import ThanksYouView from '../views/ThanksYouView'
import GoodsItemView from '../views/GoodsItemView'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: HeroViews
    },
    {
        path: '/our-coffee',
        component: OurCoffeeView
    },
    {
        path: '/for-your-pleasure',
        component: ForYourPleasureView
    },
    {
        path: '/contact-us',
        component: ContactUsView
    },
    {
        path: '/thanks-you',
        component: ThanksYouView
    },
    { name: "coffee", path: '/our-coffee/:id', component: GoodsItemView},
    { name: "goods", path: '/for-your-pleasure/:id', component: GoodsItemView}
    // {
    //     name: "coffee",
    //     path: '/our-coffee/:id',
    //     component: GoodsItemView
    // },
    // {
    //     name: "goods",
    //     path: '/for-your-pleasure/:id',
    //     component: GoodsItemView
    // }
]

const router = new VueRouter({
    mode: 'history',
    routes
})
export default router