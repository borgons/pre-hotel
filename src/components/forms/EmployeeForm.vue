<template>
   
   <MsgErrors />
   <MsgSuccess />

   <form @submit.prevent="onSubmit" class="row col-9 mx-auto">
      <div class="input-group mb-2">
         <span class="input-group-text" style="background-color:#79c280;" id="basic-addon1">Emp. ID</span>
         <input type="number" v-model="flds.empID"   class="form-control" placeholder="Employee ID" />
      </div> 

      <div class="input-group mb-2">
         <span class="input-group-text" style="background-color:#79c280;" id="basic-addon1">Emp. FirstName</span>
         <input type="text"  v-model="flds.empFirst"  class="form-control" placeholder="Employee FirstName" />   
      </div>
      
      <div class="input-group mb-2">
         <span class="input-group-text" style="background-color:#79c280;" id="basic-addon1">Emp. LastName</span>
         <input type="text" v-model="flds.empLast"  class="form-control" placeholder="Employee LastName"> 
      </div>
      
      <div class="input-group mb-2">
         <span class="input-group-text" style="background-color:#79c280;" id="basic-addon1">Emp. Position</span>
         <input type="text" v-model="flds.empPosition" class="form-control" placeholder="Employee Position">
      </div>

      <input type="submit" class="btn btn-primary btn-lg col-3 mx-auto" id="myBtn" style="display:block;" value="Submit">
   </form>
</template>

<script>
import MsgErrors from '../messages/MsgErrors'
import MsgSuccess from '../messages/MsgSuccess'
import { mapGetters, mapActions } from 'vuex'

export default {
   components:{
      MsgErrors, 
      MsgSuccess

   }, 
   computed:{
      ...mapGetters(["allErrors"]),
   },
   data(){
      return{
         flds:{
            empID:'',
            empFirst:'',
            empLast:'',
            empPosition:''
         },
      }
   },
   methods: {
      ...mapActions(["addEmployee"]),
      onSubmit() {
         this.addEmployee(this.flds)         
      }
   },  
}
</script>