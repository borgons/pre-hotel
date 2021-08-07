<template>
   <AdminSidebar />
   <router-view name="adminNav"></router-view>

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
                     v-model="search" 
                     class="form-control" 
                     placeholder="Search ID no." 
                     >
                  <button 
                        class="btn btn-primary" 
                        type="button" 
                        id="button-addon2"
                        @click.prevent="onSearch()">
                        Search ID
                     </button>
               </div>
            </div>
         </div>

         <table class="table">
            <thead style="background-color:#003008;color:#fff;">
               <tr>
                  <th scope="col">Guest ID</th>
                  <th scope="col">Guest FirstName</th>
                  <th scope="col">Guest LastName</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
               </tr>
            </thead>
            <tbody v-for="resGuest in resGuests" :key="resGuest.guestID" 
            style="background-color:#ffe49c;">
               <tr>
                  <td>{{ resGuest.guestID }}</td>
                  <td>{{ resGuest.guestFirst }}</td>
                  <td>{{ resGuest.guestLast }}</td>
                  <td>
                     <router-link 
                        :to="{ 
                           name: 'AdminGuestDetail', 
                           params: { resDetailGuestID: resGuest.guestID.toString() } }" class="btn btn-primary">
                        <i class="bi bi-binoculars"></i>
                     </router-link>

                  </td>
                  <td>
                     <button 
                        class="btn btn-danger" 
                        type="button" 
                        id="button-addon2"
                        @click.prevent="onChkOut(resGuest)">
                        <i class="bi bi-box-arrow-left"></i>
                     </button>
                  </td>
               </tr>
            </tbody>
         </table>

         <div class="row">
            <div class="col-md-8">
               <nav>
               <ul class="pagination justify-content-center">
                  <li v-bind:class="[{disabled:!pagination.prev_page_url}]" class="page-item">
                     <button class="page-link" @click="fetchPaginationGuests(pagination.prev_page_url)">Previous</button>
                  </li>

                  <li v-for="n in pagination.last_page" v-bind:key="n"
                     v-bind:class=" {active:!pagination.current_page == n}" class="page-item">
                     <button class="page-link" href="#" @click="fetchPaginationGuests(pagination.path_page + n)">{{n}}</button>
                  </li>

                  <li class="page-item disabled">
                     <a class="page-link" href="#">
                     Page {{ pagination.from }} of {{ pagination.to }}
                     </a>
                     <p> {{ pagination.total }} Guest/s </p>
                  </li>

                  <li v-bind:class="[{disabled: !pagination.next_page_url}]" class="page-item">
                     <button class="page-link" @click="fetchPaginationGuests(pagination.next_page_url)">Next</button>
                  </li>
                  
               </ul>
               </nav>
            </div> 


         </div>         
      </div>
   </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex'
import AdminSidebar from '../../layouts/AdminSidebar.vue'

export default {
   name:"ShowGuest",
   components:{
      AdminSidebar
   },
   data(){
      return{
         search:'',
         resGuests:{},
         pagination:{},
         url:'http://localhost:8080/api/resDetails/AllGuest'
      }
   },

   created(){
      this.getGuests();
   },

   methods:{
      getGuests(){
         let $this = this;
         axios.get(this.url)
         .then(response => {
            this.resGuests = response.data.data;
            $this.makePagination(response.data)
         })
         .catch(err => console.log(err))
      },

      makePagination(data){
         let pagination = {
            current_page: data.current_page,
            last_page: data.last_page,
            from: data.from,
            to: data.to,
            prev_page_url: data.prev_page_url,
            next_page_url: data.next_page_url,
            path_page: data.path + "?page=",
            total: data.total,
         };
         this.pagination = pagination;
      },

      fetchPaginationGuests(url){
         this.url = url;
         this.getGuests();
      },

      onSearch(){
         axios.get(`http://localhost:8080/api/resDetails/AllGuest?search=${this.search}`)
         .then(res => {
            if(res){
               this.resGuests = res.data.data
            }
         })
      },

      ...mapActions(["adminChkOut"]),

      onChkOut(resGuest){
         const updGuest = {
            guestID:resGuest.guestID ,
         }
         this.adminChkOut(updGuest)
      },

      
   },
}
</script>