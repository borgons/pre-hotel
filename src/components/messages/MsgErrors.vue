<template>
      <div v-for="(errors, k) in allErrors" :key="k">
         <ul v-for="error in errors" :key="error" class="errors"><li>{{ error }}</li></ul>
      </div>
      <!-- <div v-for="(loginErrors, l) in loginMsgErrors" :key="l">
         <ul v-for="loginError in loginErrors" :key="loginError" class="errors"><li>{{ loginError }}</li></ul>
      </div> -->
      <div v-if="logError">
         <p class="errors">{{ loginMsgErrors }}</p>
      </div>
      
      <div v-if="notFound">
         <p class="errors">{{ errorMsgs }}</p>
      </div>
      

</template>


<script>
import { mapGetters } from "vuex";

export default {
   name: "MsgErrors",
   //props:["errors"],
   data(){
      return{
         logError:true,
         notFound:true
      }
   },
   computed: mapGetters([
      'allErrors','loginMsgErrors','errorMsgs'
   ])
};
</script>

<style scoped>
.errors{
   color:red;
}

</style>