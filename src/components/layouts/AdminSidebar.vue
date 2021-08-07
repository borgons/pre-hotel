<template>
   <nav class="navbar navbar-expand-lg navbar-custom mb-3">
   <div class="container">
      <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav">
         <li class="nav-item ">
            <router-link class="nav-link"  to="/showGuest">Show Guest</router-link>
         </li>
         <li class="nav-item">
            <router-link class="nav-link" to="/adminCheckGuest">Check Guest</router-link>
         </li>
         <li class="nav-item">
            <router-link class="nav-link" to="/adminAddEmp">Add Employee</router-link>
         </li>
         <li class="nav-item">
            <router-link class="nav-link" to="/adminAbout">About Admin</router-link>
         </li>
      </ul>
      <ul class="navbar-nav ms-auto">
         <li class="nav-item">
            <p style="font-weight:500;color:green;margin-top:7.5px;">Hello {{ userName }}</p>
         </li>
         <li class="nav-item">
            <router-link class="nav-link" to="#"  @click="onLogout">LogOut</router-link>
         </li>
      </ul>
      </div>
   </div>
   </nav>
</template>

<script>
import { mapActions } from 'vuex'
import ifAuth from '../ifAuth/ifAuth'

export default {
   name: "AdminSidebar",
   data(){
      return{
         userName:''
      }
   },
   mounted(){
      ifAuth().get('/user').then(response => {
         //console.log(response)
         this.userName = response.data.adminUsername
      })
   },
   
   methods: {
      ...mapActions(["logout"]),
      onLogout() {
         this.logout()         
      }
   },

   
}


</script>

<style scoped>
   .navbar-custom {
      background-color: #79c280;
   }

   .navbar-custom .navbar-brand,
   .navbar-custom .navbar-nav > li > a {
      color: green;
   }

   .navbar-custom .navbar-nav > li > a:hover {
      font-weight:bold;
   }
</style>