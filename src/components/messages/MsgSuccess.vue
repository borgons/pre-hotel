<template>
      <div v-if="frmSuccess">
         <p class="success">{{ successMsgs }}</p>
      </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
   name: "MsgSuccess",
   data(){
      return{
         frmSuccess:true,
      }
   },
   computed: mapGetters([
      'successMsgs'
   ])
};
</script>

<style scoped>
.success{
   color:green;
}

</style>