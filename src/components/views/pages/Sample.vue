<template>
      <div class="resDetail">
         <div
            v-for="resDetail in allResDetails"
            :key = "resDetail.resDetailRmNum"
         >
            <h1>{{ resDetail.resDetailPrice }}</h1>
            <h1>{{ resDetail.resDetailStatus }}</h1>
         </div>
            
      </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
   name:"Sample",

   methods: {
      ...mapActions(["fetchResDetails"])
   },

   computed: mapGetters(['allResDetails']),
   
   created(){
      this.fetchResDetails();
   }
}
</script>