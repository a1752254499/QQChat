<template>
    <div id="link" class="main">
        <div class="search">
            <p @click.prevent="Search()"><i class="fa fa-search" aria-hidden="true"></i>搜索</p>
        </div>
        <div class="friends">
            <span class="flex-1">新朋友</span>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
        <div class="carve"></div>
        <div class="nav">
            <div class="nav-item" :class="{active:active == i}" v-for="(items,i) in list" :key="i" @click="$refs.list.$swiper.slideTo(i)">
                <div class="nav-link">{{items}}</div>
            </div>
        </div>
        <swiper ref="list" @slide-change="() => active = $refs.list.$swiper.realIndex" :options="{autoHeight: true}">
            <swiper-slide>
                <div class="myfriend">
                    <router-link tag="div" to="/char" class="friend">
                        <div class="left">
                            <img src="../assets/images/1.jpg" width="40px" height="40px">
                        </div>
                        <div class="right">
                            <h3>九区狗导</h3>
                            <p>[在线]我是傻逼我是傻逼我是傻逼我是傻逼我是傻逼我是傻逼</p>
                        </div>
                    </router-link>
                    <div class="friend">
                        <div class="left">
                            <img src="../assets/images/2.jpg" width="40px" height="40px">
                        </div>
                        <div class="right">
                            <h3>老八</h3>
                            <p>[离线]秘制小汉堡🍔</p>
                        </div>
                    </div>
                    <div class="friend" v-for="n in 6" :key="n">
                        <div class="left">
                            <img src="../assets/images/3.jpg" width="40px" height="40px">
                        </div>
                        <div class="right">
                            <h3>带带大师兄</h3>
                            <p>[在线]我是你爹🗾</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="mygroup">
                    <div class="group" v-for="n in 2" :key="n">
                        <div class="left">
                            <img src="../assets/images/9.jpg" width="40px" height="40px">
                        </div>
                        <div class="right">
                            <h3>聊天群</h3>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    data(){
        return{
            active:0,
            list:['好友','群聊','分组','设备'],
        }
    },
    methods:{
        Search:function(){
            this.$router.push({ path:'/search'})
        }
    }
}
</script>

<style scoped>
@import '../assets/css/link.css';
</style>