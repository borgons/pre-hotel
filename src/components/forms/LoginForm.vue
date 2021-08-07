<template>

   <MsgErrors />
   
   <form @submit.prevent="onLogin" class="row col-9 mx-auto ">
      <p style="font-weight:bold; text-align:center;">PLEASE LOG-IN</p>

      <div class="input-group mb-2">
         <span class="input-group-text" style="background-color:#79c280;" id="basic-addon1">Username</span>
         <input type="text" v-model="flds.adminUsername" name="adminUsername" id="adminUsername" class="form-control" placeholder="Username" />
      </div> 

      <div class="input-group mb-4">
         <span class="input-group-text" style="background-color:#79c280;" id="basic-addon1">Password</span>
         <input type="password" v-model="flds.adminPass" name="adminPass" id="adminPass"  class="form-control" placeholder="Password" />   
      </div>

      <input 
         type="submit" 
         class="mb-3 btn btn-primary btn-lg col-3 mx-auto" 
         id="myBtn" 
         style="display:block;" 
         value="Submit"
      >
      <router-link to="/register" style="text-decoration:none;  text-align:center;">Register if you don't have account</router-link> 
   </form>
</template>

<script>
import MsgErrors from '../messages/MsgErrors'
import { mapActions } from 'vuex'

export default {
   name:"LoginForm",
   components:{
      MsgErrors
   },
   data(){
      return{
         flds:{
            adminUsername:'',
            adminPass:''
         }
      }
   },

   methods:{
      ...mapActions(["login"]),
      onLogin(){
         this.login(this.flds)
      }
   }
}
</script>

<style scoped>
a:hover {
   color: #043000;
   font-weight: 500;
}

a:visited { 
   color: #e40000d5;
}

</style>