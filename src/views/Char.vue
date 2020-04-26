<template>
    <div id="char" class="container">
        <div class="header">
            <div class="nav-container">
                <div class="back">
                    <router-link tag="a" to="/main/news">
                        <i class="fa fa-angle-left" aria-hidden="true"></i>
                    </router-link>
                </div>
                <div class="title">
                    <span>带带大师兄</span>
                    <p class="online">在线</p>
                </div>
                <div class="means">
                    <a href="./means.html">
                        <i class="fa fa-bars" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="main">
            <p class="time">下午3:36</p>
            <div :class="items.name" v-for="(items,i) in chats" :key="i">
                <img class="icon" :src="items.icon" width="48" height="48">
                <p class="comment">
                    {{items.comment}}
                </p>
            </div>
            <div id="gundong"></div>
        </div>
        <div class="footer">
            <div class="send-container">
                <form>
                    <input type="text" v-model="comment">
                    <button @click.prevent="handle">
                        发送
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        id:{
            required:true
        }
    },
    data(){
        return{
             
            name:"me",
            icon:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587751897567&di=728aeebdb63ad27cd1bcb437f6ca8077&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201309%2F26%2F20130926095128_SiPMh.thumb.700_0.jpeg",
            comment:'',
            date:'',
            chats:[
                {
                    name:"he",
                    icon:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587751947860&di=19de192058f22e2ac0d056f1d933c3cd&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F7%2F2018127203650_KvXLM.thumb.700_0.jpeg",
                    comment:'你是不是脑子有问题'
                },
                {
                    name:"me",
                    icon:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587751897567&di=728aeebdb63ad27cd1bcb437f6ca8077&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201309%2F26%2F20130926095128_SiPMh.thumb.700_0.jpeg",
                    comment:'傻逼东西👴笑了'
                },
                {
                    name:"he",
                    icon:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587751947860&di=19de192058f22e2ac0d056f1d933c3cd&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F7%2F2018127203650_KvXLM.thumb.700_0.jpeg",
                    comment:'你是不是脑子有问题'
                },
                {
                    name:"he",
                    icon:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587751947860&di=19de192058f22e2ac0d056f1d933c3cd&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F7%2F2018127203650_KvXLM.thumb.700_0.jpeg",
                    comment:'你是不是脑子有问题'
                },
                {
                    name:"he",
                    icon:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587751947860&di=19de192058f22e2ac0d056f1d933c3cd&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F7%2F2018127203650_KvXLM.thumb.700_0.jpeg",
                    comment:'你是不是脑子有问题'
                },
                {
                    name:"he",
                    icon:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587751947860&di=19de192058f22e2ac0d056f1d933c3cd&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F7%2F2018127203650_KvXLM.thumb.700_0.jpeg",
                    comment:'你是不是脑子有问题'
                },
                {
                    name:"he",
                    icon:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587751947860&di=19de192058f22e2ac0d056f1d933c3cd&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F7%2F2018127203650_KvXLM.thumb.700_0.jpeg",
                    comment:'你是不是脑子有问题'
                },
                {
                    name:"he",
                    icon:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587751947860&di=19de192058f22e2ac0d056f1d933c3cd&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F7%2F2018127203650_KvXLM.thumb.700_0.jpeg",
                    comment:'你是不是脑子有问题'
                },
                {
                    name:"me",
                    icon:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587751897567&di=728aeebdb63ad27cd1bcb437f6ca8077&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201309%2F26%2F20130926095128_SiPMh.thumb.700_0.jpeg",
                    comment:'傻逼东西👴笑了'
                },
                
            ]
        }
    },
    methods:{
        handle:function(){
            var chat = {};
            chat.name = this.name;
            chat.icon = this.icon;
            chat.comment = this.comment;
            this.chats.push(chat);
            this.comment = '';
            this.$nextTick(()=>{
                let gd = document.getElementById('gundong')
                gd.scrollIntoView()
            })
        },
        back:function(){
            this.$router.go(-1);
        }
    },
    mounted(){
        setTimeout(
            this.$nextTick(()=>{
                let gd = document.getElementById('gundong')
                gd.scrollIntoView()
            }),100
        )
    },
    updated(){
        
    }
}
</script>

<style scoped>
@import '../assets/css/char.css';
</style>