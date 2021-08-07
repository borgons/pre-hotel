<template>
   <div class="container">
      <div class="col-6 mx-auto mt-5">
         <div class="card">
            <h5 class="card-header" style="background-color:#003008;color:#fff;">Rent Now!!!</h5>
            <div class="card-body" style="text-align:justify;text-indent:50px;background-color:#facd50">  

               <!--FORMS HERE -->
               <LoginForm />

            </div>
         </div>
      </div>
   </div>
</template>

<script>
import LoginForm from '../../forms/LoginForm' 

export default {
   name:"Login",
   components:{
      LoginForm
   }
}
</script>

