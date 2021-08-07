<template>
   <header id="showcase" class="mb-3"></header>

   <div class="container">
      <div class="col-9 mx-auto">
         <div class="card">
            <h5 class="card-header" style="background-color:#003008;color:#fff;">Rent Now!!!</h5>
            <div class="card-body" style="text-align:justify;text-indent:50px;background-color:#ffe49c">  

               <!--FORMS HERE -->
               <RentForm />

            </div>
         </div>
      </div>
   </div>
</template>

<script>
import RentForm from '../../../components/forms/RentForm'

export default {
   name:"Rent",
   components:{
      RentForm
   }
}

</script>

<style scoped>
#showcase{
      background-image: url("../../../assets/img/showcase3.jpg");
      height:50vh;
      opacity:1;
      background-size:cover;
      background-position:5% 10%;
      background-repeat:no-repeat;
}

</style>