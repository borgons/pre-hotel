<template>

   <MsgErrors />

   <form @submit.prevent="onRegister" class="row col-9 mx-auto ">
      <p style="font-weight:bold; text-align:center;">PLEASE REGISTER </p>

      <div class="input-group mb-2">
         <input 
            type="number" 
            v-model="flds.adminID" 
            class="form-control" 
            name="adminID" 
            id="adminID" 
            placeholder="Admin ID" />
      </div> 

      <div class="input-group mb-2">
         <input 
            type="text"
            v-model="flds.adminUsername" 
            name="adminUsername" 
            id="adminUsername"  
            class="form-control" 
            placeholder="Admin Username" />   
      </div>
      
      <div class="input-group mb-2">
         <input 
            type="text" 
            v-model="flds.adminEmpID"
            name="adminEmpID" 
            id="adminEmpID"  
            class="form-control" 
            placeholder="Admin Employee ID"> 
      </div>
      
      <div class="input-group mb-2">
         <input 
            type="text"
            v-model="flds.adminEmpFirst" 
            name="adminEmpFirst" 
            id="adminEmpFirst"  
            class="form-control" 
            placeholder="Admin Employee FirstName">
      </div>

      <div class="input-group mb-2">
         <input 
            type="text"
            v-model="flds.adminEmpLast" 
            name="adminEmpLast" 
            id="adminEmpLast"  
            class="form-control" 
            placeholder="Admin Employee LastName">
      </div>
      
      <div class="input-group mb-2">
         <input 
            type="password"
            v-model="flds.adminPass" 
            name="adminPass" 
            id="adminPass"  
            class="form-control" 
            placeholder="Password">
      </div>

      <div class="input-group mb-3">
         <input 
            type="password" 
            v-model="flds.adminPass_confirmation"
            name="adminPass_confirmation" 
            id="adminPass_confirmation"  
            class="form-control" 
            placeholder="Confirm Password">
      </div>
      
      <input 
         type="submit" 
         class="mb-3 btn btn-primary btn-lg col-3 mx-auto" 
         id="myBtn" 
         style="display:block;" 
         value="Submit"
      >
      <router-link 
         to="/login" 
         style="text-decoration:none; text-align:center;">
         &#8592; BACK
      </router-link> 

   </form>

</template>

<script>
import MsgErrors from '../messages/MsgErrors';
import { mapActions } from 'vuex'

export default {
   name:"RegisterForm",
   components:{
      MsgErrors
   },
   data(){
      return{
         flds:{
            adminID:'',
            adminEmpIn:'',
            adminEmpFirst:'',
            adminEmpLast:'',
            adminUsername:'',
            adminPass:'',
            adminPass_confirmation:'',
         }
      }
   },

   methods:{
      ...mapActions(["register"]),
      onRegister(){
         this.register(this.flds)
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