<template>
  <Navbar v-show="adminPage"/>

  <router-view ></router-view>
  <Footer v-show="adminPage"/>
</template>

<script>

import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

export default {
  computed:{
    adminPage(){
        const notAdmin = this.$route.path === '/login' || this.$route.path === '/register' || this.$route.path === '/showGuest' || this.$route.path === '/adminAbout' || this.$route.path === '/adminCheckGuest' || this.$route.path === '/adminAddEmp' ||
        this.$route.path === '/guestDetails/:resDetailGuestID';

        if(notAdmin){
          return false
        } else {
          return true
        }
    }
  },
  components:{
    Navbar, 
    Footer,
  }
}
</script>
