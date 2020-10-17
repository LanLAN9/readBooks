<template>
    <div id="login" @click='isLogin'>
            <input type='submit' name='submit' value='提交' style="margin-top:50px">
    </div>
</template>

<script>
export default{
    name:'Login',
    methods:{
        isLogin:function(){
            localStorage.setItem('user',{name:'lan'});
            this.$router.push({name:'Bookshelf'}).catch(err=>{
              
            });
        }
    },
    mounted:function(){
        if(localStorage.getItem('user')){
            alert('you have login in successfully!');
            // this.$router.push({name:'Bookshelf'});
        }
    }
}
</script>