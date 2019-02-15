import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import User from '@/components/User/UserMess.vue'
import Foodtime from '@/components/User/FoodTime.vue'
import Mylogin from '@/components/login/mylogin.vue'
import Myadmin from '@/components/login/Myadmin.vue'
import Recommended from '@/components/recommended/recommended.vue'
import Logout from '@/components/logout/Logout.vue'
import Comments from '@/components/logout/Comment.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:'/Home'},
    {path: '/Home',name: 'Home',component: Home},
    {path: '/User',name: 'User', component: User},
    {path: '/Foodtime',name:'Foodtime',component: Foodtime},
    {path: '/Mylogin',name: 'Mylogin', component: Mylogin},
    {path: '/Myadmin',name: 'Myadmin', component: Myadmin},
    {path: '/Recommended',name: 'Recommended', component: Recommended},
    {path: '/Logout',name: 'Logout',component: Logout},
    {path: '/Comment',name: 'Comment',component: Comments},
  ]
})
