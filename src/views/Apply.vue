<template>
    <div id="apply">
        <div class="nav">
            <div @click.prevent="back" class="left">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
            </div>
            <div class="mid">
                <span>好友申请</span>
            </div>
            <div class="right">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
            </div>
        </div>
        <div class="people">
            <ul class="people-list">
                <li class="people-item" v-for="n in 4" :key="n">
                    <div class="top">
                        <div class="left">
                            <a href="">拒绝</a>
                        </div>
                        <div class="mid">
                            <img src="../assets/images/9.jpg" width="80" height="80">
                        </div>
                        <div class="right">
                            <a href="">同意</a>
                        </div>
                    </div>
                    <div class="center">
                        <p class="name">带带大师兄</p>
                        <span class="time">12:43</span>
                    </div>
                    <div class="bottom">
                        <p>留言 : 请求加为好友</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
    }
}
</script>

<style scoped>
@import '../assets/css/apply.css';
</style>