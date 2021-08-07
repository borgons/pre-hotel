<template>
   <AdminSidebar />

   <div class="container">
      <div class="col-9 mx-auto ">
         <div class="card mb-5">
            <h5 class="card-header" style="background-color:#003008;color:#fff;">Search Guest</h5>
            <div class="card-body" style="text-align:justify;text-indent:50px;background-color:#facd50">  
               <div class="input-group mb-3">
                  <span 
                     class="input-group-text" 
                     style="background-color:#79c280;"  
                     id="basic-addon1">
                        <i class="bi bi-search"></i>
                  </span>
                  <input 
                     type="text" 
                     class="form-control" 
                     placeholder="Search ID no."
                     v-model="searchID" 
                     >
                  <button 
                     class="btn btn-primary" 
                     type="button" 
                     id="button-addon2"
                     @click.prevent="onSearch()">
                     Search
                  </button>
               </div>
            </div>
         </div>
      </div>


      <div v-if="!resDetData.guestID">
         <MsgErrors />
      </div>
      <div v-else>
         <div class="col-6 mx-auto">
            <table class="table" >
               <tbody>
                  <tr>
                     <th style="background-color:#003008;color:#fff;">guestID</th>
                     <td style="background-color:#ffe49c;">{{resDetData.guestID}}</td>
                  </tr>
                  <tr>
                     <th style="background-color:#003008;color:#fff;">guestFirst</th>
                     <td style="background-color:#ffe49c;">{{resDetData.guestFirst}}</td>
                  </tr>
                  <tr>
                     <th style="background-color:#003008;color:#fff;">guestLast</th>
                     <td style="background-color:#ffe49c;">{{resDetData.guestLast}}</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>

   </div>

</template>

<script>
import MsgErrors from '../../messages/MsgErrors'

import AdminSidebar from '../../layouts/AdminSidebar'
import { mapActions, mapGetters  } from 'vuex'

export default {
   name:"AdminAbout",
   components:{
      MsgErrors,
      AdminSidebar
   },
   data(){
      return {
         searchID:'',
         //guestID:true,
      }
   }, 
   methods: {
      ...mapActions(["admCheckGuestData"]),
      onSearch(){
         this.admCheckGuestData(this.searchID);
      },

   },
   computed: mapGetters(["resDetData"]),
   



}
</script>

<style>

</style>