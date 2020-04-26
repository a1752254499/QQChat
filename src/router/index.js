import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Main from '../views/Main.vue'
import Char from '../views/Char.vue'
import Means from '../views/Means.vue'
import Search from '../views/Search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
      },
      {
        path: '/main',
        name: 'Main',
        component: Main,
        children:[
            {
                path:'/main/news',
                name:'News',
                component:() => import(/* webpackChunkName: "about" */ '../views/News.vue')
            },
            {
                path:'/main/link',
                name:'Link',
                component:() => import(/* webpackChunkName: "about" */ '../views/Link.vue')
            },
            {
                path:'/main/trends',
                name:'Trends',
                component:() => import(/* webpackChunkName: "about" */ '../views/Trends.vue')
            }
        ]
      },
      {
        path: '/char/:id',
        name: 'Char',
        component: Char,
        props:true
      },
      {
        path: '/means',
        name: 'Means',
        component: Means,
      },
      {
        path: '/search',
        name: 'Search',
        component: Search,
      }
  ]
})
