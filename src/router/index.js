import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/views/pages/Home.vue'
import About from '../components/views/pages/About.vue'
import Rent from '../components/views/pages/Rent.vue'
import Success from '../components/views/pages/Success.vue'
//==ADMIN PART
import Login from '../components/views/adminPages/Login.vue'
import Register from '../components/views/adminPages/Register.vue'

import AdminSidebar from '../components/layouts/AdminSidebar.vue'
import AdminShow from '../components/views/adminPages/AdminShow.vue'
import AdminAbout from '../components/views/adminPages/AdminAbout.vue'
import AdminCheckGuest from '../components/views/adminPages/AdminCheckGuest.vue'
import AdminAddEmp from '../components/views/adminPages/AdminAddEmployee.vue'
import AdminGuestDetail from '../components/views/adminPages/AdminGuestDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/rent',
    name: 'Rent',
    component: Rent
  },
  {
    path: '/msgSuccess',
    name: 'Success',
    component: Success
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresVisitor: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },

  {
    path: '/showGuest',
    name: 'AdminShow',
    meta: { requiresAuth: true },
    components:{
      default:AdminShow,
      adminNav: AdminSidebar,
    },
  },
  {
    path:'/adminAbout',
    name: 'AdminAbout',
    meta: {requiresAuth: true},
    components:{
      default:AdminAbout,
      adminNav: AdminSidebar,
    }
  },
  {
    path:'/adminCheckGuest',
    name:'AdminCheckGuest',
    meta: {requiresAuth: true},
    components:{
      default:AdminCheckGuest,
      adminNav: AdminSidebar,
    }
  },
  {
    path:'/adminAddEmp',
    name:'AdminAddEmp',
    meta: {requiresAuth: true},
    components:{
      default:AdminAddEmp,
      adminNav: AdminSidebar,
    }
  },
    // SHOW GUEST DATA
  {
    path:'/guestDetails/:resDetailGuestID',
    name:'AdminGuestDetail',
    meta: {requiresAuth: true},
    components:{
      default:AdminGuestDetail,
      adminNav: AdminSidebar,
    },
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  //base: process.env.BASE_URL,
  routes
})

export default router