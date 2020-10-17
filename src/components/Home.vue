<template>
    <div id="home">
        <!-- 轮播图 -->
        <div id="lunbotPart">
            <!-- 搜索栏 -->
            <div id="searchPart">
                <mt-search v-model="value" class="search"></mt-search>
            </div>
            <mt-swipe @change="handleChange" class="mylunbot" :auto="4000">
                <mt-swipe-item v-for="(item,index) in testObj" :key="index">
                    <img :src="item" alt="图片加载失败">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <!-- 选项列表 -->
        <div id="booksList">
            <ul>
                <li v-for="item in imgList" :key="item.id">
                    <router-link :to="item.router">
                        <img :src="item.url" alt="图片加载失败">
                        <p>{{item.name}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- 推荐图书栏 -->
        <div id="recommondBooks">
            <div class='recommondHeader'>
                <h4>推荐图书</h4>
            </div>
            <div class='recommondBody'>
                <ul>
                    <li v-for='(book,index) in booksObj' :key='index'>
                    <!--:to="{name:'login',params:{id:1}}"-->
                        <router-link :to="{name:'Booksdetail',query:{id:index,data:book}}"><img :src='book.img' alt='图片加载失败'></router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
/* 以模块函数引入assets下的图片文件 */
import icon01 from '../assets/paihangbang.svg'
import icon02 from '../assets/shufa.svg'
import icon03 from '../assets/shuqian-.svg'
import icon04 from '../assets/icon_hangyefenlei.svg'

export default{
    name:'Home',
    data(){
        return{
            title:'首页',
            testObj:[],
            value:'',
            imgList:[
                {id:1,url:icon01,name:'排行',router:{name:'BooksList'}},
                {id:2,url:icon02,name:'诗集',router:{name:'BooksList'}},
                {id:3,url:icon03,name:'文学',router:{name:'BooksList'}},
                {id:4,url:icon04,name:'分类',router:{name:'BooksList'}}
            ],
            booksObj:[]
        }
    },
    methods:{
        handleChange(index){
            // console.log(index);
        },
        //axios请求数据通过data渲染到轮播图上
        getImages(){
            this.$axios.get('https://www.easy-mock.com/mock/5f3fc3a403f8a71d1e500f0f/test/myimages')
            .then(res=>{
                this.testObj=res.data.data.images;
            })
            .catch(err=>{
                console.log(err);
                console.log("轮播图片获取异常");
            })
        },
        //请求推荐图书栏数据
        getBooks(){
            this.$axios.get('http://api.xiaomafeixiang.com/api/bookinfo?isbn=9787544270878')
            .then(res=>{
                for(var i=0;i<8;i++){
                    this.booksObj[i]=res.data.data[0];
                }
            })
            .catch(err=>{
                console.log(err);
            })
        },
        //上述两个请求并发控制
        getData(){
            let get_image=this.$axios.get("https://www.easy-mock.com/mock/5f3fc3a403f8a71d1e500f0f/test/myimages");
            let get_book=this.$axios.get("https://www.easy-mock.com/mock/5f3fc3a403f8a71d1e500f0f/test/bookdetail");
            this.$axios.all([get_image,get_book])
            .then(this.$axios.spread((res1,res2)=>{
                this.testObj=res1.data.data.images;
                //因为接口测试数据少，所以使用重复赋值
                for(var i=0;i<8;i++){
                    this.booksObj[i]=res2.data.data[0];
                }
                console.log(res2.data.data[0]);
            })).catch(err=>{
                console.log(err);
            })
        }
    },
    created(){
            // this.getImages();
            // this.getBooks();
            this.getData();
    }
}
</script>
<style>
    
</style>