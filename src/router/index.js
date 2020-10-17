import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Bookshelf from '@/components/Bookshelf'
import Communication from '@/components/Communication'
import My from '@/components/My'
import Login from '@/components/Login'
import BooksList from '@/books/booksList'
import Booksdetail from'@/books/booksdetail'
import Read from '@/books/read'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'Home',
      component:Home
    },
    {
      path:'/helloworld',
      name:'Helloworld',
      component:HelloWorld
    },
    {
      path:'/bookshelf',
      name:'Bookshelf',
      component:Bookshelf,
      meta:{
        auth:true
      },
      children:[
        
      ]
    },
    {
      path:'/communication',
      name:'Communication',
      component:Communication
    },
    {
      path:'/my',
      name:'My',
      component:My
    },
    {
      path:'/login',
      name:'Login',
      component:Login,
    },
    {
      path:'/bookslist',
      name:'BooksList',
      component:BooksList
    },
    {
      path:'/booksdetail',
      name:'Booksdetail',
      component:Booksdetail
    },
    {
      path:'/bookshelf/:id',
      name:'Read',
      component:Read
    }
  ]
})