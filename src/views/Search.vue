<template>
    <div id="search" class="main">
        <div class="search-container">
            <div class="search">
                <i class="fa fa-search" aria-hidden="true"></i>
                <input type="text" placeholder="搜索用户/群组" placeholder-style="color:#b0b3bf;" v-model="value" @input.prevent="search()">
                <span>取消</span>
            </div>
        </div>
        <div class="user-container">
            <h3 class="title">用户</h3>
            <ul class="user-list">
                <li class="user-item" v-for="n in 5" :key="n">
                    <div class="left">
                        <img src="../assets/images/9.jpg" width="48" height="48">
                    </div>
                    <div class="mid">
                        <p class="name">QQ小狗</p>
                        <p class="email">1752254499@qq.com</p>
                    </div>
                    <div class="right">
                        <span class="send">发消息</span>
                        <span class="add active">加好友</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="group-container">
            <h3 class="title">群组</h3>
            <ul class="group-list">
                <li class="group-item" v-for="n in 5" :key="n">
                    <div class="left">
                        <img src="../assets/images/9.jpg" width="48" height="48">
                    </div>
                    <div class="mid">
                        <p class="name">铜锣湾</p>
                    </div>
                    <div class="right">
                        <span class="send active">发消息</span>
                        <span class="add">加群组</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import data from '../assets/js/data.js'
export default {
    data(){
        return{
            userarr:[],
            value:'',
        }
    },
    methods:{
        search:function(){
            this.userarr = []
            let Svalue = this.value
            if(Svalue.length > 1){
                this.searchUser(Svalue)
            }
        },
        searchUser:function(e){
            let arr = data.news()
            arr.forEach(v=>{
                let isName = v.name.indexOf(e)
                let isEmail = v.email.indexOf(e)
                if(parseInt(isName) !== -1 || parseInt(isEmail) !== -1){
                    this.userarr.push(v)
                }
                // if(v.name.indexOf(e) != -1 || v.email.indexOf(e) != -1){
                //     this.userarr.push(v)
                // }
            })
            // for(let i = 0;i < arr.length;i++){
            //     console.log(arr[i].name.indexOf(e) != -1)
            //     if(arr[i].name.indexOf(e) != -1 || arr[i].email.indexOf(e) != -1){
            //         this.userarr.push(arr[i])
            //     }
            // }
            console.log(this.userarr)
        }
    }
}
</script>

<style scoped>
@import '../assets/css/search.css';
</style>