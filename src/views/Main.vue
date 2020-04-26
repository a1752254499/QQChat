<template>
    <div id="main" class="container">
        <div class="header">
            <div class="nav-container">
                <router-link tag="div" to="/means" class="icon">
                    <img src="../assets/images/icon.jpg" width="40" height="auto">
                </router-link>
                <div class="title">
                    <span :class="{active:active == i}" v-for="(item,i) in title" :key="i">{{item}}</span>
                </div>
                <div class="add">
                    
                </div>
            </div>
        </div>
        <router-view></router-view>
        <div class="footer">
            <div class="menu-container">
                <ul class="menu-list">
                    <li :class="{active:active == i}" class="menu-item" v-for="(items,i) in nav" :key="i" @click="active = i">
                        <router-link tag="a" :to="{path:items.route}">
                            <i class="fa" :class="items.icon" aria-hidden="true"></i>
                            <span>{{items.name}}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            active:0,
            title:['消息','联系人','动态'],
            nav:[
                {
                    id:0,
                    name:'消息',
                    route:'/main/news',
                    icon:'fa-commenting'
                },
                {
                    id:1,
                    name:'联系人',
                    route:'/main/link',
                    icon:'fa-user-circle'
                },
                {
                    id:2,
                    name:'动态',
                    route:'/main/trends',
                    icon:'fa-globe'
                },
            ]
        }
    },
    methods:{
        
    }
}
</script>

<style scoped>
@import '../assets/css/main.css';
</style>