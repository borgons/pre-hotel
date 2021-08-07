<template>
   <div class="container">
      <div class="col-6 mx-auto mt-5">
         <div class="card">
            <h5 class="card-header" style="background-color:#003008;color:#fff;">REGISTRATION</h5>
            <div class="card-body" style="text-align:justify;text-indent:50px;background-color:#facd50">  

               <!--FORMS HERE -->
               <RegisterForm />

            </div>
         </div>
      </div>
   </div>
</template>

<script>
import RegisterForm from '../../forms/RegisterForm'
export default {
   name:"Register",
   components:{
      RegisterForm
   }
}
</script>