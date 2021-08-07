<template>
   <AdminSidebar />
   <div class="container">
      <div class="col-9 mx-auto ">
         <div class="card mb-5">
            <h5 class="card-header" style="background-color:#003008;color:#fff;">Add Employee</h5>
            <div class="card-body" style="text-align:justify;text-indent:50px;background-color:#facd50">  
               <div class="input-group mb-3">
                  
                  <!-- FORM -->
                  <EmployeeForm />

               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import AdminSidebar from '../../layouts/AdminSidebar'
import EmployeeForm from '../../forms/EmployeeForm'

export default {
   name:"AdminAddEmployee",
   components:{
      AdminSidebar,
      EmployeeForm
   }
}
</script>

<style>

</style>