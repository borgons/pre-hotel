<template>
   <AdminSidebar />

   <div class="container">
      <div class="col-9 mx-auto ">
         <div class="card mb-5">
            <h5 class="card-header" style="background-color:#003008;color:#fff;">About this page</h5>
            <div class="card-body" style="text-align:justify;text-indent:50px;background-color:#facd50">  
               <p>This website is version 0.1</p>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import AdminSidebar from '../../layouts/AdminSidebar'

export default {
   name:"AdminAbout",
   components:{
      AdminSidebar
   }
}
</script>

<style>

</style>