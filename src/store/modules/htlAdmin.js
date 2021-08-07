import axios from 'axios'

const addEmployee = {
   empID:'',
   empFirst:'',
   empLast:'',
   empPosition:''
}

const state = {
   //MESSAGES
   errors:{},
   msgSuccess:'',
   msgErrors:'',
   //DATAS
   //resDetailData:[],
   adminEmps:[],
   resDetailSingle:'',

   updResGuests:[],
   resGuest:[],
   
}

const getters = {
   successMsgs: state => state.msgSuccess,
   errorMsgs: state => state.msgErrors, 
   resDetData : state => state.resDetailSingle,
}


const actions = {
   
   adminChkOut ({ commit }, updGuest){
      axios.get('/sanctum/csrf-cookie').then(response => {

         const res =axios.put(
            `http://localhost:8080/api/resDetails/checkOut/${updGuest.guestID}`,updGuest);
         
         commit('guestCheckOut', res.data);
         console.log('UPDATED');
         
      });
   },

   addEmployee({ commit }, addEmployee) {
      axios.get('/sanctum/csrf-cookie').then(response => {
         axios.post(
            'http://localhost:8080/api/employee', addEmployee)
            .then(response => {
               if(response.status == 200){
                  commit('newEmp', response.data);
                  this.msgSuccess = response.data.msg
                  commit('setSuccessMsgs', this.msgSuccess  );
               }
            })
            .catch(err => {
               if (err.response.status == 422) {
                  this.errors = err.response.data.errors
                  commit('setErrors', this.errors);
               } 
            })
      })
   },

   admCheckGuestData ({ commit }, searchID ){
      axios.get('/sanctum/csrf-cookie').then(response => {
      
         /* ### ALL RECORDS ### */
         // axios.get(
         //    'http://localhost:8080/api/resDetails')
         // .then(response => {
         //    console.log(response.data)
         //    commit('setResDetail', response.data);
         // })
   
         /* ### SINGLE RECORD ### */
         axios.post(
            `http://localhost:8080/api/resDetails/srchGuest/${searchID}`)
            .then(response => {
               this.resDetailSingle = response.data[0]
               const guestFound = this.resDetailSingle
               
               if(guestFound){
                  console.log(this.resDetailSingle)
                  commit('setResDetail', this.resDetailSingle);
                  setTimeout(() => {
                     window.location.reload()
                  }, 4000);
               } else {
                  this.errors = response.data.errors
                  commit('setErrorMessage', this.errors);
                  setTimeout(() => {
                     window.location.reload()
                  }, 4000);
               }
            })
      })
   },

}

const mutations = {
   setSuccessMsgs: (state, successMsg) => (state.msgSuccess = successMsg), 
   setErrorMessage: (state, errorsMsg) => (state.msgErrors = errorsMsg),
   setErrors: (state, errors) => (state.errors = errors),
   newEmp:(state, adminEmp) => state.adminEmps.unshift = adminEmp,
   setResDetail:(state, resDetail) => (state.resDetailSingle = resDetail),

   guestCheckOut:(state, updGuest) => {
      const index = state.updResGuests.findIndex(resGuest => resGuest.guestID === updGuest.guestID);
      if(index !== -1){
         state.updResGuests.splice(index, 1, updGuest);
      }
   }
}


export default {
   state,
   getters,
   actions,
   mutations
}