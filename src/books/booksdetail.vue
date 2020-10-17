<template>
    <div class='booksdetail'>
        <div class='top'>
            <div class='top-left'>
                <img :src="book.img" alt="图片加载失败">
            </div>
            <div class='top-right'>
                <h3 class='book-title'>{{book.title}}</h3>
                <div class='author'>作者：{{book.author}}</div>
                <div class='tags'>分类：{{book.tags}}</div>
                <div class='pages'>页数：{{book.pages}}页</div>
                
            </div>
        </div>
        <div class='detail'>
            <div class='add'>
                <button class="read add-btn">立即阅读</button>
                <button class="addbook add-btn">加入书架</button>
            </div>
            <div class="introduce">{{book.summary}}</div>
        </div>
        <div class='catalog'>
                <h5>目录</h5>
                <pre>
                    {{book.catalog}}
                </pre>
            </div>
        <div class='publish'>
            <h5>图书出版信息</h5>
            <div class="pub-publisher">出版社：{{book.publisher}}</div>
            <div class="pub-date">出版日期：{{book.pubdate}}</div>
            <div class="pub-num">ISBN：{{book.isbn}}</div>
            <div class="series">版权方：{{book.series}}</div>
        </div>
    </div>
</template>
<script>
import pic from '../assets/logo.png'
export default{
    name:'booksdetail',
    data(){
        return{
            book:{},
            picurl:pic
        }
    },
    created:function(){
        var tags=this.$route.query.data.tags.replace(/(<+)([^<>]*)(>)/g,'/');
        this.$route.query.data.tags=tags.substring(0,tags.length-1);
        var catalog=this.$route.query.data.catalog.replace(/^\s*|\s*$/g,'');
        this.$route.query.data.catalog=catalog;
        this.book=this.$route.query.data;
    }
}
</script>