<template>
    <div id="trends" class="main">
        <div class="search">
            <!-- <i class="fa fa-search" aria-hidden="true"></i>
            <input type="text" placeholder="搜索" @click.prevent="Search()"> -->
            <p @click.prevent="Search()"><i class="fa fa-search" aria-hidden="true"></i>搜索</p>
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
        Search:function(){
            this.$router.push({ path:'/search'})
        }
    }
}
</script>

<style scoped>
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
ul,li{
    list-style: none;
}
a,a:hover{
    text-decoration: none;
}
#trends{
    padding:56px 0 59px 0;
}
</style>