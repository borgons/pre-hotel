import axios from 'axios';

const resDetail = {
   guestID: '',
   guestFirst: '',
   guestLast: '',
   guestContact: '',
   guestAddress: '',
   resDetailRmNum: '',
   resDetailPrice: '',
   resDetailRmType: '',
   resDetailCheckInDate: '',
}

const state = {
   errors: {},
   resDetails:[]
};

const getters = {
   allErrors: state => state.errors
};

const actions = {
   async reserveGuest({ commit }, resDetail) {
      await axios.post(
         'http://localhost:8080/api/resDetail', resDetail)
         .then(response => {
            if(response.status == 200){
               window.location.href="#/msgSuccess"
               commit('newGuest', response.data);
            }
         })
         .catch(err => {
            if (err.response.status == 422) {
               this.errors = err.response.data.errors
               commit('setErrors', this.errors);
            } 
         })
   }
};

const mutations = {
   setErrors: (state, errors) => (state.errors = errors),
   newGuest: (state, resDetail) => state.resDetails.unshift(resDetail)
};

export default {
   state,
   getters,
   actions,
   mutations
}

