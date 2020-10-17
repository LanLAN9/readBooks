<template>
    <div id="home">
        <div class="book_content">
            <ul>
                <li v-for="(demo,index) in demos" :key="index">
                    <router-link :to="{name:'Read',params:{id:index,data:demo}}">
                        <img :src="demo.image" alt="图片无法加载"><br>
                        <span>{{demo.name}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import image_demo from '../assets/ja.jpg';
let demos=[
    {
        image:image_demo,
        name:"简爱"
    },
    {
        image:image_demo,
        name:"简爱2"
    },
    {
        image:image_demo,
        name:"简爱2"
    },
    {
        image:image_demo,
        name:"简爱2"
    },
    {
        image:image_demo,
        name:"简爱2"
    },
    {
        image:image_demo,
        name:"简爱"
    },
    {
        image:image_demo,
        name:"简爱2"
    },
    {
        image:image_demo,
        name:"简爱2"
    },
    {
        image:image_demo,
        name:"简爱2"
    },
    {
        image:image_demo,
        name:"简爱2"
    }
]
export default{
    name:'Bookshelf',
    data(){
        return{
            title:'书架',
            demos:demos
        }
    }
    
    
}
</script>