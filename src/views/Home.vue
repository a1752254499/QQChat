<template>
    <div id="login" class="container">
        <!--logo-->
        <div class="logo-container">
            <img class="logo" src="../assets/images/logo.png">
        </div>
        <!--登录框-->
        <div class="form-container">
            <form>
                <div class="user">
                    <input id="user" type="text" placeholder="用户名/邮箱" autocomplete='off' required  v-model="user" @blur.prevent="getUser"/>
                </div>
                <div class="password">
                    <i class="fa" :class="icon" aria-hidden="true" @click="showPassword"></i>
                    <input id="pwd" :type="inputType" placeholder="输入密码" autocomplete='off' required v-model="pwd" @blur.prevent="getPwd"/>
                </div>
                <button @click.prevent="login" :class="{active:user.length != 0 && pwd.length != 0}">
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </button>
            </form>
        </div>
        <!--注册-->
        <div class="register-container">
            <a>忘记密码</a>
            <span>|</span>
            <router-link tag="a" to="/register">用户注册</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            user:"",
            pwd:"",
            eye:false,
            icon:'fa-eye-slash',
            inputType:'password'
        }
    },
    methods:{
        showPassword:function(){
            if(this.eye){
                this.eye = false
                this.inputType = 'password'
                this.icon = 'fa-eye-slash'
            }else{
                this.eye = true
                this.inputType = 'text'
                this.icon = 'fa-eye'
            }
        },
        //测试
        async testFun(){
            const res = await this.axios.get('api/list')
            console.log(res)
        },
        //获取用户名
        getUser:function(){
            this.user
        },
        //获取密码
        getPwd:function(){
            this.pwd
        },
        login:function(){
            if(this.user && this.pwd){
                console.log('yes')
            }
        }
    },
    mounted(){
        
    }
}
</script>

<style scoped>
@import '../assets/css/login.css';
</style>
