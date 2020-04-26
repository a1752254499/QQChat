<template>
    <div id="means">
        <div class="topbar">
            <div class="nav">
                <router-link tag="div" to="/main/news" class="back">
                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                </router-link>
                <div class="me">
                    个人资料
                </div>
            </div>
        </div>
        <div class="data">
            <div class="left">
                <img src="../assets/images/2.jpg" width="100px" height="100px">
            </div>
            <div class="right">
                <h3 class="name">老八</h3>
                <p class="user">QQ:<span>686868</span></p>
                <p class="info">
                    <span>男</span>
                    <span>撤硕座</span>
                </p>
            </div>
        </div>
        <div class="sign">
            <div class="left">
                <i class="fa fa-pencil" aria-hidden="true"></i>
            </div>
            <div class="right">
                你笑我狼狈不堪,我笑你吃屎都难。韩信带净化
            </div>
        </div>
        <div class="footer">
            <div class="left">
                <a href="">编辑资料</a>
            </div>
            <div class="rgiht">
                <a href="">退出登录</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
@import '../assets/css/means.css';
</style>