<template>
  <div id="register" class="container">
        <div class="back">
            <router-link tag="a" to="/">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
            </router-link>
        </div>
        <div class="form-container">
            <h3 class="title">用户注册</h3>
            <form>
                <div class="user">
                    <span>名称</span>
                    <input type="text" autocomplete='off' required v-model="user" @input.prevent="isUser()">
                    <span class="occupy" v-if="userOccupy">已存在</span>
                    <i class="yes fa fa-check" aria-hidden="true" v-if="isuser"></i>
                </div>
                <div class="user">
                    <span>邮箱</span>
                    <input type="email" autocomplete='off' required v-model="email" @input.prevent="isEmail()">
                    <span class="occupy" v-if="emailOccupy">已存在</span>
                    <span class="invalid" v-if="invalid">邮箱无效</span>
                    <i class="yes fa fa-check" aria-hidden="true" v-if="isemail"></i>
                </div>
                <div class="password">
                    <span>密码</span>
                    <input :type="inputType" autocomplete='off' required v-model="pwd">
                    <i class="fa" :class="icon" aria-hidden="true" @click="showPassword"></i>
                </div>
                <button class="reg" :class="{active:isok}" @click.prevent="submitForm('registerForm')">立即注册</button>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            user:"",
            email:"",
            pwd:"",
            isuser:false, //用户名是否可用
            isemail:false, //邮箱是否可用
            invalid:false, //判断邮箱是否符合
            userOccupy:false, //用户名是否存在
            emailOccupy:false,  //邮箱是否存在
            eye:false, //显示密码
            icon:'fa-eye-slash', //控制图标
            inputType:'password', //文本输入类型
            isok:false
        }
    },
    methods:{
        submitForm(e){
            e.axios.get('/api/register',{params:this}).then(res=>{
                console.log('注册成功')
            })
        },
        //显示隐藏密码
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
        //判断用户名
        isUser:function(){
            if(this.user.length > 0){
                this.isuser = true
            }else{
                this.isuser = false
            }
        },
        //判断邮箱
        isEmail:function(){
            let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
            if(this.email.length > 0 ){
                if(reg.test(this.email)){
                    this.isemail=true
                    this.invalid=false
                }else{
                    this.isemail=false
                    this.invalid=true
                }
            }else{
                this.isemail=false
                this.invalid=false
            }
        },
        //获取用户名
        getUser:function(){
            this.user
            this.isOk()
        },
        //获取密码
        getPwd:function(){
            this.pwd
            this.isOk()
        },
        isOk:function(){
            if(this.isuser && this.isemail && this.pwd.length > 5){
                this.isok = true
            }else{
                this.isok = false
            }
        }
    }
}
</script>

<style scoped>
@import '../assets/css/register.css';
</style>