<template>
   <div class="container">
      <div class="col-9 mx-auto ">
         <div class="card mb-5">
               <h5 
                  class="card-header" 
                  style="background-color:#003008;color:#fff;">
                  Search Guest</h5>
               <div 
                  class="card-body" 
                  style="text-align:justify;text-indent:50px;background-color:#facd50"> 
               
                  <div class="col-6 mx-auto">
                     <table class="table" >
                        <tbody>
                           <tr>
                              <th style="background-color:#003008;color:#fff;">Detail Number</th>
                              <td style="background-color:#ffe49c;"><b>{{resDetail.resDetailNum}}</b></td>
                           </tr>
                           <tr>
                              <th style="background-color:#003008;color:#fff;">Guest ID</th>
                              <td style="background-color:#ffe49c;">{{ resDetail.resDetailGuestID }}</td>
                           </tr>
                           <tr>
                              <th style="background-color:#003008;color:#fff;">Room No.</th>
                              <td style="background-color:#ffe49c;">{{ resDetail.resDetailRmNum }}</td>
                           </tr>
                           <tr>
                              <th style="background-color:#003008;color:#fff;">Room Price</th>
                              <td style="background-color:#ffe49c;">{{ resDetail.resDetailPrice }}</td>
                           </tr>
                           <tr>
                              <th style="background-color:#003008;color:#fff;">Guest Status</th>
                              <td style="background-color:#ffe49c;">{{ resDetail.resDetailStatus }}</td>
                           </tr>
                           <tr>
                              <th style="background-color:#003008;color:#fff;">Room Type</th>
                              <td style="background-color:#ffe49c;">{{ resDetail.resDetailRmType }}</td>
                           </tr>
                           <tr>
                              <th style="background-color:#003008;color:#fff;">Room Check-In-Date</th>
                              <td style="background-color:#ffe49c;">{{ resDetail.resDetailCheckInDate }}</td>
                           </tr>
                           <tr>
                              <th style="background-color:#003008;color:#fff;">Room Check-Out-Date</th>
                              <td style="background-color:#ffe49c;">{{ resDetail.resDetailCheckOutDate }}</td>
                           </tr>
                        </tbody>
                     </table>
                     <router-link 
                        :to="{ 
                           name: 'AdminShow'}"
                           class="btn btn-primary mx-auto">
                        <i class="bi bi-arrow-left-square"></i>
                        Back To Home
               </router-link>
                  </div>
               </div>
               
         </div>
      </div>
   </div>   
</template>

<script>
import axios from 'axios'

export default{
   name:"AdminGuestDetail",
   
   data(){
      return {
         resDetailGuestID: this.$route.params.resDetailGuestID,
         resDetail:''
      }
   }, 
   created(){
      axios.get('http://localhost:8080/api/resDetails/guestDetail/' + this.resDetailGuestID)
         .then(res => {
            this.resDetail = res.data[0];
            console.log(this.resDetail)
         });
   }
   
}
</script>

