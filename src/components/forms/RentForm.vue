<template>
   
   <MsgErrors/>
   
   <form @submit.prevent="onSubmit" class="row col-9 mx-auto">
      <p style="font-weight:bold; text-align:center;">PERSONAL INFORMATION</p>
      <div class="input-group mb-2">
         <span class="input-group-text" style="background-color:#79c280;" id="basic-addon1">Guest ID</span>
         <input type="number" v-model="flds.guestID" class="form-control" name="guestID" id="guestID" placeholder="GuestID" />
      </div> 

      <div class="input-group mb-2">
         <span class="input-group-text" style="background-color:#79c280;" id="basic-addon1">FirstName</span>
         <input type="text" v-model="flds.guestFirst" name="guestFirst" id="guestFirst"  class="form-control" placeholder="FirstName" />   
      </div>
      
      <div class="input-group mb-2">
         <span class="input-group-text" style="background-color:#79c280;" id="basic-addon1">LastName</span>
         <input type="text" v-model="flds.guestLast" name="guestLast" id="guestLast"  class="form-control" placeholder="LastName"> 
      </div>
      
      <div class="input-group mb-2">
         <span class="input-group-text" style="background-color:#79c280;" id="basic-addon1">Address</span>
         <input type="text" v-model="flds.guestAddress" name="guestAddress" id="guestAddress"  class="form-control" placeholder="Address">
      </div>

      <div class="input-group mb-2">
         <span class="input-group-text" style="background-color:#79c280;" id="basic-addon1">Contact No</span>
         <input type="text" v-model="flds.guestContact" name="guestContact" id="guestContact"  class="form-control" placeholder="Contact No">
      </div>
      
      <p style="font-weight:bold; text-align:center;">ROOM RESERVATION</p>
      <div class="input-group mb-2">
         <span class="input-group-text" style="background-color:#79c280;" id="basic-addon1">Room No</span>
         <input type="number" v-model="flds.resDetailRmNum" name="resDetailRmNum" id="resDetailRmNum"  class="form-control" placeholder="Room No">
      </div>
      

      <div class="input-group mb-2">
         <span class="input-group-text" style="background-color:#79c280;" id="basic-addon1">Room Type</span>
         <input type="text" v-model="flds.resDetailRmType" name="resDetailRmType" id="resDetailRmType"  class="form-control" placeholder="Room Type">
      </div>
      
      <div class="input-group mb-2">
         <span class="input-group-text" style="background-color:#79c280;" id="basic-addon1">Room Price</span>
         <input type="text" v-model="flds.resDetailPrice" name="resDetailPrice" id="resDetailPrice"  class="form-control" placeholder="Room Price">
      </div>
      
      <div class="input-group mb-2">
         <span class="input-group-text" style="background-color:#79c280;" id="basic-addon1">Check-In Date</span>
         <input type="date" v-model="flds.resDetailCheckInDate" name="resDetailCheckInDate" id="resDetailCheckInDate"  class="form-control" placeholder="Room Price">
      </div>
      
      <input type="submit" class="btn btn-primary btn-lg col-3 mx-auto" id="myBtn" style="display:block;" value="Submit">
   </form>
</template>

<script>
import MsgErrors from '../messages/MsgErrors';
import { mapActions, mapGetters} from 'vuex'

export default {
   name: "RentForm",
   components:{
      MsgErrors
   },
   computed:{
      ...mapGetters(["allErrors"]),
   },
   data(){
      return {
         flds:{
            guestID:'',
            guestFirst:'',
            guestLast:'', 
            guestContact:'',
            guestAddress:'',
            resDetailRmNum:'',
            resDetailPrice:'',
            resDetailRmType:'',
            resDetailCheckInDate:''
         },
         //errors:[]
      }
   },

   methods: {
      ...mapActions(["reserveGuest"]),
      onSubmit() {
         this.reserveGuest(this.flds)         
      }
   },
}
</script> 

