<template>
  <div id="app">
  <!-- 顶部栏 -->
    <mt-header :title='title' class="title">
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  <!-- 中间内容 -->
    <router-view/>
  <!-- 底部栏 -->
    <mt-tabbar v-model='selected' class='buttom-nav'>
      <mt-tab-item id="home" >
        <i class='iconfont'>&#xe601;</i>
        首页
      </mt-tab-item>
      <mt-tab-item id="bookshelf">
        <i class='iconfont'>&#xe600;</i>
        书架
      </mt-tab-item>
      <mt-tab-item id="communication">
        <i class='iconfont'>&#xe663;</i>
        论坛
      </mt-tab-item>
      <mt-tab-item id="my">
        <i class='iconfont'>&#xe602;</i>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      selected:'home',
      title:'首页'
    }
  },
  created:function(){
    
  },
  watch:{
    selected:function(newV,oldV){
      // console.log(this.selected);
      switch(newV){
        case 'home':
            this.$router.push({name:'Home'}).catch(err=>{
              
            });
            break;
        case 'bookshelf':
            this.$router.push({name:'Bookshelf'}).catch(err=>{
              
            });
            break;
        case 'communication':
            this.$router.push({name:'Communication'}).catch(err=>{
              
            });
            break;
        case 'my':
            this.$router.push({name:'My'}).catch(err=>{
              
            });
            break;
        default:
            this.$router.push({name:'Helloworld'}).catch(err=>{
              
            });
      };
    }
  }
}
</script>
