import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Main from '../views/Main.vue'
import Char from '../views/Char.vue'
import Means from '../views/Means.vue'
import Search from '../views/Search.vue'
import UserDetails from '../views/UserDetails.vue'
import Apply from '../views/Apply.vue'
import Found from '../views/Found.vue'
import GroupDetails from '../views/GroupDetails.vue'
import VueRouter from 'vue-router'
Vue.use(Router)

const router = new VueRouter({
    routes:[
        {path:'/login',name:'login',component:Home,meta:{isPublic:true}},
        {
            path:'/register',
            name:'register',
            component:Register
        },
        {
            path:'/',
            name:'main',
            component:Main,
            children:[
                {path:'/',component:() => import(/* webpackChunkName: "about" */ '../views/News.vue')},
                {path:'/link',component:() => import(/* webpackChunkName: "about" */ '../views/Link.vue')},
                {path:'/trends',component:() => import(/* webpackChunkName: "about" */ '../views/Trends.vue')}
            ]
        },
        {
            path:'/means/:id',
            name:'means',
            component:Means,
            props:true
        },
        {
            path:'/means/userdetails/:id',
            name:'user',
            component:UserDetails,
            props:true
        },
        {
            path:'/char/:id',
            name:'char',
            component:Char,
            props:true
        },
        {
            path:'/search',
            name:'search',
            component:Search
        },
        {
            path:'/apply',
            name:'apply',
            component:Apply
        },
        {
            path:'/found',
            name:'found',
            component:Found
        },
        {
            path:'/groupdetails',
            name:'groupdetails',
            component:GroupDetails
        }
    ]
})

router.beforeEach((to,from,next)=>{
    if (to.meta.isPublic && !localStorage.token){
    return next('/login');
    }
    next();
});

export default router;
// export default new Router({
//   routes: [
//     {
//         path: '/',
//         name: 'Home',
//         component: Home
//       },
//       {
//         path: '/register',
//         name: 'Register',
//         component: Register
//       },
//       {
//         path: '/main',
//         name: 'Main',
//         component: Main,
//         children:[
//             {
//                 path:'/main/news',
//                 name:'News',
//                 component:() => import(/* webpackChunkName: "about" */ '../views/News.vue')
//             },
//             {
//                 path:'/main/link',
//                 name:'Link',
//                 component:() => import(/* webpackChunkName: "about" */ '../views/Link.vue')
//             },
//             {
//                 path:'/main/trends',
//                 name:'Trends',
//                 component:() => import(/* webpackChunkName: "about" */ '../views/Trends.vue')
//             }
//         ]
//       },
//       {
//         path: '/char/:id',
//         name: 'Char',
//         component: Char,
//         props:true
//       },
//       {
//         path: '/means/:id',
//         name: 'Means',
//         component: Means,
//         props:true
//       },
//       {
//         path: '/search',
//         name: 'Search',
//         component: Search,
//       },
//       {
//         path: '/userdetail',
//         name: 'User',
//         component:UserDetails,
//       },
//       {
//         path: '/main/link/apply',
//         name: 'Apply',
//         component:Apply,
//       },
//       {
//         path: '/found',
//         name:'Found',
//         component:Found,
//       },
//       {
//         path: '/groupdetail',
//         name:'Group',
//         component:GroupDetails
//       }
//   ]
// })
